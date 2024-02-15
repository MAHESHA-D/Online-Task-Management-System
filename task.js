const userId = document.getElementById('userId');
const taskTitle = document.getElementById('taskTitle');
const taskDesc= document.getElementById('taskDesc');
const priority= document.getElementById('priority');
const taskStatus =document.getElementById('taskStatus');
const plannedStartDate=document.getElementById('plannedStartDate');
const plannedCompletionDate=document.getElementById('plannedCompletionDate');
const actualStartDate=document.getElementById('actualStartDate');
const actualCompletionDate=document.getElementById('actualCompletionDate');
const activeStatus=document.getElementById('activeStatus');
const assigneeId=document.getElementById('assigneeId');
const assignerId=document.getElementById('assignerId');
const createdBy=document.getElementById('createdBy');
const updatedBy=document.getElementById('updatedBy');

function openNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
  // document.table.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNavbar() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");
  // document.body.style.backgroundColor = 'white';
}

async function submit() {
  console.log("User ID : "+userId.value);
  console.log('task Title : '+taskTitle.value);
  console.log('task Description : '+taskDesc.value);
  console.log('priority : '+ priority.value);
  console.log('task Status : '+taskStatus.value);
  console.log('Planned Start Date : '+plannedStartDate.value);
  console.log('planned Completion Date : '+plannedCompletionDate.value);
  console.log('actual Start Date: '+actualStartDate.value);
  console.log('actual Completion Date : '+actualCompletionDate.value);
  console.log('active Status : '+activeStatus.value);
  console.log('assignee Id : '+assigneeId.value);
  console.log('assigner Id : '+assignerId.value);
  console.log('created By : '+createdBy.value);
  console.log('Updated By : '+updatedBy.value);
      
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("open");

  const response = await fetch("http://localhost:8080/api/task/create", { // here you have to give your database end point
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId,taskTitle,taskDesc,priority,taskStatus,
      plannedStartDate,plannedCompletionDate,actualStartDate,
      actualCompletionDate,activeStatus,assigneeId,assignerId,createdBy,updatedBy })
  })
  .then((response)=>response.json())
  .then((data)=> console.log(data));
  try{
    if(response.status==200){
          console.log('Data inserted successfully');
      }
  }
  catch(error)  {
        console.log('please check our fetch method');
        console.error('Data insertion is failed:', error.message);
  }
} 
