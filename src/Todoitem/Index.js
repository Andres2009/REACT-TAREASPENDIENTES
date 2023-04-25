import React from "react";
import './Todoitem.css'

function Todoitem(props) { 

 
    return ( 
        <p className="card" > 
            <p className="card-header">Descripcion de la Tarea: </p> 
            <p className="card-body">{props.text}</p> 
            <p className="card-header" style={{ color: props.completed ? 'green' : 'red' }}>
                {(props.completed  ? 'Estado: Completada!! ' : 'Estado: Pendiente ') }
            </p> 
            <div class="btn-group" role="group" aria-label="">
                <button type="button" className="btn btn-success" onClick={props.pasarTrueTODO} >Realizado</button> 
                <button type="button" className="btn btn-primary" onClick={props.pasarFalseTODO}>No Realizado</button>
                <button type="button" className="btn btn-danger"  onClick={props.Borrar}>Eliminar</button>
            </div>
        </p>             
    );
}

export default Todoitem;