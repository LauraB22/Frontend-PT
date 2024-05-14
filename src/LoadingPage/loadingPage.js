import React from "react";
function loadingPage(){
    return(
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Cargando... Por favor espera.</p>
        </div>
    );
}

export {loadingPage};
