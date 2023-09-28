const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navLogo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);