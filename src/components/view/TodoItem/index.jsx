import React from "react";
import deleteSvg from "./../../../assets/img/delete.svg";

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    removeTodo(todo.id);
  }

  return(
      <li>
          {todo.text}
          <i>
                <img src={deleteSvg} alt="delete" width="20px" height="20px"/>
              {/* <button onClick={handleRemove}>X</button> */}
          </i>
      </li>
  );
};

export default Index;
