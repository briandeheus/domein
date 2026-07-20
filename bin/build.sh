#!/usr/bin/env bash
# Build the frontend into frontend/dist (served by FastAPI).
set -euo pipefail

cd "$(dirname "$0")/../frontend"

if [ ! -d node_modules ]; then
    npm ci
fi

npm run build
