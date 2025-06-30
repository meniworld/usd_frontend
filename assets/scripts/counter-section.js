const counters = document.querySelectorAll('.count-number');
let started = false;

const animateCounts = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 100;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

const countSection = document.querySelector('.count-section');

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
        started = true;
        animateCounts();
    }
}, { threshold: 0.5 });

observer.observe(countSection);
