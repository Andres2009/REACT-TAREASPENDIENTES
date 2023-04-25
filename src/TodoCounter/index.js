import React from "react";
import './TodoCounter.css'

function TodoCounter(props) {
    return ( 
        <h3 >Has completado {props.completedTodos} de {props.total} Tareas</h3>
    );
}

export default TodoCounter;