// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Get the input values from the form
            var emailInput = loginForm.querySelector('input[name="email"]');
            var passwordInput = loginForm.querySelector('input[name="password"]');
            var email = emailInput.value;
            var password = passwordInput.value;
            // Basic validation
            if (!email || !password) {
                alert('Please fill in both fields.');
                return;
            }
            // Simulate a login process (replace this with your authentication logic)
            console.log('Logging in with Email:', email, 'Password:', password);
            // Optionally, perform an API call or further validation here
        });
    }
});
