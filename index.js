window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('blurred');
    } else {
        header.classList.remove('blurred');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownButtons = document.querySelectorAll('[data-dropdown]');
    const themeToggle = document.getElementById('theme-toggle');
            
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);

            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d.id !== dropdownId) {
                    d.style.display = 'none';
                }
            });

            // Toggle the clicked dropdown
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        });

        // Add hover functionality
        button.addEventListener('mouseenter', function() {
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);
            dropdown.style.display = 'block';
        });

        button.addEventListener('mouseleave', function(event) {
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);
            if (!dropdown.contains(event.relatedTarget)) {
                dropdown.style.display = 'none';
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-item-container')) {
            document.querySelectorAll('.dropdown').forEach(d => {
                d.style.display = 'none';
            });
        }
    });

    // Dark mode toggle
    themeToggle.addEventListener('click', function() {
        document.body.setAttribute('data-theme',
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        this.innerHTML = document.body.getAttribute('data-theme') === 'dark'
            ? '<i class="ri-sun-line"></i> Light Mode'
            : '<i class="ri-moon-line"></i> Dark Mode';
    });
z});

// Smooth scrolling
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

