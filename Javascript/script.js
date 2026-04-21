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