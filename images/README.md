# Images Folder

This folder is where you should place your photos for the gallery.

## Instructions:

1. Add your photos to this folder with the following names:
   - photo1.jpg
   - photo2.jpg
   - photo3.jpg
   - photo4.jpg
   - photo5.jpg
   - photo6.jpg
   - photo7.jpg
   - photo8.jpg

2. You can use any image format (jpg, jpeg, png, webp)

3. To add more photos:
   - Add the image file to this folder
   - Edit the `index.html` file and add a new gallery item following the existing pattern
   - Update the `src` attribute to point to your new image
   - Set the appropriate `data-category` (nature, urban, portrait, or create your own)

## Tips:

- For best results, use images with similar aspect ratios
- Recommended image size: 1200x800 pixels or similar
- Compress images for faster loading times
- You can add more categories by:
  1. Adding a new filter button in the HTML
  2. Using the new category name in the `data-category` attribute

## Example Gallery Item:

```html
<div class="gallery-item" data-category="nature">
    <img src="images/your-photo.jpg" alt="Description">
    <div class="overlay">
        <h3>Photo Title</h3>
        <p>Category Name</p>
    </div>
</div>
```
