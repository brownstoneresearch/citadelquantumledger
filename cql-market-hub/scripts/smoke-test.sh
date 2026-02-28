#!/usr/bin/env bash
set -euo pipefail

WORKER_URL="${WORKER_URL:-https://cql-market-hub.brownstonetberesearch.workers.dev}"

echo "Checking $WORKER_URL/health"
curl -fsSL "$WORKER_URL/health"
echo

echo "Checking $WORKER_URL/api/markets/health"
curl -fsSL "$WORKER_URL/api/markets/health"
echo

echo "Checking $WORKER_URL/api/markets/snapshot"
curl -fsSL "$WORKER_URL/api/markets/snapshot" | python - <<'PY'
import json, sys
payload = json.load(sys.stdin)
print("ok:", payload.get("ok"))
print("count:", payload.get("count"))
print("providers:", ", ".join(sorted((payload.get("providerHealth") or {}).keys())))
PY
