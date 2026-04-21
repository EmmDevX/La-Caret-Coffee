// Close hamburger menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.navs a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.checked = false;
        });
    });
});

// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

