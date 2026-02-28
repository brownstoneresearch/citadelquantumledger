import { getOrSetCache } from '../lib/cache.js';
import { fetchJson } from '../lib/http.js';
import { midpoint, normalizeMarketRow } from '../lib/normalize.js';

const INSTRUMENTS_TTL_MS = 6 * 60 * 60 * 1000;

function baseUrl(env) {
  return env.OANDA_BASE_URL || 'https://api-fxpractice.oanda.com';
}

function authHeaders(env) {
  return {
    Authorization: `Bearer ${env.OANDA_API_TOKEN}`
  };
}

async function getInstrumentSet(env) {
  return getOrSetCache('oanda:instruments', INSTRUMENTS_TTL_MS, async () => {
    const payload = await fetchJson(`${baseUrl(env)}/v3/accounts/${encodeURIComponent(env.OANDA_ACCOUNT_ID)}/instruments`, {
      headers: authHeaders(env)
    }, { label: 'OANDA instruments' });
    return new Set((payload?.instruments || []).map((row) => row.name));
  });
}

function canonicalToInstrument(asset) {
  const fallback = (asset.fallback_routes || []).find((route) => route.provider === 'oanda' && route.instrument);
  if (fallback?.instrument) return fallback.instrument;
  return asset.canonical_symbol.replace(/\//g, '_');
}

export async function fetchOandaSnapshot(env, assets) {
  if (!env.OANDA_API_TOKEN || !env.OANDA_ACCOUNT_ID || assets.length === 0) {
    return { markets: [], warnings: [] };
  }

  const instrumentSet = await getInstrumentSet(env);
  const resolved = [];
  const unresolved = [];
  for (const asset of assets) {
    const instrument = canonicalToInstrument(asset);
    if (instrumentSet.has(instrument)) {
      resolved.push({ asset, instrument });
    } else {
      unresolved.push(asset.id);
    }
  }

  if (resolved.length === 0) {
    return { markets: [], warnings: unresolved.length ? [`OANDA unresolved assets: ${unresolved.join(', ')}`] : [] };
  }

  const payload = await fetchJson(
    `${baseUrl(env)}/v3/accounts/${encodeURIComponent(env.OANDA_ACCOUNT_ID)}/pricing?instruments=${encodeURIComponent(resolved.map((row) => row.instrument).join(','))}`,
    { headers: authHeaders(env) },
    { label: 'OANDA pricing' }
  );

  const byInstrument = new Map((payload?.prices || []).map((row) => [row.instrument, row]));
  const markets = [];
  for (const entry of resolved) {
    const row = byInstrument.get(entry.instrument);
    if (!row) continue;
    const bid = row.bids?.[0]?.price ?? row.closeoutBid;
    const ask = row.asks?.[0]?.price ?? row.closeoutAsk;
    markets.push(normalizeMarketRow({
      asset: entry.asset,
      provider: 'oanda',
      sourceSymbol: entry.instrument,
      bid,
      ask,
      last: midpoint(bid, ask),
      updatedAt: row.time,
      extra: {
        tradeable: row.tradeable,
        status: row.status
      }
    }));
  }

  return {
    markets,
    warnings: unresolved.length ? [`OANDA unresolved assets: ${unresolved.join(', ')}`] : []
  };
}
