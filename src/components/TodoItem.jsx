function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className="flex items-center justify-between py-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="w-4 h-4 accent-indigo-500"
        />

        <span
          className={`text-sm ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.value}
        </span>
      </div>

      <button
        className="text-xs text-gray-400 hover:text-red-500 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
