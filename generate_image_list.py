#!/usr/bin/env python3
"""
Image List Generator for Photo Portfolio
Run this script whenever you add new images to automatically update the galleries.
Usage: python3 generate_image_list.py
"""

import os
import json

def get_image_files(directory):
    """Get all image files from a directory."""
    valid_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'}
    image_files = []
    
    if not os.path.exists(directory):
        print(f"Warning: Directory '{directory}' not found!")
        return []
    
    for filename in sorted(os.listdir(directory)):
        filepath = os.path.join(directory, filename)
        if os.path.isfile(filepath):
            _, ext = os.path.splitext(filename)
            if ext.lower() in valid_extensions:
                image_files.append(filename)
    
    return image_files

def update_gallery_script(script_file, image_files, array_name):
    """Update a gallery script file with the new image list."""
    if not os.path.exists(script_file):
        print(f"Error: Script file '{script_file}' not found!")
        return False
    
    # Read the current script
    with open(script_file, 'r') as f:
        content = f.read()
    
    # Create the new image array
    if image_files:
        image_list = ',\n    '.join([f"'{img}'" for img in image_files])
        new_array = f"const {array_name} = [\n    {image_list}\n];"
    else:
        new_array = f"const {array_name} = [\n    // Add your image filenames here\n];"
    
    # Find and replace the array
    start_marker = f"const {array_name} = ["
    end_marker = "];"
    
    start_idx = content.find(start_marker)
    if start_idx == -1:
        print(f"Error: Could not find {array_name} array in {script_file}")
        return False
    
    end_idx = content.find(end_marker, start_idx) + len(end_marker)
    
    new_content = content[:start_idx] + new_array + content[end_idx:]
    
    # Write back to file
    with open(script_file, 'w') as f:
        f.write(new_content)
    
    return True

if __name__ == "__main__":
    print("🔍 Scanning image directories...")
    
    # Scan color images
    color_images = get_image_files('images/color')
    print(f"\n📸 Color Gallery:")
    if color_images:
        print(f"   Found {len(color_images)} images")
        if update_gallery_script('gallery-color.js', color_images, 'colorImages'):
            print(f"   ✅ Updated gallery-color.js")
            for img in color_images:
                print(f"      - {img}")
        else:
            print(f"   ❌ Failed to update gallery-color.js")
    else:
        print("   No images found in images/color/")
    
    # Scan black and white images
    bw_images = get_image_files('images/blackandwhite')
    print(f"\n⚫ Black & White Gallery:")
    if bw_images:
        print(f"   Found {len(bw_images)} images")
        if update_gallery_script('gallery-bw.js', bw_images, 'bwImages'):
            print(f"   ✅ Updated gallery-bw.js")
            for img in bw_images:
                print(f"      - {img}")
        else:
            print(f"   ❌ Failed to update gallery-bw.js")
    else:
        print("   No images found in images/blackandwhite/")
        print("   Add photos to images/blackandwhite/ and run this script again")
    
    print("\n✨ Done! Your galleries are now up to date.")
