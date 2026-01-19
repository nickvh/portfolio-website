.PHONY: help build deploy serve update-images clean

help:
	@echo "Photo Portfolio - Build Commands"
	@echo "================================="
	@echo ""
	@echo "Available commands:"
	@echo "  make build         - Update image list and prepare for deployment"
	@echo "  make deploy        - Build and deploy to GitHub Pages"
	@echo "  make serve         - Start local development server"
	@echo "  make update-images - Scan images folder and update script.js"
	@echo "  make clean         - Remove generated files"
	@echo ""

build: update-images
	@echo "✅ Build complete! Ready to deploy."

update-images:
	@echo "🔍 Updating image list..."
	@python3 generate_image_list.py

deploy: build
	@echo "🚀 Deploying to GitHub Pages..."
	@./deploy.sh

serve:
	@echo "🌐 Starting local server at http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	@python3 -m http.server 8000

clean:
	@echo "🧹 Cleaning up..."
	@find . -name ".DS_Store" -delete
	@find . -name "*.pyc" -delete
	@find . -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
	@echo "✅ Clean complete!"
