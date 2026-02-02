
function TodoItem({todo, toggleTodo}) {
  return (
    <li className={`flex items-center mb-2 ${todo.completed ? "text-gray-600 line-through": ""}`}>
      <label htmlFor={todo.id}>
        <input
          className='mr-2'
          id={todo.id}
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}

export default TodoItem;