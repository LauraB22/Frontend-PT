import "./tutorialOutlook.css"
import capturaApp from "../images/capturaApp.png"
import capThunderbird from "../images/capThunderbird.png"
import instalacion1 from "../images/instalacion1.png"
import inicioThunder from "../images/inicioThunder.png"
import inicioApp from "../images/inicioApp.png" 
import extencion from "../images/extenciones.png"
import descargas from "../images/Descargas.png"
import opciones from "../images/opcionesImport.png"
import { Link } from "react-router-dom";


function TutorialOutlook(){
    return(
        <div className="tutorialout">
            <h1> ¿Cómo utilizo phishmail en Outlook? </h1>
            <ol>
                <li>En el navegador de tu preferencia, busca "Thunderbird" y descárgalo para tu sistema operativo
                    <img src={capThunderbird} className="capturaAppOut" alt="" />
                </li>

                <li>Espera a que se descargue e instálalo. Elige la instalación estándar y da siguiente
                    <img src={instalacion1} className="capturaAppOut" alt="" />
                </li>

                <li>Cuando termine de instalarse, ejecútalo e introduce tu nombre, correo electronico y contraseña
                    <img src={inicioThunder} className="capturaAppOut" alt=""/>
                </li>

                <li>Da clic en las tres lí  neas ubicadas en la esquina superior derecha, ahi da clic a complementos y temas
                    <img src={inicioApp} className="capturaAppOut" alt=""/>
                </li>

                <li>En el apartado de extensiones busca "ImportExportTools NG" y habilitala
                    <img src={extencion} className="capturaAppOut" alt=""/>
                </li>

                <li>En la esquina superior derecha despliega el menú de la extensión y da clic en opciones, ahí habilita la 
                    casilla de Utilizar la extension 
                    <img src={opciones} className="capturaAppOut" alt="" />
                </li>

                <li>Crea una carpeta donde vengan todos los archivos que quieras analizar. Cuando la tengas, da clic derecho al 
                    nombre de esa carpeta y descárgalo en formato .mbox en la carpeta que desees.
                    <img src={descargas} className="capturaAppOut" alt=""/>
                </li>

                <li> Abre phishmail y sube el archivo que descargaste en el botón “Usar phishing"
                    <img src={capturaApp} className="capturaAppOut" alt=" " />
                </li>
                <li> Y listo, ya puedes utilizar phishmail 
                    <Link to="/UploadMedia" className="linkdecor">
                        <button 
                        className="usaphishmail">
                        Usa Phishmail
                        </button>
                    </Link>
                </li>

            </ol>
        </div>
    );
}

export {TutorialOutlook}