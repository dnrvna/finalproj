let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}
// Initialization for ES Users
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });
// navbar.js

const navbar = document.querySelector('header .navbar');

navbar.addEventListener('click', () => {
  navbar.classList.toggle('active');
});