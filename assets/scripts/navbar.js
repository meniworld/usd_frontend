const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// Handle all dropdown toggles on mobile (top-level and nested)
document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();

            const parent = this.parentElement;

            // Close siblings at same level (optional for accordion behavior)
            const siblings = Array.from(parent.parentElement.children)
                .filter(el => el !== parent && el.classList.contains('dropdown'));
            siblings.forEach(sib => sib.classList.remove('open'));

            parent.classList.toggle('open');
        }
    });
});
