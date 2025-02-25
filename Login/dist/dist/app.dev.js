"use strict";

// Create a container for the login form
var container = document.createElement('div');
container.style.margin = '100px auto';
container.style.width = '300px';
container.style.padding = '20px';
container.style.border = '1px solid #ccc';
container.style.borderRadius = '5px';
container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Create a form element

var form = document.createElement('form'); // Username input

var usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Username: ';
var usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.name = 'username';
usernameInput.style.width = '100%';
usernameInput.style.marginBottom = '10px'; // Password input

var passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password: ';
var passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.name = 'password';
passwordInput.style.width = '100%';
passwordInput.style.marginBottom = '10px'; // Login button

var loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Log In';
loginButton.style.width = '100%'; // Append inputs and button to the form

form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(document.createElement('br'));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));
form.appendChild(loginButton); // Append the form to the container, then add to the document body

container.appendChild(form);
document.body.appendChild(container); // Handle form submission

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var username = usernameInput.value;
  var password = passwordInput.value; // Save login data locally (for demonstration only)

  localStorage.setItem('loginData', JSON.stringify({
    username: username,
    password: password
  })); // Redirect to the next page (e.g., next.html)

  window.location.href = 'next.html';
});