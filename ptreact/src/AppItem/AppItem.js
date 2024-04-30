import correo from "../images/correopesca.jpg";
import pesca from "../images/pesca.png";
import personCandado from "../images/que-es-phishing-pharming.jpg";
import "./appItem.css";

import { useNavigate } from "react-router-dom";


function AppItem(props) {
  return (
    <div className="appItem">
      <span className="appContainer">
        <img src={correo} alt="" />
        <h3>Descubre las formas de estafa</h3>
      </span>

      <span className="appContainer">
        <img src={pesca} alt="" />
        <h3>Evita abrir enlaces sospechosos</h3>
      </span>

      <span className="appContainer">
        <img src={personCandado} alt="" />
        <h3>¿No sabes usar Phishmail?</h3>
      </span>

      <span className="appContainer">
        <p>Conoce más sobre como utilizar esta herramienta</p>
          <button
            className="leemas2">
            Usa Phishmail
          </button>
      </span>
    </div>
  );
}

export { AppItem };
