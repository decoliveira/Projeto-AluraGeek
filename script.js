import { displayProducts } from './js/gerencia-produtos.js';

const loginBtn = document.querySelector('.header__login'); // button to access login page
const bannerBtn = document.querySelector('.banner__button'); // button available in the banner
const cadastrarBtn = document.querySelector('.header__cadastrar');

// redirect to the login page
loginBtn.addEventListener('click', () => {
    window.location = 'login.html';
});

cadastrarBtn.addEventListener('click', () => {
    window.location = 'cadastro.html';
});

// redirect to the products on sale
bannerBtn.addEventListener('click', () => {
    window.location = 'categoria.html?cat=2';
});

// show products when the home page loads
displayProducts('split');
