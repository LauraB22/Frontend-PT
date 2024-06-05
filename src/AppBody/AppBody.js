import "./appBody.css";
import correo from "../images/correoPesca.jpg";
import enlaces from "../images/pesca.png";
import personCandado from "../images/tuto.png";
import { Link } from "react-router-dom";
import React from "react";

function AppBody() {
  return (
    <div className="appBody">

    <div className="appItem">
      <Link to ="FormasEstafa" className="linkdecor">
        <span className="appContainer">
          <img src={correo} alt="" />
          <h3>Descubre las formas de estafa</h3>
        </span>
      </Link>
      
      <Link to="ConsejosPhishing" className="linkdecor">
        <span className="appContainer">
        <img src={enlaces} alt="" />
        <h3>Consejos para evitar ser víctima de phishing</h3>
        </span>
      </Link>

      <Link to ="Tutorial" className="linkdecor">
        <span className="appContainer">
          <img src={personCandado} alt="" />
          <h3>¿No sabes usar Phishmail?</h3>
        </span>
      </Link>

      <span className="appContainer">
        <p>Empieza a utillizar esta herramienta</p>
          <Link to="UploadMedia" className="linkdecor">
            <button 
              className="leemas2">
              Usa Phishmail
            </button>
          </Link>
          
      </span>
    </div>

      <span className="presentacion">
         
          Phishmail es la herramienta que te ayudará a identificar los correos
          electrónicos que son un intento de estafa. Pero, ¿Qué es Phishing?
        
        <Link to="InfoPhishing">
        <button className="buttonleer1">
          Leer más
        </button>
      </Link>
      </span>
      
    </div>
  );
}

export { AppBody };
