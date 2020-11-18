import { List } from "@material-ui/core";
import React from "react";
import TodoItem from "./../TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <List className="list">
      {todos.map((todo) => (
        <TodoItem 
            key={todo.id} 
            todo={todo}
            removeTodo={removeTodo} 
        />
      ))}
    </List>
  );
}

export default TodoList;
