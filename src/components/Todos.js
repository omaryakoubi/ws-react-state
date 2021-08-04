import TodoItem from "./TodoItem";

const Todo = ({ todos, deleteTodo }) => {
  return (
    <div>
      <TodoItem todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;
