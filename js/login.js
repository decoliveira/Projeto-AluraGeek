import { validateField } from "./valida-input.js";

const loginForm = document.querySelector('.login');
const loginInputs = document.querySelectorAll('.login__input');

// ----- Events

// add validate function when input has lost focus
loginInputs.forEach(input => input.addEventListener('blur', e => validateField(e.target)));

// authenticate user and redirect to products list page if authenticated (show error otherwise)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //validate credentials
    const isUserAuthenticated = authenticateUser();
    if(isUserAuthenticated) window.location = 'produtos.html';
    else showLoginError();
})

// ----- Functions

/*
    Verify if e-mail/password exists.
    Authenticate using stored user data from localStorage.
*/
function authenticateUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    return users.some(user => user.email === email && user.password === password);
}

// show error on screen if authentication fails
function showLoginError() {
    const loginErrorElement = document.querySelector('.login__error');

    loginErrorElement.innerText = 'E-mail ou senha inválidos.'
    loginErrorElement.classList.add('login__error--visible');
}
