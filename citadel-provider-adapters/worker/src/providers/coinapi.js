import { getOrSetCache } from '../lib/cache.js';
import { chunk, fetchJson } from '../lib/http.js';
import { midpoint, normalizeMarketRow } from '../lib/normalize.js';

const COINAPI_BASE_URL = 'https://rest.coinapi.io';
const METADATA_TTL_MS = 6 * 60 * 60 * 1000;

function headers(env) {
  return {
    'X-CoinAPI-Key': env.COINAPI_KEY
  };
}

async function getActiveSymbolSet(env, exchangeId) {
  return getOrSetCache(`coinapi:active:${exchangeId}`, METADATA_TTL_MS, async () => {
    const url = `${COINAPI_BASE_URL}/v1/symbols/${encodeURIComponent(exchangeId)}/active`;
    const payload = await fetchJson(url, { headers: headers(env) }, { label: `CoinAPI symbols ${exchangeId}` });
    const ids = Array.isArray(payload) ? payload.map((row) => row.symbol_id).filter(Boolean) : [];
    return new Set(ids);
  });
}

function resolveSpotSymbol(asset, exchangeSymbolSets) {
  const route = asset.primary_route;
  for (const exchangeId of route.exchange_priority || []) {
    const symbolSet = exchangeSymbolSets.get(exchangeId);
    if (!symbolSet) continue;
    for (const quote of route.quote_preference || []) {
      const candidate = route.coinapi_symbol_pattern
        .replace('{exchange_id}', exchangeId)
        .replace('{quote}', quote);
      if (symbolSet.has(candidate)) {
        return candidate;
      }
    }
  }
  return null;
}

function resolvePerpetualSymbol(asset, exchangeSymbolSets) {
  const route = asset.primary_route;
  const candidate = route.coinapi_symbol_pattern;
  for (const exchangeId of route.coinapi_exchange_ids || route.exchange_priority || []) {
    const symbolSet = exchangeSymbolSets.get(exchangeId);
    if (symbolSet?.has(candidate)) return candidate;
  }
  return null;
}

function resolveQuarterlyFuture(asset, exchangeSymbolSets) {
  const route = asset.primary_route;
  const exchangeId = route.exchange_priority?.[0] || route.coinapi_exchange_ids?.[0];
  const symbolSet = exchangeSymbolSets.get(exchangeId);
  if (!symbolSet) return null;

  const pattern = route.coinapi_symbol_pattern;
  const prefix = pattern.split('{yymmdd}')[0];
  const today = Number(new Date().toISOString().slice(2, 10).replace(/-/g, ''));

  const matches = [...symbolSet]
    .filter((symbolId) => symbolId.startsWith(prefix))
    .map((symbolId) => ({
      symbolId,
      suffix: Number(symbolId.slice(prefix.length))
    }))
    .filter((entry) => Number.isFinite(entry.suffix))
    .sort((a, b) => a.suffix - b.suffix);

  return matches.find((entry) => entry.suffix >= today)?.symbolId || matches[0]?.symbolId || null;
}

async function resolveSymbolId(asset, env, exchangeSymbolSets) {
  const mode = asset.primary_route?.mode;
  if (mode === 'spot_discovery') return resolveSpotSymbol(asset, exchangeSymbolSets);
  if (mode === 'perpetual_discovery') return resolvePerpetualSymbol(asset, exchangeSymbolSets);
  if (mode === 'futures_discovery') return resolveQuarterlyFuture(asset, exchangeSymbolSets);
  return null;
}

async function resolveSymbolIds(env, assets) {
  const exchangeIds = new Set();
  for (const asset of assets) {
    const route = asset.primary_route || {};
    for (const exchangeId of route.exchange_priority || []) exchangeIds.add(exchangeId);
    for (const exchangeId of route.coinapi_exchange_ids || []) exchangeIds.add(exchangeId);
  }

  const exchangeSymbolSets = new Map();
  await Promise.all([...exchangeIds].map(async (exchangeId) => {
    exchangeSymbolSets.set(exchangeId, await getActiveSymbolSet(env, exchangeId));
  }));

  const output = [];
  for (const asset of assets) {
    const symbolId = await resolveSymbolId(asset, env, exchangeSymbolSets);
    if (symbolId) output.push({ asset, symbolId });
  }
  return output;
}

async function fetchQuoteChunk(env, symbolIds) {
  if (symbolIds.length === 0) return [];
  const url = `${COINAPI_BASE_URL}/v1/quotes/current?filter_symbol_id=${encodeURIComponent(symbolIds.join(';'))}`;
  const payload = await fetchJson(url, { headers: headers(env) }, { label: 'CoinAPI quotes/current' });
  return Array.isArray(payload) ? payload : payload ? [payload] : [];
}

export async function fetchCoinapiSnapshot(env, assets) {
  if (!env.COINAPI_KEY || assets.length === 0) return { markets: [], warnings: [] };

  const resolved = await resolveSymbolIds(env, assets);
  const unresolved = assets.filter((asset) => !resolved.find((entry) => entry.asset.id === asset.id));
  const quotes = [];

  for (const group of chunk(resolved, 40)) {
    const rows = await fetchQuoteChunk(env, group.map((entry) => entry.symbolId));
    quotes.push(...rows);
  }

  const quoteBySymbolId = new Map(quotes.map((row) => [row.symbol_id, row]));
  const markets = [];
  for (const entry of resolved) {
    const quote = quoteBySymbolId.get(entry.symbolId);
    if (!quote) continue;
    const last = quote.last_trade?.price ?? midpoint(quote.bid_price, quote.ask_price);
    markets.push(normalizeMarketRow({
      asset: entry.asset,
      provider: 'coinapi',
      sourceSymbol: entry.symbolId,
      bid: quote.bid_price,
      ask: quote.ask_price,
      last,
      updatedAt: quote.time_exchange || quote.time_coinapi,
      extra: {
        sourceTimestamp: quote.time_coinapi || quote.time_exchange
      }
    }));
  }

  return {
    markets,
    warnings: unresolved.length > 0 ? [`CoinAPI unresolved assets: ${unresolved.map((asset) => asset.id).join(', ')}`] : []
  };
}
