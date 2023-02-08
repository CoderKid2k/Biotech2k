const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function makeActive () {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
}

hamburger.addEventListener('click', makeActive);
