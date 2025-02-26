interface User {
  username: string;
  email: string;
  password: string;
}


function saveUser(user: User): void {
  let users: User[] = [];
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    users = JSON.parse(storedUsers);
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}


function getUser(username: string): User | null {
  const storedUsers = localStorage.getItem('users');
  if (storedUsers) {
    const users: User[] = JSON.parse(storedUsers);
    return users.find(u => u.username === username) || null;
  }
  return null;
}

document.addEventListener("DOMContentLoaded", () => {
  const registerTab = document.getElementById('register-tab') as HTMLButtonElement;
  const loginTab = document.getElementById('login-tab') as HTMLButtonElement;
  const registerFormDiv = document.getElementById('register-form') as HTMLDivElement;
  const loginFormDiv = document.getElementById('login-form') as HTMLDivElement;


  registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerFormDiv.classList.add('active');
    loginFormDiv.classList.remove('active');
  });


  loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginFormDiv.classList.add('active');
    registerFormDiv.classList.remove('active');
  });


  const regForm = registerFormDiv.querySelector('form')!;
  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = (document.getElementById('reg-username') as HTMLInputElement).value;
    const email = (document.getElementById('reg-email') as HTMLInputElement).value;
    const password = (document.getElementById('reg-password') as HTMLInputElement).value;

    if(getUser(username)){
      alert("User already exists!");
      return;
    }

    const newUser: User = { username, email, password };
    saveUser(newUser);
    alert("Registration successful! You can now log in.");
    regForm.reset();
    loginTab.click();
  });


  const loginForm = loginFormDiv.querySelector('form')!;
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = (document.getElementById('login-username') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;
    
    const user = getUser(username);
    if(user && user.password === password){
      window.location.href = "/Homepage.html/Main.html";
    } else {
      alert("Invalid username or password.");
    }
    loginForm.reset();
  });
});
