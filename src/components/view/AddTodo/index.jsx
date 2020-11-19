import { v4 as uuid } from "uuid";
import React from "react";

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

  return (
    <div className="add-todo">
      <div className="add-todo__button" onClick={() => setVisiblePopup(!visiblePopup)}></div>
      { visiblePopup && 
            (<div className="add-todo__popup_form">
                <form onSubmit={handleSubmit}>
                    <label>Input todo:</label>
                    <input type="text" value={todo.text} onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>) 
        } 
    </div>
  );
};

export default AddTodo;
