#!/usr/bin/env bash
set -euo pipefail
npm install
npx wrangler deploy
