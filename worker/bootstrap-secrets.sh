#!/usr/bin/env bash
set -euo pipefail

npm install

echo "Setting Wrangler secrets"
for secret_name in COINAPI_KEY IG_API_KEY IG_IDENTIFIER IG_PASSWORD OANDA_API_TOKEN OANDA_ACCOUNT_ID DATABENTO_BRIDGE_URL; do
  if [[ -n "${!secret_name:-}" ]]; then
    printf '%s' "${!secret_name}" | npx wrangler secret put "$secret_name"
  fi
done
