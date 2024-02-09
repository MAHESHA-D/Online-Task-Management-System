  const orgID = document.getElementById('Org_ID').value;
  const roleID = document.getElementById('Role_ID').value;
  const empID= document.getElementById('Emp_ID').value;
  const empName= document.getElementById('Emp_Name').value;
  const username =document.getElementById('username').value;
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  const createdby=document.getElementById('Created_By').value;
  const updatedby=document.getElementById('Updated_By').value;

    console.log("Orgnization ID : "+orgID);
    console.log('Role ID : '+roleID);
    console.log('Employee ID : '+empID);
    console.log('Employee Name : '+ empName);
    console.log('User name : '+username);
    console.log('Email : '+email);
    console.log('Password : '+password);
    console.log('Created By : '+createdby);
    console.log('Updated By : '+updatedby);
        
  async function registration() {
    const response = await fetch("http://localhost:8080/api/signin", { // here you have to give your database end point
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ orgID, roleID, empID, empName, username, email, password,createdby, updatedby })
    })
    .then((response)=>response.json())
    .then((data)=> console.log(data));
    try{
      if(response.status==200){
            console.log('redirected to task details page')
            window.location.href='./task.html';
        }
    }
    catch(error)  {
          console.log('please check our fetch method');
          console.error('Registration failed:', error.message);
    }
} 
