import "./tutorial.css"
import gestores from "../images/gestores.png"
import ejemplo from "../images/ejemploCorreo.png"
import blocNotas from "../images/textPlano.png"
import capturaApp from "../images/capturaApp.png"
import { Link } from "react-router-dom";

function Tutorial(){
    return(
        <div className="tutorial">
            <h1> ¿Cómo utilizo phishmail? </h1>
            <ol>
                <li> Para poder utilizar nuestra aplicación debes de ir a tu gestor de correos de tu preferencia.
                    Puede ser cualquier correo electronico de cualquier dispositivo
                    <img src={gestores} className="gestor" alt=" "/>
                </li>
                <li> Selecciona el correo que quieras inspeccionar y descargalo en formato .mbox
                    En caso de ser gmail, da clic a los tres puntos del lado derecho en el correo y presiona descargar
                    <img src={ejemplo} className="capturas" alt=" " />
                </li>

                <li> Despues de la descarga, abre el archivo en el bloc de notas y veras como el correo es ahora texto plano 
                    <img src={blocNotas} className="capturas" alt=" " />
                    Este archivo es el que la aplicación va a inspeccionar y sacar la probabilidad de que sea o no phishing
                </li>            

                <li> Abre phishmail y sube el archivo que descargaste en el botón “Usar phishing"
                    <img src={capturaApp} className="capturaApp" alt=" " />
                </li>
                <li> Y listo, ya estas listo para utilizar phishmail 
                    <Link to="UploadMedia" className="linkdecor">
                        <button 
                        className="leemas2">
                        Usa Phishmail
                        </button>
                    </Link>
                </li>

            </ol>
        </div>
    );
}

export {Tutorial}