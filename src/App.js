import React from "react";
import TodoList from "./components/view/TodoList";
import AddTodo from "./components/view/AddTodo";

import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div className="App">
      <TodoList todos={todos} removeTodo={removeTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
