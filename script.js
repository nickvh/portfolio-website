// List of all images in the images folder
const imageFiles = [
    'Kissings-1-2.jpg',
    'Kissings-1.jpg',
    'Kissings-2.jpg',
    'Kissings-3.jpg',
    'Kissings-4.jpg',
    'Kissings-5.jpg',
    'Kissings-6.jpg',
    'Kissings-7.jpg',
    'Kissings-8.jpg',
    'Kissings-9.jpg',
    'Kissings-10.jpg',
    'Kissings-11.jpg',
    'Kissings-12.jpg',
    'Kissings-13.jpg',
    'Kissings-14.jpg',
    'Kissings-15.jpg',
    'Kissings-16.jpg'
];

// Dynamically generate gallery items
const gallery = document.querySelector('.gallery');
gallery.innerHTML = ''; // Clear existing items

imageFiles.forEach((filename, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.setAttribute('data-category', 'all');
    
    galleryItem.innerHTML = `
        <img src="images/${filename}" alt="${filename}">
        <div class="overlay">
            <h3>Photo ${index + 1}</h3>
            <p>Gallery</p>
        </div>
    `;
    
    gallery.appendChild(galleryItem);
});

// Wait for DOM to be ready before adding event listeners
setTimeout(() => {
    initializeGallery();
}, 100);

function initializeGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Gallery filtering functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                        item.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        item.classList.add('hide');
                    }
                }
            });
        });
    });

    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentImageIndex = 0;
    let visibleImages = [];

    // Update visible images array based on current filter
    function updateVisibleImages() {
        visibleImages = Array.from(galleryItems).filter(item => !item.classList.contains('hide'));
    }

    // Open lightbox when clicking on gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            updateVisibleImages();
            currentImageIndex = visibleImages.indexOf(item);
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
