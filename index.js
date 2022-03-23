// declare variables
let menu = document.getElementById('menu');
let nav = document.getElementById('navbar');
const searchbox = document.getElementById('search-box');
const btn = document.getElementById('btn');
const carts = document.getElementById('carts');
const coffee = document.getElementById('coffee');
const navbar = document.querySelector('.nav');

window.onload = () =>{
 navbar.style.background = 'none'
 coffee.classList.remove('active');
 nav.classList.remove('active');
searchbox.classList.remove('active');
}


menu.onclick = () =>{
 menu.classList.toggle('fa-times');
 nav.classList.toggle('active');
 searchbox.classList.remove('active');
 coffee.classList.remove('active');
}

btn.onclick = () =>{
 searchbox.classList.toggle('active');
 menu.classList.remove('fa-times');
 coffee.classList.remove('active');
 nav.classList.remove('active');
}

carts.onclick = () =>{
 coffee.classList.toggle('active');
 nav.classList.remove('active');
 searchbox.classList.remove('active');
}
window.onscroll = () =>{
 navbar.style.background = 'whitesmoke'
 coffee.classList.remove('active');
 nav.classList.remove('active');
searchbox.classList.remove('active');
}

// cart
// const addcart = document.getElementById('add-cart');
// const clearcart = document.getElementById('clear-cart');
// const coffeebox = document.querySelector('.coffee-box');
// const menubox = document.querySelector('.menu-box');
// const carttotal = document.querySelector('.cart-total');
// const getProducts = document.querySelector('.menu');

//cart
let cart = [];
//getting products
// class products{
// async getProducts(){
// try {
//  let result = await fetch('index.json');
//  let data = await result.json();
// return data;
// } catch (error) {
//  console.log('error')
// }
// }
// }

//display
// class UI{


//local storage


// document.addEventListener("DOMContentLoaded",()=>{
//  const ui = new UI();
//  const product = new products();

 //get products
//  getProducts().then(data =>{
//   console.log(data);
//  })
// });
// addcart.onclick = () =>{
// document.getElementsByClassName('coffee-box');
// }
//end of cart


