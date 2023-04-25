import React from "react";
import { useForm } from "react-hook-form";

function CreateTodoButton(props) { 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { 
        try {
            const stringifiedTodo = [...props.todos];
            const strin = data
            stringifiedTodo.push(strin)  
            localStorage.setItem('TAREAS', JSON.stringify(stringifiedTodo)); 
            props.changeerror(false)
        }catch(error) {
            props.changeerror(error)
        }
    };
  
    return (
        <> 
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Nueva Tarea</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <label for="inputPassword5" class="form-label">Descripcion de la Tarea</label>
                        <input class="form-control" type="text" placeholder="tarea" aria-label="" {...register("text",{required:true})}/>
                        <label for="inputPassword5" class="form-label">Estado</label>
                        <select class="form-select" aria-label="Default select example" {...register("completed",{required:true})}>
                            <option value="">Seleccione</option>
                            <option value="true">Completado!!</option>
                            <option selected value="false">Pendiente</option>                            
                        </select> 
                
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button  type="submit" class="btn btn-primary"  data-bs-dismiss="modal">Guardar</button>
                    </div>
                
                </form>
                </div></div>
            </div>
            </div> 
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Crea una nueva Tarea <i class="bi bi-plus-circle-fill"></i>
            </button> 
        </>

    );
}

export default CreateTodoButton;