const loginHandler = async (event) => {
  event.preventDefault();

  // Grab values from clients user login form
  const userEmail = document.querySelector('#email-login').value.trim();
  const userPw = document.querySelector('#password-login').value.trim();

  if (userEmail && userPw) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();

  const userEmail = document.querySelector('#email-signup').value.trim();

  const userPassword = document.querySelector('#password-signup').value.trim();

  if (userName && userEmail && userPassword) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ userName, userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/profile')
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