# Citadel provider adapters

This package contains:

- `worker/` — a Cloudflare Worker snapshot API that uses real provider adapters for CoinAPI, IG, OANDA, and a Databento bridge.
- `databento-bridge/` — a Python bridge that uses Databento's official Python client for live futures/rates data and exposes a `/snapshot` HTTP endpoint.

## What is production-ready here

- **CoinAPI adapter**
  - Resolves spot, perpetual, and quarterly futures symbols from CoinAPI metadata.
  - Pulls live quote snapshots from `quotes/current`.
- **IG adapter**
  - Authenticates with `/session`.
  - Pulls batch market snapshots from `/markets?epics=...&filter=SNAPSHOT_ONLY`.
  - Includes an offline resolver script to generate a stable `igEpics.generated.js` map so runtime requests stay efficient.
- **OANDA adapter**
  - Pulls current prices from `/v3/accounts/{accountID}/pricing`.
  - Intended as an FX/metals fallback for assets that IG does not resolve.
- **Databento bridge**
  - Uses the official Python client and live subscriptions.
  - Emits normalized snapshot rows over HTTP for the Worker to consume.

## Important deployment notes

### IG

Run the epic resolver before deploying the Worker in full production mode:

```bash
cd worker
npm install
IG_API_KEY=... IG_IDENTIFIER=... IG_PASSWORD=... node ./scripts/resolve-ig-epics.mjs
```

That script writes `src/config/igEpics.generated.js`.

### Databento

The bridge uses `subscriptions.sample.json`.
Edit it to match the exact datasets you have licensed and the exact symbols you want. The included file is a curated starter for common CME/CBOT futures and U.S. Treasury futures.

Run it like this:

```bash
cd databento-bridge
export DATABENTO_API_KEY=...
./run.sh
```

Then point your Worker secret to it:

```bash
npx wrangler secret put DATABENTO_BRIDGE_URL
```

### Worker secrets

```bash
cd worker
export COINAPI_KEY=...
export IG_API_KEY=...
export IG_IDENTIFIER=...
export IG_PASSWORD=...
export OANDA_API_TOKEN=...
export OANDA_ACCOUNT_ID=...
export DATABENTO_BRIDGE_URL=https://your-bridge.example.com
./bootstrap-secrets.sh
./deploy.sh
```

## Snapshot routes

- Worker health: `/api/health`
- Worker snapshot: `/api/markets/snapshot`
- Databento bridge health: `/health`
- Databento bridge snapshot: `/snapshot`

### Query examples

```bash
curl 'https://<worker>/api/markets/snapshot?provider=coinapi'
curl 'https://<worker>/api/markets/snapshot?categories=fx,commodities'
curl 'https://<worker>/api/markets/snapshot?ids=crypto-spot-btc,commodity-xau-usd'
```

## What you still need to validate

- IG region-specific login requirements, especially if your account requires encrypted-password login.
- Exact Databento dataset IDs for non-CME products such as ICE Europe, Eurex, EEX, JGB, and ASX bond contracts.
- Any `igEpics.generated.js` entries that resolve to the wrong CFD variant for your account catalog.
