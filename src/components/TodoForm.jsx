import { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (input.trim() === "") return;

    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex gap-2 mb-6">
      <input
        className="flex-1 border border-gray-200 bg-white px-3 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white text-sm rounded-full hover:bg-indigo-600 transition"
      >
        추가
      </button>
    </form>
  );
}

export default TodoForm;
