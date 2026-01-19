#!/usr/bin/env python3
"""
Image List Generator for Photo Portfolio
Run this script whenever you add new images to automatically update the gallery.
Usage: python3 generate_image_list.py
"""

import os
import json

def get_image_files(directory='images'):
    """Get all image files from the images directory."""
    valid_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'}
    image_files = []
    
    if not os.path.exists(directory):
        print(f"Error: Directory '{directory}' not found!")
        return []
    
    for filename in sorted(os.listdir(directory)):
        if os.path.isfile(os.path.join(directory, filename)):
            _, ext = os.path.splitext(filename)
            if ext.lower() in valid_extensions:
                image_files.append(filename)
    
    return image_files

def update_script_js(image_files):
    """Update the script.js file with the new image list."""
    if not image_files:
        print("No image files found!")
        return
    
    # Read the current script.js
    with open('script.js', 'r') as f:
        content = f.read()
    
    # Create the new imageFiles array
    image_list = ',\n    '.join([f"'{img}'" for img in image_files])
    new_array = f"const imageFiles = [\n    {image_list}\n];"
    
    # Find and replace the imageFiles array
    start_marker = "const imageFiles = ["
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print("Error: Could not find imageFiles array in script.js")
        return
    
    end_idx = content.find(end_marker, start_idx) + len(end_marker)
    
    new_content = content[:start_idx] + new_array + content[end_idx:]
    
    # Write back to script.js
    with open('script.js', 'w') as f:
        f.write(new_content)
    
    print(f"✅ Updated script.js with {len(image_files)} images:")
    for img in image_files:
        print(f"   - {img}")

if __name__ == "__main__":
    print("🔍 Scanning images directory...")
    images = get_image_files()
    
    if images:
        update_script_js(images)
        print("\n✨ Done! Your gallery is now up to date.")
    else:
        print("❌ No images found in the images directory.")
