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
    
    // Track currently open dropdown
    let currentOpenDropdown = null;
            
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);

            // If there's a currently open dropdown and it's different from the clicked one, close it
            if (currentOpenDropdown && currentOpenDropdown !== dropdown) {
                currentOpenDropdown.style.display = 'none';
            }

            // Toggle the clicked dropdown
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                currentOpenDropdown = null;
            } else {
                dropdown.style.display = 'block';
                currentOpenDropdown = dropdown;
            }
        });

        // Add hover functionality
        button.addEventListener('mouseenter', function() {
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);
            
            // Close currently open dropdown if it's different
            if (currentOpenDropdown && currentOpenDropdown !== dropdown) {
                currentOpenDropdown.style.display = 'none';
            }
            
            dropdown.style.display = 'block';
            currentOpenDropdown = dropdown;
        });

        button.addEventListener('mouseleave', function(event) {
            const dropdownId = this.getAttribute('data-dropdown') + '-dropdown';
            const dropdown = document.getElementById(dropdownId);
            if (!dropdown.contains(event.relatedTarget)) {
                dropdown.style.display = 'none';
                currentOpenDropdown = null;
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
});

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

