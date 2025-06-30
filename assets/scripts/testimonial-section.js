document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const nextBtn = document.getElementById('nextTestimonial');
    const prevBtn = document.getElementById('prevTestimonial');
    let currentIndex = 0;
    let interval;

    function showTestimonial(index) {
        testimonials.forEach((card, i) => {
            card.classList.remove('active');
            if (i === index) card.classList.add('active');
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
    });

    function startAutoSlide() {
        interval = setInterval(nextTestimonial, 5000); // every 10 sec
    }

    function resetAutoSlide() {
        clearInterval(interval);
        startAutoSlide();
    }

    showTestimonial(currentIndex);
    startAutoSlide();
});
