#!/bin/bash
# SmartHubb VPS Deploy Script

set -e

SERVER="hetzner"
DEST_PATH="/opt/smarthubb"

echo "🚀 Starting deploy to $SERVER..."

# 1. Sync files to server
# Use scp since rsync might not be available on Windows natively
scp -r src public astro.config.mjs package.json package-lock.json tsconfig.json ecosystem.config.cjs cron.js $SERVER:$DEST_PATH/

# 2. Server commands
ssh $SERVER << EOF
  cd $DEST_PATH
  echo "📦 Installing dependencies..."
  npm install --legacy-peer-deps
  
  echo "🏗 Building project..."
  npm run build
  
  echo "🔄 Starting/Restarting with PM2 ecosystem..."
  pm2 start ecosystem.config.cjs
  pm2 save
  
  echo "✅ Deploy complete!"
EOF
