import { validateField } from "./valida-input.js";

const registerForm = document.querySelector('.login');
const registerInputs = document.querySelectorAll('.login__input');

// ----- Events

// add validate function when input has lost focus
registerInputs.forEach(input => input.addEventListener('blur', e => validateField(e.target)));

// handle user registration
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // check if passwords match
    if (password !== confirmPassword) {
        showRegisterError('As senhas não coincidem.');
        return;
    }

    // register the user
    const isUserRegistered = registerUser(email, password);
    if (isUserRegistered) {
        window.location = 'login.html'; // redirect to login page after successful registration
    } else {
        showRegisterError('Usuário já existe.');
    }
});

// ----- Functions

/*
    Register a new user.
    Check if the email is already registered and store the new user in localStorage.
*/
function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // check if user already exists
    if (users.some(user => user.email === email)) {
        return false;
    }

    // add new user to the list
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

// show error on screen if registration fails
function showRegisterError(message) {
    const registerErrorElement = document.querySelector('.login__error');

    registerErrorElement.innerText = message;
    registerErrorElement.classList.add('login__error--visible');
}
