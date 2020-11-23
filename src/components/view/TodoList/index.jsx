import React from "react";
import {useParams, Link} from "react-router-dom";

import TodoItem from "./../TodoItem";

import "./List.scss";

const TodoList = ({ todos, removeTodo }) => {

    const { id } = useParams();

    if(id){
        todos = todos.filter((todo) => todo.user === id);
    }

    return (
        <React.Fragment>
            {id && 
                <Link to={"/tasks"}>
                    <button className="home-Button">Home</button>
                </Link>
            }
            <ul className="list">
                {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    removeTodo={removeTodo}
                />
                ))}
            </ul>
        </React.Fragment>
    );
  }
  
export default TodoList;
