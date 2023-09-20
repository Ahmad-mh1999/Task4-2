const navbar = document.querySelector('.nav2');
const coursCard = document.querySelectorAll('.coursCard')
if (window.scrollY == 0) {

    navbar.style.background = 'none';

}
if (screen.width <= 981) {
    coursCard.classList.remove('ms-2');
    if (window.scrollY > 0) {

        navbar.style.background = '#106ae0';
    }
    if (window.scrollY == 0) {

        navbar.style.background = '#106ae0';

    }
}
window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-top');
        navbar.style.background = '#106ae0';

    }
    if (window.scrollY == 0) {
        navbar.classList.remove('fixed-top');


    }
    if (screen.width >= 981) {
        if (window.scrollY == 0) {

            navbar.style.background = 'none';
        }
    }
};
var typingEffect = new Typed(".multiText", {
    strings: ["Education is mother of Leadership"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})