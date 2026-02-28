import { ASSET_UNIVERSE } from './config/assetUniverse.js';
import { snapshotProviders } from './providers/index.js';

const DEFAULT_ALLOWED_ORIGIN = 'https://citadelquantumledger.pages.dev';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(env, request);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    try {
      if (url.pathname === '/api/health') {
        return json({
          ok: true,
          service: 'citadelquantumledger-market-providers',
          time: new Date().toISOString(),
          providers: {
            coinapi: Boolean(env.COINAPI_KEY),
            databentoBridge: Boolean(env.DATABENTO_BRIDGE_URL),
            ig: Boolean(env.IG_API_KEY && env.IG_IDENTIFIER && env.IG_PASSWORD),
            oanda: Boolean(env.OANDA_API_TOKEN && env.OANDA_ACCOUNT_ID)
          }
        }, 200, corsHeaders);
      }

      if (url.pathname === '/api/markets/snapshot') {
        const ids = parseCsv(url.searchParams.get('ids'));
        const categories = parseCsv(url.searchParams.get('categories'));
        const provider = url.searchParams.get('provider');
        const limit = Number(url.searchParams.get('limit') || 0);
        const demoMode = String(env.DEMO_MODE || 'false').toLowerCase() === 'true';

        const selectedAssets = ASSET_UNIVERSE.filter((asset) => {
          if (ids.length > 0 && !ids.includes(asset.id)) return false;
          if (categories.length > 0 && !categories.includes(asset.category)) return false;
          return true;
        }).slice(0, limit > 0 ? limit : undefined);

        if (demoMode) {
          return json({ ok: true, sourceMode: 'demo', marketCount: 0, generatedAt: new Date().toISOString(), markets: [], warnings: ['DEMO_MODE=true; live providers are disabled.'] }, 200, corsHeaders);
        }

        const { markets, warnings } = await snapshotProviders(env, selectedAssets, provider);
        markets.sort((a, b) => a.id.localeCompare(b.id));

        return json({
          ok: true,
          sourceMode: 'live',
          requestedCount: selectedAssets.length,
          marketCount: markets.length,
          generatedAt: new Date().toISOString(),
          warnings,
          markets
        }, 200, corsHeaders);
      }

      return json({ ok: false, error: 'Not found' }, 404, corsHeaders);
    } catch (error) {
      return json({ ok: false, error: error.message || 'Unknown error' }, 500, corsHeaders);
    }
  }
};

function getCorsHeaders(env, request) {
  const allowedOrigin = env.ALLOWED_ORIGIN || DEFAULT_ALLOWED_ORIGIN;
  const requestOrigin = request.headers.get('Origin');
  const origin = requestOrigin && requestOrigin === allowedOrigin ? requestOrigin : allowedOrigin;
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    Vary: 'Origin'
  };
}

function json(payload, status, corsHeaders) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...corsHeaders
    }
  });
}

function parseCsv(value) {
  if (!value) return [];
  return value.split(',').map((part) => part.trim()).filter(Boolean);
}
