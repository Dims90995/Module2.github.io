"use strict";

// Save user data in localStorage as a JSON string
function saveUser(user) {
  var users = [];
  var storedUsers = localStorage.getItem('users');

  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }

  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
} // Retrieve a user by username


function getUser(username) {
  var storedUsers = localStorage.getItem('users');

  if (storedUsers) {
    var users = JSON.parse(storedUsers);
    return users.find(function (u) {
      return u.username === username;
    }) || null;
  }

  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  var registerTab = document.getElementById('register-tab');
  var loginTab = document.getElementById('login-tab');
  var registerFormDiv = document.getElementById('register-form');
  var loginFormDiv = document.getElementById('login-form'); // Switch to Register tab

  registerTab.addEventListener('click', function () {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerFormDiv.classList.add('active');
    loginFormDiv.classList.remove('active');
  }); // Switch to Login tab

  loginTab.addEventListener('click', function () {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginFormDiv.classList.add('active');
    registerFormDiv.classList.remove('active');
  }); // Registration form handler

  var regForm = registerFormDiv.querySelector('form');
  regForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.getElementById('reg-username').value;
    var email = document.getElementById('reg-email').value;
    var password = document.getElementById('reg-password').value;

    if (getUser(username)) {
      alert("User already exists!");
      return;
    }

    var newUser = {
      username: username,
      email: email,
      password: password
    };
    saveUser(newUser);
    alert("Registration successful! You can now log in.");
    regForm.reset();
    loginTab.click();
  }); // Login form handler

  var loginForm = loginFormDiv.querySelector('form');
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;
    var user = getUser(username);

    if (user && user.password === password) {
      alert("Login successful!"); // Add further redirection or actions here after successful login.
    } else {
      alert("Invalid username or password.");
    }

    loginForm.reset();
  });
});