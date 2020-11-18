import React from "react";
import TodoItem from "./../TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
            removeTodo={removeTodo} 
        />
      ))}
    </ul>
  );
}

export default TodoList;
