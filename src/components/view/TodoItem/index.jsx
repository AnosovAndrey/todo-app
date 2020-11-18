import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    removeTodo(todo.id);
  }

  return(
      <li>
          {todo.text}
          <i>
              <button onClick={handleRemove}>X</button>
          </i>
      </li>
  );
};

export default Index;
