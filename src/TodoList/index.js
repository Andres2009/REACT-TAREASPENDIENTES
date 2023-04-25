import React from "react";
import './TodoList.css'


function TodoList(props) {
    return (  
        <p className="containeree">
           {props.children}  
        </p> 
    );
}

export default TodoList;