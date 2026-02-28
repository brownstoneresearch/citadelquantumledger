import { fetchJson } from '../lib/http.js';

function pickSymbol(asset) {
  return asset.primary_route?.continuous_symbol_candidate || asset.primary_route?.symbol || null;
}

export async function fetchDatabentoBridgeSnapshot(env, assets) {
  if (!env.DATABENTO_BRIDGE_URL || assets.length === 0) {
    return { markets: [], warnings: assets.length ? ['Databento bridge URL is not configured.'] : [] };
  }

  const symbols = assets
    .map((asset) => pickSymbol(asset))
    .filter(Boolean);

  if (symbols.length === 0) {
    return { markets: [], warnings: ['No Databento symbols were available for the requested assets.'] };
  }

  const query = new URLSearchParams({ symbols: symbols.join(',') });
  const payload = await fetchJson(`${env.DATABENTO_BRIDGE_URL.replace(/\/$/, '')}/snapshot?${query.toString()}`, {}, {
    label: 'Databento bridge snapshot'
  });

  const markets = Array.isArray(payload?.markets) ? payload.markets : Array.isArray(payload) ? payload : [];
  return { markets, warnings: [] };
}
