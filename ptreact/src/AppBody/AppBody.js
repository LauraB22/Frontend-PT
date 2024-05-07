import React from "react";
import phish from "../images/que-es-phishing-pharming.jpg";
import "./appBody.css";
import { Tutorial } from "../Tutorial/Tutorial";
import { Link } from "react-router-dom";

function AppBody() {
  return (
    <div className="appBody">
      <span className="presentacion">
        <p>
          Phishmail es la herramienta que te ayudará a identificar los correos
          electrónicos que son un intento de estafa
        </p>
        <img src={phish} alt="" />
      </span>
      <Link to="Tutorial">
        <button className="buttonleer1">
          Leer más
        </button>
      </Link>s
    </div>
  );
}

export { AppBody };
