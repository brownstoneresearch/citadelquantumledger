import { fetchCoinapiSnapshot } from './coinapi.js';
import { fetchDatabentoBridgeSnapshot } from './databentoBridge.js';
import { fetchIgSnapshot } from './ig.js';
import { fetchOandaSnapshot } from './oanda.js';

export async function snapshotProviders(env, assets, providerFilter = null) {
  const warnings = [];
  const markets = [];

  const coinapiAssets = assets.filter((asset) => asset.primary_provider === 'coinapi');
  const databentoAssets = assets.filter((asset) => asset.primary_provider === 'databento');
  const igAssets = assets.filter((asset) => asset.primary_provider === 'ig');

  if (!providerFilter || providerFilter === 'coinapi') {
    const result = await fetchCoinapiSnapshot(env, coinapiAssets);
    markets.push(...result.markets);
    warnings.push(...result.warnings);
  }

  if (!providerFilter || providerFilter === 'databento') {
    const result = await fetchDatabentoBridgeSnapshot(env, databentoAssets);
    markets.push(...result.markets);
    warnings.push(...result.warnings);
  }

  if (!providerFilter || providerFilter === 'ig') {
    const result = await fetchIgSnapshot(env, igAssets);
    markets.push(...result.markets);
    warnings.push(...result.warnings);

    if (String(env.ENABLE_OANDA_FALLBACK || 'false').toLowerCase() === 'true') {
      const igCovered = new Set(result.markets.map((row) => row.id));
      const fallbackAssets = igAssets.filter((asset) => !igCovered.has(asset.id));
      if (fallbackAssets.length > 0) {
        const fallback = await fetchOandaSnapshot(env, fallbackAssets);
        markets.push(...fallback.markets);
        warnings.push(...fallback.warnings);
      }
    }
  }

  if (providerFilter === 'oanda') {
    const fallbackCandidates = assets.filter((asset) => (asset.fallback_routes || []).some((route) => route.provider === 'oanda'));
    const result = await fetchOandaSnapshot(env, fallbackCandidates);
    markets.push(...result.markets);
    warnings.push(...result.warnings);
  }

  return { markets, warnings };
}
