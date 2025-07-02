const items = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.animationDelay = "0s";
        }
    });
}, { threshold: 0.1 });

items.forEach(item => observer.observe(item));
