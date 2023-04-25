import React  from "react";


function Todosearch({estado,setEstado}) {

    const OnChangeValue = (event)    =>{ 
        setEstado(event.target.value); 
    }  
    return (
        
        <input className="form-control me-2" type="search" 
            placeholder="Buscador"
            value={estado}
            onChange={ OnChangeValue}
         /> 
     );
}

export default Todosearch;