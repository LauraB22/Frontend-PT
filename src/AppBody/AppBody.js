import React from "react";
import phish from "../images/que-es-phishing-pharming.jpg";
import "./appBody.css";
import { Tutorial } from "../Tutorial/Tutorial";
import { Link } from "react-router-dom";

function AppBody() {
  return (
    <div className="appBody">
      <span className="presentacion">
         
          Phishmail es la herramienta que te ayudará a identificar los correos
          electrónicos que son un intento de estafa
        
        <Link to="/">
        <button className="buttonleer1">
          Leer más
        </button>
      </Link>
      </span>
      
    </div>
  );
}

export { AppBody };
