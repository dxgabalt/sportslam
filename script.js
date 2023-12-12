const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burgerAnimation();
});

function burgerAnimation() {
    burger.classList.toggle('toggle');

    if (navLinks.classList.contains('nav-active')) {
        navLinks.style.maxHeight = navLinks.scrollHeight + "px";
    } else {
        navLinks.style.maxHeight = null;
    }
}
