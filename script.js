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


// scroll revel'
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:2000,
    delay:200

});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top'});
ScrollReveal().reveal('.home-img,.skills-container, .portfolio-box,.contact form',{ origin: 
    'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{ origin: 
    'left'});
ScrollReveal().reveal('.home-content p,.about-content',{ origin: 
    'right'});
// typed scricpt
const typed = new Typed('.multiple-text', {

    strings:['Full Stack Web Develper','Android Developer',],
    typespeed :50, 
    backspeed:50,
    backDelay:3000, 
    loop:true
});
