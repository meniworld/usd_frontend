const overlay = document.getElementById('researchOverlay');
const section = document.getElementById('researchSection');
const content = section.querySelector('.research-content');

// Trigger fade-in animation once
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        content.style.animationPlayState = 'running';
    }
}, { threshold: 0.3 });

observer.observe(section);

// Remove overlay opacity as user scrolls
window.addEventListener('scroll', () => {
    const sectionTop = section.offsetTop;
    const scrollPos = window.scrollY;
    const distance = Math.max(0, sectionTop + 100 - scrollPos);
    const newOpacity = Math.min(0.85, distance / 300);
    overlay.style.opacity = newOpacity;
});