//your JS code here. If required.
 const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkboxInput = document.getElementById('checkbox');
    const existingButton = document.getElementById('existing');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      if (checkboxInput.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      alert(`Logged in as ${username}`);
    });

    existingButton.addEventListener('click', function() {
      const username = localStorage.getItem('username');
      alert(`Logged in as ${username}`);
    });

    window.onload = function() {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (username && password) {
        existingButton.style.display = 'block';
      }
    };