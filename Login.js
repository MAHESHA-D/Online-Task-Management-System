async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log("username : "+email);
    console.log('password : '+password);

    const response = await fetch("http://localhost:8080/api/signin", { // here you have to give your database end point
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then((response)=>response.json())
    .then((data)=> console.log(data));
    if(response.status){
      window.location.href="task.html";
    }
  } 
