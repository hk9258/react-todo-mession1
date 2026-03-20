import { useEffect, useState, useRef } from "react";
import { getStorage, setStorage } from "../utils/storage";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const isMounted = useRef(false);

  // 최초 로드
  useEffect(() => {
    const storedTodos = getStorage("todos");
    setTodos(storedTodos);
  }, []);

  // 저장
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    setStorage("todos", todos);
  }, [todos]);

  const addTodo = (value) => {
    if (!value.trim()) return;

    const newTodo = {
      id: crypto.randomUUID(),
      value,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return { todos, addTodo, deleteTodo, toggleTodo };
};
