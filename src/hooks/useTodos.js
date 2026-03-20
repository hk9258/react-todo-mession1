import { useEffect, useState } from "react";
import { getStorage, setStorage } from "../utils/storage";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  // 초기 로드
  useEffect(() => {
    const storedTodos = getStorage("todos");
    setTodos(storedTodos);
  }, []);

  // 저장
  useEffect(() => {
    setStorage("todos", todos);
  }, [todos]);

  const addTodo = (value) => {
    const newTodo = {
      id: Date.now(),
      value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};
