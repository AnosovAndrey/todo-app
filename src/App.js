import React from "react";
import TodoList from "./components/view/TodoList";
import AddTodo from "./components/view/AddTodo";

import "./index.scss";

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="todo">
      <div className="todo__list">
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      <div className="todo__add">
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
