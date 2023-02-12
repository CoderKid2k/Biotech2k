const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function makeActive () {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
}

hamburger.addEventListener('click', makeActive);

const main = document.querySelector("main");

function removeActive () {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
}

main.addEventListener('click', removeActive);