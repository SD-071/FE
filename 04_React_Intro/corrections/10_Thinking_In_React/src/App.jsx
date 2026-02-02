import AddToDo from "./components/AddToDo";
import FilterToDo from "./components/FilterToDo";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) :[]);
  const [filter, setFilter] = useState("all");

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const toDoes = prevTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed: !todo.completed}
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(toDoes));
      return toDoes;
    })
  };

  const filteredTodos = todos.filter((todo) => {
    if(filter === "all") return true;
    if(filter === "completed" && todo.completed) return true;
    if(filter === "active" && !todo.completed) return true;
    return false;
  })
  console.log('Todos: ', todos);
  console.log('Filtered todos: ', filteredTodos);
  return (
    <div className='max-w-3xl mx-auto p-4'>
      <AddToDo setTodos={setTodos} />
      <FilterToDo setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App
