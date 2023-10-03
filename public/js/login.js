const loginHandler = async (event) => {
  event.preventDefault();

  // Grab values from clients user login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log(email);
  console.log(password);
  if (email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();

  const email = document.querySelector('#email-signup').value.trim();

  const password = document.querySelector('#password-signup').value.trim();

  if (userName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.login-form')
  .addEventListener('submit',
    loginHandler);
document.querySelector('.signup-form')
  .addEventListener('submit',
    signUpHandler);