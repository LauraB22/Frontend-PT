import "./tutorialGoogle.css"
import ejemplo from "../images/ejemploCorreo.png";
import cuenta from "../images/cuenta.png";
import gestionCuenta from "../images/gestionCuenta.png";
import takeout from "../images/takeoutGoogle.png";
import capturaApp from "../images/capturaApp.png";
import contenidoCorreo from "../images/contenidoCorreo.png";
import exportacion from "../images/exportacion.png";
import descargaArch from "../images/descargaArch.png";

import { Link } from "react-router-dom";

function TutorialGoogle() {
  return (
    <div className="tutorialGoo">
      <h1> ¿Cómo utilizo phishmail en Google? </h1>
      <ol>
        <li>
          Selecciona los correos que quieras descargar y envialos a una carpeta
          nueva
          <img src={ejemplo} className="capturaAppGoo" alt=" " />
        </li>

        <li>
          Cuando termines de seleccionar los correos, ve a tu perfil de Google y
          da clic en Gestionar tu cuenta
          <img src={cuenta} className="capturaAppGoo" alt=" " />
          Aparecerá el apartado de "Privacidad y personalización", despues de
          darle clic a ese apartado, desplaza la página hasta encontrar
          "Descargar o eliminar tus datos" y da clic a descargar tus datos como
          lo muestra la imagen
          <img src={gestionCuenta} className="capturaAppGoo" alt="" />
        </li>

        <li>
          Desplaza la página hasta encontrar "Crear una exportación", da clic en
          desmarcar todo, busca Correo y marca la casilla como en la imagen
          <img src={takeout} className="capturaAppGoo" alt="" />
          Da clic en "Se han incluido todos los datos" y selecciona el nombre de
          la etiqueta donde guardaste tus correos y acepta los cambios
          <img src={contenidoCorreo} className="capturaAppGoo" alt="" />
          Desplaza la página hasta el final y continua al siguiente paso
        </li>

        <li>
          Elige como quieres que se descargue el archivo y con que frecuencia.
          Despues crea la exportación con el botón al final de la página
          <img src={exportacion} className="capturaAppGoo" alt="" />
        </li>

        <li>
          Espera a que llegue la notificación de que ya puedes descargar tus
          correos
          <img src={descargaArch} className="capturaAppGoo" alt="" />
        </li>

        <li>
          Abre phishmail y sube el archivo que descargaste en el botón “Usar
          phishing"
          <img src={capturaApp} className="capturaAppGoo" alt=" " />
        </li>
        <li>
          Y listo, ya puedes utilizar phishmail
          <Link to="/UploadMedia" className="linkdecor">
            <button className="usaphishmail">Usa Phishmail</button>
          </Link>
        </li>
      </ol>
    </div>
  );
}

export { TutorialGoogle };
