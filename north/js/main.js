// Menu
window.addEventListener('scroll', () => {
    const menu = document.querySelector('.menu-list');

    if (window.pageYOffset >= 700) {
        menu.classList.add('sticky-menu');

    } else if (window.pageYOffset < 700 & menu.classList.contains('sticky-menu')) {
        menu.classList.remove('sticky-menu');
    }
});
