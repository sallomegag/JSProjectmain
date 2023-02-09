'use strict'

//nav bar
let navBar = document.getElementById('navigation');
let toggleBar = document.getElementById('toggle-menu');


toggleBar.addEventListener('click', function(){
    toggleBar.classList.toggle('toggleActive');
    navBar.classList.toggle('overlay');
}) 

const navbar = document.querySelector('.nav-fixed');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
    } else {
        navbar.classList.remove('nav-active');
    }
};