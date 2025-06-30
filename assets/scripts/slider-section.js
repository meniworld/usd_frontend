const slides = document.querySelectorAll('.slide');
const sliderDotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let dots = [];

// Create dots dynamically
function createDots() {
    sliderDotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.dataset.slide = i;
        sliderDotsContainer.appendChild(dot);
        dots.push(dot);
    });
}

// Show slide by index
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// Navigation functions
function nextSlide() {
    const newIndex = (currentIndex + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

// Initial setup
createDots();
showSlide(currentIndex);

// Auto slide
let slideInterval = setInterval(nextSlide, 5000);

// Event Listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

// Dot click event (use event delegation)
sliderDotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        const index = parseInt(e.target.dataset.slide);
        showSlide(index);
        resetInterval();
    }
});
