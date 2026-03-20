import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, toggleTodo }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm mt-6">
        아직 할 일이 없어요 🙂
      </p>
    );
  }

  return (
    <ul className="bg-white rounded-lg px-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
