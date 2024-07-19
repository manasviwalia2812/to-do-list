const todoList=[];

function updateTodoList(){
  let todoListHTML='';

  todoList.forEach((todoObject,index) => {
    const {name}=todoObject;                //destructuring 
    const{dueDate}=todoObject;
    const{dueTime}=todoObject;
    const html=`
    <div>${name}</div>
    <div>${dueDate} </div>
    <div>${dueTime}</div>
    <button class="delete-button js-delete-button">Delete</button> 
    `;
    todoListHTML+=html;
  })

//   for(let i=0; i<todoList.length; i++){
//     const todoObject=todoList[i];
//     // const name=todoObject.name;
//     //const dueDate=todoObject.dueDate;
//     const {name}=todoObject;                //destructuring 
//     const{dueDate}=todoObject;
//     const{dueTime}=todoObject;
//     const html=`
//     <div>${name}</div>
//     <div>${dueDate} </div>
//     <div>${dueTime}</div>
//     <button onclick="
//       todoList.splice(${i},1);
//       updateTodoList();
//     " class="delete-button">Delete</button> 
//     `;
//     todoListHTML+=html;
//   }

  document.querySelector('.js-todoList')
    .innerHTML=todoListHTML;
  
  document.querySelectorAll('.js-delete-button')     //to target all the delete button using event listener
    .forEach((deleteButton , index) =>{         //to loop through the list of all the delete button created.
      deleteButton.addEventListener('click',()=>{
        todoList.splice(index,1);
        updateTodoList();
      }) 
    });
}

document.querySelector('.js-add-button')
  .addEventListener('click', ()=>{
    addTodo();
  });

function addTodo(){
  const inputElement= document.querySelector('.js-name-input');             //to select the input in the search box

  const name=inputElement.value;      //to select the text in the searchbox

  const dateInputElement=document.querySelector('.js-due-date-input');                //to select the due date

  const dueDate=dateInputElement.value;         //to select the value in the due date

  const timeInputElement=document.querySelector('.js-due-time-input');

  const dueTime= timeInputElement.value;

  todoList.push({
    // name:name,
    // dueDate:dueDate
    name,
    dueDate,
    dueTime
  });                //to add tasks in the array


  inputElement.value='';              //to reset the searchbox 
  dateInputElement.value='';
  timeInputElement.value='';
  updateTodoList();
}