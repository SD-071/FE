import TodoItem from "./TodoItem"
function TodoList({todos, toggleTodo}) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}

export default TodoList