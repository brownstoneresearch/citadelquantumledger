#!/usr/bin/env bash
set -euo pipefail

put_secret() {
  local key="$1"
  local value="$2"
  printf '%s' "$value" | npx wrangler secret put "$key"
}

required=(
  COINAPI_KEY
  IG_API_KEY
  IG_IDENTIFIER
  IG_PASSWORD
  OANDA_API_TOKEN
  OANDA_ACCOUNT_ID
  DATABENTO_API_KEY
  TWELVE_API_KEY
)

for key in "${required[@]}"; do
  if [[ -z "${!key:-}" ]]; then
    echo "Missing required environment variable: $key" >&2
    exit 1
  fi
done

put_secret COINAPI_KEY "$COINAPI_KEY"
put_secret IG_API_KEY "$IG_API_KEY"
put_secret IG_IDENTIFIER "$IG_IDENTIFIER"
put_secret IG_PASSWORD "$IG_PASSWORD"
put_secret OANDA_API_TOKEN "$OANDA_API_TOKEN"
put_secret OANDA_ACCOUNT_ID "$OANDA_ACCOUNT_ID"
put_secret DATABENTO_API_KEY "$DATABENTO_API_KEY"
put_secret TWELVE_API_KEY "$TWELVE_API_KEY"

if [[ -n "${SUPABASE_URL:-}" ]]; then
  put_secret SUPABASE_URL "$SUPABASE_URL"
fi

echo "Cloudflare Worker secrets updated."
