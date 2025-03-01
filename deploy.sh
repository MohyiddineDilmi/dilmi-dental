#!/bin/bash

# Build and deploy script for GitHub Pages with custom domain

echo "🚀 Starting deployment process..."

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "⚠️ You have uncommitted changes. Commit these changes before deploying."
  exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install --legacy-peer-deps
fi

# Build the project
echo "🏗️ Building project..."
npm run build

# Add CNAME file to build folder (in case it gets lost)
echo "www.dilmidental.com" > build/CNAME

# Deploy to GitHub Pages
echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Your site will be available at https://www.dilmidental.com"
echo "⏱️ Note: It may take a few minutes for changes to propagate." 