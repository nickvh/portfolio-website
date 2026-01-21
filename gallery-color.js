// Color Gallery Script
// This file handles the color photo gallery

// List of all images in the color folder
const colorImages = [
    'Kissings-13.jpg',
    'Kissings-2.jpg',
    'Kissings-3.jpg',
    'Kissings-4.jpg'
];

// Dynamically generate gallery items
const gallery = document.querySelector('#color-gallery');
if (gallery) {
    colorImages.forEach((filename, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', 'color');
        
        galleryItem.innerHTML = `
            <img src="images/color/${filename}" alt="${filename}">
            <div class="overlay">
                <h3>Photo ${index + 1}</h3>
                <p>Color</p>
            </div>
        `;
        
        gallery.appendChild(galleryItem);
    });

    // Wait for DOM to be ready before adding event listeners
    setTimeout(() => {
        initializeGallery();
    }, 100);
}

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentImageIndex = 0;
    let visibleImages = Array.from(galleryItems);

    // Open lightbox when clicking on gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openLightbox(item);
        });
    });

    function openLightbox(item) {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const category = item.querySelector('.overlay p').textContent;

        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        lightboxCaption.textContent = `${title} - ${category}`;
        document.body.style.overflow = 'hidden';
    }

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Navigate to previous image
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
        openLightbox(visibleImages[currentImageIndex]);
    });

    // Navigate to next image
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
        openLightbox(visibleImages[currentImageIndex]);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
                openLightbox(visibleImages[currentImageIndex]);
            } else if (e.key === 'ArrowRight') {
                currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
                openLightbox(visibleImages[currentImageIndex]);
            }
        }
    });

    // Smooth scroll animation for page load
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
}
