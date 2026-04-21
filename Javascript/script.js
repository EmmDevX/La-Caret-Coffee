// Close hamburger menu when a nav link is clicked or when clicking outside the menu
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.navs');
    const menuToggle = document.querySelector('.menu-toggle');

    // Close when clicking a nav link
    const navLinks = document.querySelectorAll('.navs a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.checked = false;
        });
    });

    // Close when clicking outside the menu
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !menuToggle.contains(event.target) && navToggle.checked) {
            navToggle.checked = false;
        }
    });
});