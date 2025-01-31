const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Add submit event listeners for the forms
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your signup logic here
    alert('Signup form submitted');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your login logic here
    alert('Login form submitted');
});
