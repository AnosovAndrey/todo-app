import React from "react";
import {useParams, Link} from "react-router-dom";

import TodoItem from "./../TodoItem";

import "./List.scss";

const TodoList = ({ todos, removeTodo, editTodo }) => {

    const { id } = useParams();

    if(id){
        todos = todos.filter((todo) => todo.user === id);
    }

    return (
        <React.Fragment>
            {id && 
                <Link to={"/tasks"}>
                    <button className="home-button">Home</button>
                </Link>
            }
            <ul className="list">
                {todos.map((todo) => (
                <TodoItem 
                    key={todo.id} 
                    todo={todo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
                />
                ))}
            </ul>
        </React.Fragment>
    );
  }
  
export default TodoList;
