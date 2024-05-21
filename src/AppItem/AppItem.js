import correo from "../images/correoPesca.jpg";
import enlaces from "../images/pesca.png";
import personCandado from "../images/tuto.png";
import "./appItem.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';

function AppItem() {

  return (
    <div className="appItem">
      <Link to ="FormasEstafa" className="linkdecor">
        <span className="appContainer">
          <img src={correo} alt="" />
          <h3>Descubre las formas de estafa</h3>
        </span>
      </Link>

      <span className="appContainer">
        <img src={enlaces} alt="" />
        <h3>Evita abrir enlaces sospechosos</h3>
      </span>

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
  );
}

export { AppItem };
