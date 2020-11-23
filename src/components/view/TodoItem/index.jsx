import React from "react";
import deleteSvg from "./../../../assets/img/delete.svg";
import axios from "axios"
import {Link} from "react-router-dom";

import "./TodoItem.scss"

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    axios.delete("http://localhost:3001/tasks/" + todo.id).then(
        () => removeTodo(todo.id)
    );
  }

  return(
      <li>
          <span>{todo.text}</span>
          <i onClick={handleRemove}>
                <img src={deleteSvg} alt="delete" width="22px" height="22px"/>
          </i>
          <Link to={`/user/${todo.user}`}>
                <span className="userName">User: {todo.user}</span>
          </Link>
      </li>
  );
};

export default Index;