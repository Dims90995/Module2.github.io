"use strict";

// Create a container for the registration form
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
passwordInput.style.marginBottom = '10px'; // Confirm Password input

var confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.textContent = 'Confirm Password: ';
var confirmPasswordInput = document.createElement('input');
confirmPasswordInput.type = 'password';
confirmPasswordInput.name = 'confirmPassword';
confirmPasswordInput.style.width = '100%';
confirmPasswordInput.style.marginBottom = '10px'; // Register button

var submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Register';
submitButton.style.width = '100%'; // Append inputs and button to the form

form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(document.createElement('br'));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));
form.appendChild(confirmPasswordLabel);
form.appendChild(confirmPasswordInput);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton); // Append the form to the container, then add to the document body

container.appendChild(form);
document.body.appendChild(container); // Handle form submission for registration

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var username = usernameInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value; // Simple validation: ensure password fields match

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  } // Save registration data locally (for demonstration only)


  localStorage.setItem('registeredUser', JSON.stringify({
    username: username,
    password: password
  })); // Optionally, redirect to the login page after successful registration

  alert('Registration successful! Please log in.');
  window.location.href = 'index.html';
});