const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.value}</li>
      ))}
    </ul>
  );
};

export default TodoList;
