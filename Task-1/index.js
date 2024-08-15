let currentIndex = 0;

function navigateGallery(direction) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-image');
    const imageCount = images.length;

    currentIndex += direction;
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`; }
