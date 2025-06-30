const sliderWrapper = document.getElementById('partnerSliderWrapper');
const sliderTrack = document.getElementById('partnerSliderTrack');

let scrollSpeed = 0.5;
let position = 0;
let animationId;

// Clone child nodes for seamless infinite scroll
function cloneItems() {
    const items = sliderTrack.children;
    const cloneCount = items.length;

    for (let i = 0; i < cloneCount; i++) {
        const clone = items[i].cloneNode(true);
        clone.classList.add('cloned');
        sliderTrack.appendChild(clone);
    }
}

function startScrolling() {
    const totalWidth = sliderTrack.scrollWidth / 2;

    function scroll() {
        position += scrollSpeed;
        if (position >= totalWidth) {
            position = 0;
        }
        sliderTrack.style.transform = `translateX(-${position}px)`;
        animationId = requestAnimationFrame(scroll);
    }

    animationId = requestAnimationFrame(scroll);
}

// Pause on hover
sliderWrapper.addEventListener('mouseenter', () => cancelAnimationFrame(animationId));
sliderWrapper.addEventListener('mouseleave', () => startScrolling());

window.addEventListener('load', () => {
    cloneItems();
    startScrolling();
});