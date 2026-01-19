# Deployment Guide - Photo Portfolio Website

This guide shows you how to deploy your photo portfolio website online for free.

## Option 1: GitHub Pages (Recommended - Free & Easy)

### Prerequisites
- GitHub account (free at github.com)
- Git installed on your computer

### Steps

1. **Initialize Git repository** (if not already done):
```bash
cd /Users/nickvh/Library/Mobile\ Documents/com~apple~CloudDocs/Repo/portfolio-website
git init
git add .
git commit -m "Initial commit - Photo Portfolio"
```

2. **Create a new repository on GitHub**:
   - Go to github.com and create a new repository
   - Name it something like `photo-portfolio` or `your-username.github.io`
   - Don't initialize with README (we already have files)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"

5. **Your site will be live at**:
   - `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
   - Or `https://YOUR-USERNAME.github.io/` if you named it `your-username.github.io`

### Updating Your Site
```bash
# After making changes or adding photos:
python3 generate_image_list.py  # Update image list
git add .
git commit -m "Update photos"
git push
```

---

## Option 2: Netlify (Free, Drag & Drop)

### Steps

1. **Go to netlify.com** and sign up (free)

2. **Deploy**:
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your entire `portfolio-website` folder
   - Your site goes live instantly!

3. **Your site will be at**:
   - `https://random-name-12345.netlify.app`
   - You can customize the subdomain in settings

### Updating Your Site
- Just drag and drop the folder again to update

---

## Option 3: Vercel (Free, Similar to Netlify)

### Steps

1. **Go to vercel.com** and sign up (free)

2. **Deploy**:
   - Click "Add New" → "Project"
   - Import from Git or drag & drop folder
   - Deploy!

3. **Your site will be at**:
   - `https://your-project.vercel.app`

---

## Option 4: Cloudflare Pages (Free)

### Steps

1. **Go to pages.cloudflare.com** and sign up (free)

2. **Deploy**:
   - Connect your GitHub repository, or
   - Use Direct Upload to drag & drop

3. **Your site will be at**:
   - `https://your-project.pages.dev`

---

## Quick Deploy Script (GitHub Pages)

I can create a script to automate deployment. Save this as `deploy.sh`:

```bash
#!/bin/bash

echo "🔍 Updating image list..."
python3 generate_image_list.py

echo "📦 Committing changes..."
git add .
git commit -m "Update portfolio - $(date '+%Y-%m-%d %H:%M')"

echo "🚀 Deploying to GitHub Pages..."
git push

echo "✅ Done! Your site will update in a few minutes."
echo "Visit: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Then deploy with:
```bash
./deploy.sh
```

---

## Recommended: GitHub Pages

**Why?**
- ✅ Free forever
- ✅ Custom domain support
- ✅ HTTPS included
- ✅ Version control with Git
- ✅ Easy to update
- ✅ Professional URL

**Best for**: Portfolio websites, personal projects

---

## Custom Domain (Optional)

All these services support custom domains (like `yourname.com`):

1. Buy a domain from Namecheap, Google Domains, etc.
2. Add it in your hosting service's settings
3. Update DNS records as instructed

---

## Need Help?

Choose GitHub Pages for the best experience. It's free, reliable, and gives you version control!
