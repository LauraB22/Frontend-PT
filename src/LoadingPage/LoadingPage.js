import React from "react";
import "./loadingPage.css"; 

function LoadingPage(){
    return(
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p> Cargando... Por favor espera.</p>
        </div>
    );
}

export {LoadingPage};
