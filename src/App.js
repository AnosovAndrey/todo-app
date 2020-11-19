import React, { useEffect } from "react";
import TodoList from "./components/view/TodoList";
import AddTodo from "./components/view/AddTodo";

import "./index.scss";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    setTodos([
      {
        id: "12",
        text: "firstTodo",
      },
      {
        id: "22",
        text: "long todo rrrrrrrrrrr 34 435 ",
      },
      {
        id: "42",
        text: "long todo rrrrrrrrrrr 34 435 long todo rrrrrrrrrrr 34 435 ",
      },
    ]);
  }, [setTodos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <div className="todo__list_area">
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      <div className="todo__add_area">
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
