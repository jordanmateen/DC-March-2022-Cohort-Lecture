// This is a template for form.js

// let submitBtn = document.getElementById('submit');
// let titleField = document.getElementById('title');
// let noteField = document.getElementById('note-field');
// let completedTodos = document.getElementById('completed');
// let notCompletedTodos = document.getElementById('not-completed');
// let errorMessage = document.getElementById('error')


// let todoAppState ={ 
//     todos:[{title:'Go to the mall', note: 'Directions: Take 285 east to cumberland blvd'}],
//     completeTodos:[]
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//    renderToDo(todoAppState.todos)
// });

// submitBtn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     setTodo(titleField.value, noteField.value)
//     titleField.value=''
//     noteField.value=''
// });

// function setTodo(title, note){
//     todoAppState.todos.push({title, note});
//     renderToDo(todoAppState.todos)
// };

// function renderToDo(todos){
//     notCompletedTodos.innerHTML=todos.map((todo, index) =>{
//       return`
//         <div id="note-${index}" class="container note">
//         <div class="note-left">
//             <h5>${todo.title}</h5>
//             <p>${todo.note}</p>
//         </div>
//         <div class="note-right">
//             <button onclick="completeTodo(todoAppState.todos, ${index})"type="submit" class="btn btn-success ""><img src="./images/check-circle.svg"/></button>
//             <button onclick="removeTodo(todoAppState.todos,${index})"type="submit" class="btn btn-danger""><img src="./images/sad-face.svg"/></button>
//         </div>
//         </div>
//       `
//   }).join('');
// };

// function renderCompletedTodos(todos){
//     completedTodos.innerHTML=todos.map((todo, index) =>{
//         return`
//             <div id="note-${index}" class="container note">
//             <div class="note-left">
//                 <h5>${todo.title}</h5>
//                 <p>${todo.note}</p>
//             </div>
//             <div class="note-right">
//                 <button type="submit" class="btn btn-warning">restore</button>
//             </div>
//             </div>
//         `
//     }).join('');
// };

// function removeTodo (todos, index){
//     todos.splice(index,1);
//     renderToDo(todos);
// };

// function completeTodo(todos, index){
//     todoAppState.completeTodos.push(todos[index])
//     todos.splice(index,1);
//     renderToDo(todos);
//     renderCompletedTodos(todoAppState.completeTodos)
// }

// titleField.addEventListener('blur', ()=>{
//     const regex = /^[A-Za-z0-9]/g
//     // !titleField.value.match(regex) && titleField.value !== ''?  errorUI(): noErrorUI()
//     console.log(regex.test(titleField.value));

// })

// function errorUI(){
//     errorMessage.innerText = "Invalid characters. Only letters and numbers are accepted"
//     errorMessage.style.fontSize='10px'
//     errorMessage.style.color='red'
//     submitBtn.className = 'btn btn-danger'
//     submitBtn.setAttribute('disabled', '')
// }

// function noErrorUI(){
//     errorMessage.innerText=''
//     submitBtn.className = 'btn btn-primary'
//     submitBtn.removeAttribute('disabled', false)
// }