
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:5000/api/signin', { // here you have to give your database end point
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
      // Redirect or perform other actions after successful login
    } else {
      alert(result.message);
    }
  }
