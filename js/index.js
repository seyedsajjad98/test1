
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todolist');
const filterOption = document.querySelector('.filter-todos')


todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",checkRemove);
filterOption.addEventListener("click",filterTodos);


function addTodo(e){
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    const newTodo = `
                <li>${todoInput.value}</li>
                <span><i class="fas fa-check-square"></i></span>
                <span><i class="fas fa-trash-alt"></i></span>`;
    todoDiv.innerHTML = newTodo;
    todoList.appendChild(todoDiv);
    saveLocalTodos(todoInput.value)
    todoInput.value = "";

}

function checkRemove(e){
    // console.log(e.target.classList);
    const classList = e.target.classList;
    // console.log(classList)
    const item = e.target
    // console.log(item.parentElement.parentElement);
    if (classList[1] === 'fa-check-square'){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed")
    }else if(classList[1] === 'fa-trash-alt'){
        const todo = item.parentElement.parentElement;
       
        todo.remove();
    }
}


function filterTodos(e){
    // console.log(e.target.value);
    // console.log(todoList.childNodes)
    const todos = [...todoList.childNodes];
    todos.forEach((todo)=>{
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    let savedTodos = localStorage.getItem("todos") 
    ? JSON.parse(localStorage.getItem("todos"))
    : [] ;


    savedTodos.push(todo);
    localStorage.setItem("todos",JSON.stringify(savedTodos))
}

// numbers = [1,2,3]
// numbers.push(4,5)
// console.log(numbers)