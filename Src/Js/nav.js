const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {

        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animated links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5 ease forwards ${index / 7 + 3}s`;
            }
        })

        //Burger animation
        burger.classList.toggle('toggle');

    });
}

const overlay = () => {
    const overlayBtn = document.querySelector('.btnOverlay');
    const overlayLinks = document.querySelector('.overlayLinks');


    overlayBtn.addEventListener('click', () => {
        overlayLinks.classList.toggle("d-none")
    });
}

navSlide();
overlay();