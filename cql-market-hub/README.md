# Citadel Quantum Ledger: production Worker + Pages bundle

This bundle wires the live markets board on `https://citadelquantumledger.pages.dev` to the Cloudflare Worker at:

- `https://cql-market-hub.brownstonetberesearch.workers.dev`
- `wss://cql-market-hub.brownstonetberesearch.workers.dev/ws`

## What was fixed

- Frontend snapshot endpoint now points at the live Worker URL.
- Frontend WebSocket endpoint is enabled.
- The dashboard no longer creates a new WebSocket every time metrics render.
- The Worker now exposes:
  - `/health`
  - `/api/markets/health`
  - `/api/markets/assets`
  - `/api/markets/snapshot`
  - `/ws`
- Durable Object storage and alarms are used to keep a cached snapshot alive.
- CORS is restricted to `https://citadelquantumledger.pages.dev` by default.

## Provider behavior in this build

Active now:
- CoinAPI: top-crypto REST refresh plus CoinAPI WebSocket for major spot pairs.
- Binance public fallback: spot + perpetual futures streams for crypto coverage.
- OANDA: REST snapshot polling for FX and metals.
- Twelve Data: batch price snapshots for the mapped indices/commodities in `src/registry.ts`.

Configured but intentionally disabled by default:
- IG: credentials can be loaded, but production use still needs confirmed EPIC mappings and account/session validation.
- Databento: credentials can be loaded, but live Raw TCP requires dataset-specific symbol mapping before enabling.

## One-time deploy flow

From `cql-market-hub/`:

```bash
npm install
```

Export your secrets locally, then push them into Cloudflare Worker secrets:

```bash
export COINAPI_KEY=...
export IG_API_KEY=...
export IG_IDENTIFIER=...
export IG_PASSWORD=...
export OANDA_API_TOKEN=...
export OANDA_ACCOUNT_ID=...
export DATABENTO_API_KEY=...
export TWELVE_API_KEY=...
export SUPABASE_URL=...

bash ./scripts/set-secrets.sh
```

Deploy the Worker:

```bash
bash ./scripts/deploy-worker.sh
```

Smoke test the deployed Worker:

```bash
WORKER_URL="https://cql-market-hub.brownstonetberesearch.workers.dev" bash ./scripts/smoke-test.sh
```

Deploy the Pages frontend:

```bash
PAGES_PROJECT_NAME="citadelquantumledger" bash ./scripts/deploy-pages.sh
```

## Security

Do not hardcode provider credentials inside source files. Keep them only in Cloudflare Worker secrets.

If you pasted production credentials into chat or source control, rotate them before going live.
