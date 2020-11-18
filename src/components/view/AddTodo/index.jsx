import { Button } from "@material-ui/core";
import { v4 as uuid } from "uuid";
import React from "react";

const AddTodo = ({addTodo}) => {

  const [todo, setTodo] = React.useState({
    id: "",
    text: "",
  });

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

  return( 
    <form onSubmit={handleSubmit}>
        <label>
        Input todo:
        <input type="text" value={todo.text} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  );
}

export default AddTodo;
