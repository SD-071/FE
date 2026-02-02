import { useState } from "react";

function AddToDo({setTodos}) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTodo.trim()) return alert("Please enter a to-do!");
    setTodos((prevTodos) => {
      const toDoes = [{id: Date.now(), text: newTodo, completed: false}, ...prevTodos];
      localStorage.setItem("todos", JSON.stringify(toDoes));
      return toDoes;
    })
    setNewTodo("");
  }
  
  return (
    <form onSubmit={handleSubmit} className='mb-4 flex'>
      <input
        onChange={(e) => setNewTodo(e.target.value.trim())}
        value={newTodo}
        className='flex-1 border rounded px-2 py-1 mr-2'
        type='text'
        name='todo'
        placeholder='Add a new to-do'
      />
      <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>
        Add
      </button>
    </form>
  );
}

export default AddToDo