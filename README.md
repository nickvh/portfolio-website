# Photo Portfolio Website

A beautiful, responsive photo gallery website with a clean black and white theme.

## Features

- 📸 Automatic photo gallery display
- 🎨 Clean black and white design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🖼️ Lightbox viewer with keyboard navigation
- 📄 About page with contact information
- ⚡ Fast and lightweight
- 🚀 Automated build and deployment process
- 🔄 GitHub Actions CI/CD integration

## Quick Start

1. **View the website**: Open `index.html` in any web browser
2. **Add your photos**: Place image files in the `images/` folder
3. **Build**: Run `make build` or `npm run build`
4. **Deploy**: Run `make deploy` or `npm run deploy`

## Build Process

This project includes multiple build systems - choose what works best for you:

### Option 1: Make (Recommended)

```bash
make help           # Show all available commands
make build          # Update image list
make deploy         # Build and deploy to GitHub Pages
make serve          # Start local development server
make update-images  # Update image list only
make clean          # Clean up generated files
```

### Option 2: NPM Scripts

```bash
npm run build       # Update image list
npm run deploy      # Build and deploy
npm start           # Start local server
npm run serve       # Same as start
npm run update-images  # Update image list only
```

### Option 3: Direct Scripts

```bash
python3 generate_image_list.py  # Update images
./deploy.sh                      # Deploy to GitHub
```

## Automated Deployment (GitHub Actions)

The project includes a GitHub Actions workflow that automatically:
1. Scans the `images/` folder
2. Updates the image list in `script.js`
3. Deploys to GitHub Pages

**Setup:**
1. Push your code to GitHub
2. Enable GitHub Pages in Settings → Pages
3. Every push to `main` branch automatically deploys!

No manual build needed - just push your changes!

## Adding New Photos

### Option 1: Automatic (Recommended)

Simply run the Python script to automatically detect all images:

```bash
python3 generate_image_list.py
```

This will scan the `images/` folder and update `script.js` automatically.

### Option 2: Manual

1. Add your image files to the `images/` folder
2. Open `script.js`
3. Add the filename to the `imageFiles` array at the top:

```javascript
const imageFiles = [
    'your-photo-1.jpg',
    'your-photo-2.jpg',
    // Add more here...
];
```

## Supported Image Formats

- JPG/JPEG
- PNG
- GIF
- WebP
- BMP

## Customization

### Update Contact Information

Edit `about.html` and change:
- Email address
- Location
- Any text content

### Change Colors

Edit `styles.css` to modify:
- Header background: Line 23 (`background: #000000;`)
- Button colors: Lines 82-84
- Footer: Line 257

### Modify Text

- **Gallery page**: Edit `index.html`
- **About page**: Edit `about.html`

## File Structure

```
portfolio-website/
├── index.html              # Main gallery page
├── about.html              # About page
├── styles.css              # All styling
├── script.js               # Gallery functionality
├── generate_image_list.py  # Auto-update script
├── images/                 # Your photos go here
│   └── README.md
└── README.md              # This file
```

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Tips

- **Image size**: Recommended 1200x800px or similar aspect ratio
- **File size**: Compress images for faster loading
- **Naming**: Use descriptive filenames (e.g., `sunset-beach-2024.jpg`)
- **Organization**: Keep all photos in the `images/` folder

## Keyboard Shortcuts (Lightbox)

- `←` Left Arrow: Previous image
- `→` Right Arrow: Next image
- `Esc`: Close lightbox

## Need Help?

The website is self-contained and requires no installation or server. Just open `index.html` in a browser!

---

**Note**: The image filenames are stored in `script.js` because browsers cannot automatically read directory contents for security reasons. Use the Python script to keep the list updated automatically.
