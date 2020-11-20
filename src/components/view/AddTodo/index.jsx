import { v4 as uuid } from "uuid";
import React from "react";
import Button from "./../../inputs/Button";
import Input from "./../../inputs/Input";

import "./AddTodo.scss";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = React.useState({
    id: "",
    text: "",
  });

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.text.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, text: "" });
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setTodo({ ...todo, text: event.target.value });
  };

  const onClose = () => {
      setVisiblePopup(false);
  }

  return (
    <div className="add-todo">
      <div
        className="add-todo__button"
        onClick={() => setVisiblePopup(!visiblePopup)}
      >
        <h1>Add todo</h1>
      </div>
      {visiblePopup && (
        <div className="add-todo__popup_form">
            <Input
                value={todo.text}
                placeholder="Add todo"
                onChange={handleChange}
            >
            </Input>
            <Button 
                name = "add-todo"
                text = "Add" 
                onClick={handleSubmit}
            >
            </Button>
            <Button
                name = "close-todo-form"
                text="Close form"
                onClick={onClose}
            >
            </Button>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
