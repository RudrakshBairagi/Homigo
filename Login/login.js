
const loginDetails = {};

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginDetails[usernameInput.value] = passwordInput.value;

    console.log(loginDetails);

    
   
});