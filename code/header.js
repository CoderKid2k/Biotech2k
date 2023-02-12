const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function makeActive () {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
}

hamburger.addEventListener('click', makeActive);

const menu = document.querySelector(".company-menu");
const sideNav = document.querySelector(".company-nav");

function sideActive () {
     menu.classList.toggle("active");
     sideNav.classList.toggle("active");
}

menu.addEventListener('click', sideActive);
