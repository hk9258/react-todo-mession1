import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md px-5 py-6">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          My Todo
        </h1>

        <TodoForm addTodo={addTodo} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}

export default App;
