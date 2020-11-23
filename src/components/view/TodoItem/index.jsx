import React from "react";
import axios from "axios"
import {Link} from "react-router-dom";

import deleteSvg from "./../../../assets/img/delete.svg";
import editSvg from "./../../../assets/img/edit.svg";

import "./TodoItem.scss"

const Index = ({ todo, removeTodo, editTodo }) => {

  function handleRemove() {
    axios.delete("http://localhost:3001/tasks/" + todo.id).then(
        () => removeTodo(todo.id)
    );
  };

  function handleEdit() {
      const newText = window.prompt("Change text", todo.text);
      
      if(newText){
        axios
        .patch("http://localhost:3001/tasks/" + todo.id, {
            text: newText
        }).then(()=> {
            todo.text = newText;
            editTodo(todo);
        }).catch(() => alert("edit failed"));
      }
  };

  return(
      <li>
          <span className = "textLine">{todo.text}</span>
          <i className="editBadge" onClick={handleEdit}>
                <img src={editSvg} alt="edit" width="20px" height="20px"/>
          </i>
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