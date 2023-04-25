import React from "react";
import "./Loader.css"

function Loader() {
    return ( 
        <p className="container">
                <div id="contenedor">
            <div class="contenedor-loader">
                <div class="loader"></div>
            </div>
            <div class="cargando">Cargando...</div>
            </div>
        </p> 
    );
}

export default Loader;