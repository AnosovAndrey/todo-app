import React from "react";
import {v4 as uuid} from "uuid";

import './App.css';

function App() {

    const [todos, setTodos] = React.useState([]);
    const [todo, setTodo] = React.useState({
        id: "",
        text: ""
    });

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleChange = (event) => {
        event.preventDefault();
        setTodo({...todo, text: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.text.trim()) {
            addTodo({...todo, id: uuid()})
            setTodo({...todo, text: ""})
        }
    }

    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div className="App">
            <ul>
                {
                    todos.map(todo  =>
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick= {() => handleRemove(todo.id)}>X</button>
                        </li>
                    )
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <label>
                    Input todo:
                    <input
                        type="text"
                        value={todo.text}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default App;
