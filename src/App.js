import React, { useEffect } from "react";
import {TodoList, AddTodo} from "./components/view";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";


import "./index.scss";

function App() {

  const [todos, setTodos] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then( ({data}) => {
            let array = [];
            data.map((task) => array.push({id: task.id, text: task.text, user: task.userId}));
            data.map((task) => setTodos(array));
        }
    )
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
      <Switch>
        <Route exact path="/abc">
          <h1>component</h1>
        </Route>
        <Redirect from="/abe" to="/abc" />
      </Switch>
    </div>
  );
}

export default App;
