# Build Process Documentation

This document explains the complete build and deployment system for the Photo Portfolio website.

## Overview

The project includes three build systems:
1. **Makefile** - Simple, fast, Unix-style commands
2. **NPM Scripts** - Node.js ecosystem integration
3. **GitHub Actions** - Automated CI/CD pipeline

## Build System Components

### 1. Image List Generator (`generate_image_list.py`)

**Purpose**: Automatically scans the `images/` folder and updates `script.js` with all image filenames.

**Usage**:
```bash
python3 generate_image_list.py
```

**What it does**:
- Scans `images/` directory
- Finds all image files (.jpg, .jpeg, .png, .gif, .webp, .bmp)
- Updates the `imageFiles` array in `script.js`
- Sorts files alphabetically

### 2. Makefile

**Purpose**: Provides simple build commands for Unix/Linux/macOS users.

**Available Commands**:

```bash
make help           # Show all available commands
make build          # Update image list (runs generate_image_list.py)
make deploy         # Build and deploy to GitHub Pages
make serve          # Start local development server on port 8000
make update-images  # Same as build
make clean          # Remove temporary files
```

**Example Workflow**:
```bash
# Add new photos to images/ folder
make build          # Update image list
make serve          # Test locally at http://localhost:8000
make deploy         # Deploy to GitHub Pages
```

### 3. NPM Scripts (`package.json`)

**Purpose**: Integrates with Node.js ecosystem and provides cross-platform commands.

**Available Scripts**:

```bash
npm run build          # Update image list
npm run deploy         # Build and deploy
npm start              # Start local server
npm run serve          # Same as start
npm run update-images  # Update image list only
```

**Example Workflow**:
```bash
# Add new photos to images/ folder
npm run build       # Update image list
npm start           # Test locally
npm run deploy      # Deploy to GitHub Pages
```

### 4. GitHub Actions (`.github/workflows/deploy.yml`)

**Purpose**: Automated CI/CD pipeline that runs on every push to the `main` branch.

**What it does**:
1. Checks out your code
2. Sets up Python
3. Runs `generate_image_list.py` to update images
4. Deploys to GitHub Pages automatically

**Triggers**:
- Push to `main` branch
- Manual workflow dispatch

**Setup**:
1. Push code to GitHub
2. Go to Settings → Pages
3. Set Source to "GitHub Actions"
4. Done! Every push auto-deploys

**View Workflow**:
- Go to your repository → Actions tab
- See build status and logs

## Deployment Script (`deploy.sh`)

**Purpose**: Manual deployment script for GitHub Pages.

**Usage**:
```bash
./deploy.sh
```

**What it does**:
1. Runs `generate_image_list.py`
2. Stages all changes with `git add .`
3. Commits with timestamp
4. Pushes to GitHub
5. GitHub Actions takes over and deploys

## Build Workflow Examples

### Scenario 1: Adding New Photos

```bash
# 1. Add photos to images/ folder
cp ~/Downloads/*.jpg images/

# 2. Build (choose one)
make build
# OR
npm run build

# 3. Test locally (choose one)
make serve
# OR
npm start

# 4. Deploy (choose one)
make deploy
# OR
npm run deploy
# OR just push to GitHub (auto-deploys via Actions)
git add .
git commit -m "Add new photos"
git push
```

### Scenario 2: Updating Content

```bash
# 1. Edit HTML/CSS files
# 2. Test locally
make serve

# 3. Deploy
git add .
git commit -m "Update content"
git push
# GitHub Actions automatically deploys
```

### Scenario 3: Quick Deploy

```bash
# One command to build and deploy
make deploy
```

## File Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── images/                     # Your photos
├── index.html                  # Gallery page
├── about.html                  # About page
├── styles.css                  # Styling
├── script.js                   # Gallery functionality
├── generate_image_list.py      # Image scanner
├── deploy.sh                   # Deployment script
├── Makefile                    # Make build system
├── package.json                # NPM build system
├── .gitignore                  # Git ignore rules
├── README.md                   # User documentation
├── DEPLOYMENT.md               # Deployment guide
└── BUILD.md                    # This file
```

## Environment Requirements

### Minimum Requirements
- Python 3.x (for image list generation)
- Git (for version control)

### Optional
- Node.js/NPM (for npm scripts)
- Make (usually pre-installed on Unix systems)

### For GitHub Actions
- GitHub account
- Repository with GitHub Pages enabled

## Troubleshooting

### Build fails
```bash
# Check Python version
python3 --version

# Run image generator manually
python3 generate_image_list.py
```

### Deploy fails
```bash
# Check Git status
git status

# Check remote
git remote -v

# Ensure you're on main branch
git branch
```

### GitHub Actions fails
- Check Actions tab in GitHub repository
- Review error logs
- Ensure GitHub Pages is enabled in Settings

## Best Practices

1. **Always build before deploying**
   ```bash
   make build && make deploy
   ```

2. **Test locally first**
   ```bash
   make serve
   # Visit http://localhost:8000
   ```

3. **Use GitHub Actions for production**
   - Just push to main branch
   - Let automation handle deployment

4. **Keep images optimized**
   - Compress before adding to images/
   - Recommended size: 1200x800px
   - Keep file sizes under 500KB

## Quick Reference

| Task | Makefile | NPM | Manual |
|------|----------|-----|--------|
| Update images | `make build` | `npm run build` | `python3 generate_image_list.py` |
| Test locally | `make serve` | `npm start` | `python3 -m http.server 8000` |
| Deploy | `make deploy` | `npm run deploy` | `./deploy.sh` |
| Auto-deploy | - | - | `git push` (via Actions) |

## Summary

The build process is designed to be flexible:
- **Quick & Simple**: Use `make` commands
- **Node.js Users**: Use `npm` scripts  
- **Automated**: Push to GitHub, Actions handles everything
- **Manual**: Run scripts directly

Choose the method that fits your workflow best!
