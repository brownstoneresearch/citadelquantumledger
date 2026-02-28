import { getOrSetCache } from '../lib/cache.js';
import { chunk, fetchJson } from '../lib/http.js';
import { midpoint, normalizeMarketRow } from '../lib/normalize.js';
import { IG_EPICS } from '../config/igEpics.generated.js';

const SESSION_TTL_MS = 45 * 60 * 1000;
const SEARCH_TTL_MS = 24 * 60 * 60 * 1000;

function baseUrl(env) {
  return env.IG_BASE_URL || 'https://demo-api.ig.com/gateway/deal';
}

async function login(env) {
  return getOrSetCache('ig:session', SESSION_TTL_MS, async () => {
    const payload = await fetchJson(`${baseUrl(env)}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json; charset=UTF-8',
        'X-IG-API-KEY': env.IG_API_KEY,
        Version: '2'
      },
      body: JSON.stringify({
        identifier: env.IG_IDENTIFIER,
        password: env.IG_PASSWORD,
        encryptedPassword: false
      })
    }, { label: 'IG session' });

    // Some runtimes do not expose response headers via fetchJson, so login once more with fetch.
    const response = await fetch(`${baseUrl(env)}/session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json; charset=UTF-8',
        'X-IG-API-KEY': env.IG_API_KEY,
        Version: '2'
      },
      body: JSON.stringify({
        identifier: env.IG_IDENTIFIER,
        password: env.IG_PASSWORD,
        encryptedPassword: false
      })
    });

    const bodyText = await response.text();
    let body = payload;
    if (bodyText) {
      try { body = JSON.parse(bodyText); } catch { body = payload; }
    }

    if (!response.ok) {
      throw new Error(`IG session failed with ${response.status}: ${bodyText.slice(0, 500)}`);
    }

    const cst = response.headers.get('CST') || response.headers.get('cst');
    const xSecurityToken = response.headers.get('X-SECURITY-TOKEN') || response.headers.get('x-security-token');

    if (!cst || !xSecurityToken) {
      throw new Error('IG login succeeded but CST/X-SECURITY-TOKEN headers were missing.');
    }

    return {
      cst,
      xSecurityToken,
      lightstreamerEndpoint: body?.lightstreamerEndpoint,
      currentAccountId: body?.currentAccountId || body?.accountId,
      accountType: body?.accountType,
      timezoneOffset: body?.timezoneOffset
    };
  });
}

function authHeaders(env, session, version = '2') {
  return {
    Accept: 'application/json; charset=UTF-8',
    'X-IG-API-KEY': env.IG_API_KEY,
    CST: session.cst,
    'X-SECURITY-TOKEN': session.xSecurityToken,
    Version: version
  };
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function expectedInstrumentType(asset) {
  if (asset.category === 'fx') return 'CURRENCIES';
  if (asset.category === 'indices') return 'INDICES';
  if (asset.category === 'commodities') return 'COMMODITIES';
  if (asset.category === 'fixed_income_rates') return 'RATES';
  return null;
}

function scoreCandidate(asset, candidate) {
  const canonical = normalizeText(asset.canonical_symbol);
  const display = normalizeText(asset.display_name);
  const instrumentName = normalizeText(candidate.instrumentName || candidate.name);
  const epic = normalizeText(candidate.epic);
  const instrumentType = candidate.instrumentType || candidate.type;

  let score = 0;
  if (instrumentName.includes(display)) score += 40;
  if (instrumentName.includes(canonical)) score += 30;
  if (epic.includes(canonical.replace(/ /g, ''))) score += 15;
  if (candidate.streamingPricesAvailable) score += 10;
  if (expectedInstrumentType(asset) && expectedInstrumentType(asset) === instrumentType) score += 15;
  for (const term of asset.primary_route?.search_terms || []) {
    const normalized = normalizeText(term);
    if (instrumentName.includes(normalized)) score += 8;
    if (epic.includes(normalized)) score += 4;
  }
  return score;
}

function unpackMarketsSearchResponse(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.markets)) return payload.markets;
  if (Array.isArray(payload?.marketDetails)) return payload.marketDetails;
  if (Array.isArray(payload?.nodes)) return payload.nodes;
  return [];
}

async function searchEpic(env, session, asset) {
  const override = IG_EPICS[asset.id];
  if (override) return override;

  return getOrSetCache(`ig:epic:${asset.id}`, SEARCH_TTL_MS, async () => {
    if (String(env.IG_ALLOW_RUNTIME_SEARCH || 'false').toLowerCase() !== 'true') {
      return null;
    }

    let best = null;
    for (const term of asset.primary_route?.search_terms || [asset.display_name]) {
      const query = new URLSearchParams({ searchTerm: term });
      const payload = await fetchJson(`${baseUrl(env)}/markets?${query.toString()}`, {
        headers: authHeaders(env, session, '1')
      }, { label: `IG search ${term}` });

      const candidates = unpackMarketsSearchResponse(payload);
      for (const candidate of candidates) {
        const score = scoreCandidate(asset, candidate);
        if (!best || score > best.score) {
          best = { epic: candidate.epic, score };
        }
      }
      if (best?.score >= 45) break;
    }

    return best?.epic || null;
  });
}

async function resolveEpics(env, session, assets) {
  const output = [];
  const unresolved = [];
  for (const asset of assets) {
    const epic = await searchEpic(env, session, asset);
    if (epic) {
      output.push({ asset, epic });
    } else {
      unresolved.push(asset.id);
    }
  }
  return { resolved: output, unresolved };
}

function unpackMarketDetails(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.marketDetails)) return payload.marketDetails;
  if (Array.isArray(payload?.markets)) return payload.markets;
  return [];
}

async function fetchSnapshotChunk(env, session, epics) {
  const query = new URLSearchParams({
    epics: epics.join(','),
    filter: 'SNAPSHOT_ONLY'
  });
  const payload = await fetchJson(`${baseUrl(env)}/markets?${query.toString()}`, {
    headers: authHeaders(env, session, '2')
  }, { label: 'IG markets snapshot' });
  return unpackMarketDetails(payload);
}

export async function fetchIgSnapshot(env, assets) {
  if (!env.IG_API_KEY || !env.IG_IDENTIFIER || !env.IG_PASSWORD || assets.length === 0) {
    return { markets: [], warnings: [] };
  }

  const session = await login(env);
  const { resolved, unresolved } = await resolveEpics(env, session, assets);
  const details = [];

  for (const group of chunk(resolved, 50)) {
    details.push(...await fetchSnapshotChunk(env, session, group.map((entry) => entry.epic)));
  }

  const byEpic = new Map(details.map((row) => [row.instrument?.epic || row.epic, row]));
  const markets = [];
  for (const entry of resolved) {
    const row = byEpic.get(entry.epic);
    if (!row) continue;
    const snapshot = row.snapshot || row.marketSnapshot || {};
    markets.push(normalizeMarketRow({
      asset: entry.asset,
      provider: 'ig',
      sourceSymbol: entry.epic,
      bid: snapshot.bid,
      ask: snapshot.offer,
      last: midpoint(snapshot.bid, snapshot.offer),
      changePct: snapshot.percentageChange,
      updatedAt: snapshot.updateTime,
      extra: {
        marketStatus: snapshot.marketStatus,
        instrumentType: row.instrument?.type || row.instrumentType
      }
    }));
  }

  const warnings = [];
  if (unresolved.length > 0) {
    warnings.push(`IG unresolved assets: ${unresolved.join(', ')}. Run node ./scripts/resolve-ig-epics.mjs and commit src/config/igEpics.generated.js for production.`);
  }

  return { markets, warnings };
}
