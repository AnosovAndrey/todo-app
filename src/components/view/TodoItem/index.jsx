import React from "react";
import deleteSvg from "./../../../assets/img/delete.svg";

import "./TodoItem.scss"

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    removeTodo(todo.id);
  }

  return(
      <li>
          <span>{todo.text}</span>
          <i onClick={handleRemove}>
                <img src={deleteSvg} alt="delete" width="22px" height="22px"/>
          </i>
          <span className="userName">User: {todo.user}</span>
      </li>
  );
};

export default Index;