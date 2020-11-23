import React, { useEffect } from "react";
import { TodoList, AddTodo } from "./components/view";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import "./index.scss";

function App() {
  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      let array = [];
      data.map((task) =>
        array.push({ id: task.id, text: task.text, user: task.userId })
      );
      setTodos(array);
    });
  }, [setTodos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <Switch>
        <Redirect exact from="/" to="/tasks" />
        <Route path="/tasks">
          <div className="todo__list_area">
            <TodoList todos={todos} removeTodo={removeTodo} />
          </div>
        </Route>
        <Route exact path="/user/:id">
          <div className="todo__list_area">
            <TodoList todos={todos} removeTodo={removeTodo} />
          </div>
        </Route>
      </Switch>
      <div className="todo__add_area">
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
