// script.js

// Function to handle user registration
function registerUser() {
    // Get the user data from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform registration logic here
    console.log('User Registered:', username);
    // Add your registration backend API call here
}

// Function to handle user login
function loginUser() {
    // Get the user data from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic here
    console.log('User Logged In:', username);
    // Add your login backend API call here
}

// Event listeners for form submissions
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    registerUser();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loginUser();
});
