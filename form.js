let submitBtn = document.getElementById('submit');
let titleField = document.getElementById('title');
let noteField = document.getElementById('note-field');
let completedTodos = document.getElementById('completed');
let notCompletedTodos = document.getElementById('not-completed');
let errorMessage = document.getElementById('error')


let todoAppData = {
    todos: [{title: "Go to the mall", note: "Directions: Take 285 east to Cumberland blvd"}],
    completedTodos:[{title:'Reading', note: 'Read medium articles about javascript'}]
}


window.addEventListener('DOMContentLoaded', ()=>{
    if(todoAppData.todos || todoAppData.completedTodos){
        renderTodo();
        renderCompletedTodos();
    }
});

const renderCompletedTodos = () => {
    completedTodos.innerHTML = todoAppData.completedTodos.map( (todo, index) =>{
        return`
            <div id="note-${index}" class="container note">
                <div class="note-left">
                    <h5>${todo.title}</h5>
                    <p>${todo.note}</p>
                </div>
                <div class="note-right">
                    <button type="submit" class="btn btn-warning">restore</button>
                </div>
            </div>
        `
    }).join('')
}

const completeTodo = (todos, index) => {
    // Add the todo to the completed todos array
    todoAppData.completedTodos.push(todos[index])
    
    // take an element off the todo array
    // renderTodo
    removeTodo(index);

    // render completed todos
    renderCompletedTodos()

}

const removeTodo = (index) =>{
    // take an element off the todo array
    todoAppData.todos.splice(index, 1)
    // re render my UI
    renderTodo();
}

const renderTodo = () =>{
    // give UI feedback when a user adds a todo
    notCompletedTodos.innerHTML = todoAppData.todos.map((todo, index) =>{ // [1,2,3,4]
      const { title, note } = todo // destructuring
        return `
        <div id="note-${index}" class="container note">
            <div class="note-left">
                <h5>${title}</h5>
                <p>${note}</p>
            </div>
            <div class="note-right">
                <button onclick="completeTodo(todoAppData.todos, ${index})"type="submit" class="btn btn-success""><img src="./images/check-circle.svg"/></button>
                <button onclick="removeTodo(${index})"type="submit" class="btn btn-danger""><img src="./images/sad-face.svg"/></button>
            </div>
        </div>
        `
    }).join('')
};

const setTodo = (title, note)=>{
    // set the todo to the state
    todoAppData.todos.push({title, note}) // {title: title, note: note}
    // render the todos back to the UI
    renderTodo();

};

const errorState = (error) => {
    errorMessage.innerHTML = error
    errorMessage.style.fontSize = '10px'
    errorMessage.style.color = 'red'
    submitBtn.setAttribute('disabled', '')
    submitBtn.className = 'btn btn-danger'
}

const appState = () => {
    errorMessage.style.display = 'none'
    submitBtn.removeAttribute('disabled', '')
    submitBtn.className = 'btn btn-primary'
}

titleField.addEventListener('blur', ()=>{
    // have a regular expression aka regex
    // const regex = new RegExp('regex')  // this is the built in Js regex constructor
    // regex.test('va;ue we want tp test')
    // titleField.value.match(regex) // []  loop through and check
    const regex = /[A-Za-z0-9]/g

    // validate my input
    const isValid = regex.test(titleField.value)

    if(!isValid){
        errorState('Input must be a letter in format A-Z  a-z 0-9 or combination')
    }else{
        appState()
    }

})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    setTodo(titleField.value, noteField.value);
    // clear the inputs
    titleField.value = ''
    noteField.value = ''
});

