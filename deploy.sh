#!/bin/bash

# Quick Deploy Script for Photo Portfolio
# This script updates images and deploys to GitHub Pages

echo "🎨 Photo Portfolio - Quick Deploy"
echo "=================================="
echo ""

# Update image list
echo "🔍 Step 1: Updating image list..."
if [ -f "generate_image_list.py" ]; then
    python3 generate_image_list.py
    echo "✅ Image list updated"
else
    echo "⚠️  generate_image_list.py not found, skipping..."
fi
echo ""

# Git operations
echo "📦 Step 2: Preparing files..."
git add .

echo ""
echo "💬 Step 3: Committing changes..."
COMMIT_MSG="Update portfolio - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

echo ""
echo "🚀 Step 4: Deploying to GitHub Pages..."
git push

echo ""
echo "✅ Deployment complete!"
echo ""
echo "Your site will be live in 1-2 minutes at:"
echo "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
echo ""
echo "Note: Update the URL above with your actual GitHub username and repo name"
