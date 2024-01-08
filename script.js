document.addEventListener('DOMContentLoaded', function () {
    let menuIcons = document.querySelectorAll('.menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');
    let sections = document.querySelectorAll('section');

    // Toggle the visibility of the menu on small screens
    menuIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            menuIcons.forEach(icon => {
                icon.classList.remove('bx-x');
            });
            navbar.classList.remove('active');

            // Get the target section id from the href attribute
            let targetSectionId = link.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetSectionId);

            // Toggle the visibility of the target section
            if (targetSection) {
                sections.forEach(section => {
                    section.style.display = section.id === targetSectionId ? 'block' : 'none';
                });
            }

            // Scroll to the target section
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 150;

        sections.forEach(section => {
            if (
                fromTop > section.offsetTop &&
                fromTop < section.offsetTop + section.offsetHeight
            ) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                let correspondingLink = document.querySelector(
                    `.navbar a[href="#${section.id}"]`
                );

                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });

        // sticky navbar
        let header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });
});
