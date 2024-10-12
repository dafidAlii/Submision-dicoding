const carouselImages = [
    '/img/profile.jpg',
    '/img/profile2.jpg',
];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    document.getElementById('carouselImage').src = carouselImages[currentIndex];
}