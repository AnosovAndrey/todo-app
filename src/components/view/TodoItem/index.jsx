import React from "react";
import deleteSvg from "./../../../assets/img/delete.svg";

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    removeTodo(todo.id);
  }

  return(
      <li>
          {todo.text}
          <i onClick={handleRemove}>
                <img src={deleteSvg} alt="delete" width="20px" height="20px"/>
          </i>
      </li>
  );
};

export default Index;