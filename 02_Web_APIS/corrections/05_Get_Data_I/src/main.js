const todoList = document.getElementById('todo-list');

// Display todos
function displayTodos(todos) {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const todoItem = document.createElement("li");
        todoItem.textContent = todo.title;
        todoItem.classList.add("mb-2");
        if(todo.completed) {
            todoItem.classList.add("line-through", "text-green-500");
        } else {
            todoItem.classList.add("text-red-500");
        }
        todoList.appendChild(todoItem);
    })
}
// Function async await to fetch the todos
async function fetchTodos() {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        displayTodos(data);
    }catch(err){
        console.error("Error to fetch todos: ", err);
    }
    
}

fetchTodos()