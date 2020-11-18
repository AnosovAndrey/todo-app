import { ListItem, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const Index = ({ todo, removeTodo }) => {

  function handleRemove() {
    removeTodo(todo.id);
  }

  return(
      <ListItem>
          {todo.text}
          <IconButton>
              <CloseIcon onClick={handleRemove}/>
          </IconButton>
      </ListItem>
  );
};

export default Index;
