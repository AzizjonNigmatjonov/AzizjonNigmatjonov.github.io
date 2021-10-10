const mainNavItems = document.querySelectorAll('.main-header .nav-item a');
const mainNavItemMenuWhite = document.querySelector('.main-header .menu-white');
const mainNavItemMenuBlack = document.querySelector('.main-header .menu-black');
const ukContainers = document.querySelectorAll('.uk-container');
const mainNavLogoWhite = document.querySelector('.main-nav-logo-white');
const mainNavLogoBlack = document.querySelector('.main-nav-logo-black');
let large = 1536
let medium = 1440
if (window.innerWidth < large) {
    ukContainers.forEach(element => {
        element.classList.remove('uk-container-large')
    });
}
mainNavLogoBlack.style.display = 'none'
mainNavItemMenuBlack.style.display = 'none';
window.addEventListener('scroll', event => {
    if (scrollY > 0) {
        mainNavItems.forEach(function(element) {
            element.style.color = '#1d1d1b'
        });
        mainNavLogoWhite.style.display = 'none';
        mainNavLogoBlack.style.display = 'block'
        mainNavItemMenuWhite.style.display = 'none';
        mainNavItemMenuBlack.style.display = 'block';
    } else {
        mainNavItems.forEach(function(element) {
            element.style.color = 'inherit'
        });
        mainNavLogoWhite.style.display = 'block';
        mainNavLogoBlack.style.display = 'none'
        mainNavItemMenuWhite.style.display = 'block';
        mainNavItemMenuBlack.style.display = 'none';
    }
});