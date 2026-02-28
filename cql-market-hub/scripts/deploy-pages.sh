#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
PAGES_PROJECT_NAME="${PAGES_PROJECT_NAME:-citadelquantumledger}"
TMP_DIR="$(mktemp -d)"

trap 'rm -rf "$TMP_DIR"' EXIT

cp "$REPO_ROOT/index.html" "$TMP_DIR/index.html"
cp -R "$REPO_ROOT/assets" "$TMP_DIR/assets"

npx wrangler pages deploy "$TMP_DIR" --project-name="$PAGES_PROJECT_NAME"
