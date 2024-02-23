
let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    navbar1.classList.remove('active');
    sea.classList.remove('active');
}
let navbar1=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    navbar1.classList.toggle('active');
    sea.classList.remove('active');
    navbar.classList.remove('active');
}
let sea=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    sea.classList.toggle('active');
    navbar.classList.remove('active');
    navbar1.classList.remove('active');
}
 window.onscroll=()=>
 {
    navbar.classList.remove('active');
    navbar1.classList.remove('active');
    sea.classList.remove('active');
 }