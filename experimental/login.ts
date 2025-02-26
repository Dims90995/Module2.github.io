// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();
  
        // Get the input values from the form
        const emailInput = loginForm.querySelector('input[name="email"]') as HTMLInputElement;
        const passwordInput = loginForm.querySelector('input[name="password"]') as HTMLInputElement;
        const email = emailInput.value;
        const password = passwordInput.value;
  
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
  