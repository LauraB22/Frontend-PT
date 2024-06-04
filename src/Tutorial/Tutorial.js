import "./tutorial.css"
import gestorGoogle  from "../images/gestoresGoogle.png"
import gestorOutlook from "../images/gestoresOutlook.png"
import ejemplo from "../images/ejemploCorreo.png"
import cuenta from "../images/cuenta.png"
import gestionCuenta from "../images/gestionCuenta.png"
import takeout from "../images/takeoutGoogle.png"
import capturaApp from "../images/capturaApp.png"
import contenidoCorreo from "../images/contenidoCorreo.png"
import exportacion from "../images/exportacion.png"
import descargaArch from "../images/descargaArch.png"
import { Link } from "react-router-dom";

function Tutorial(){
    return(
        <div className="tutorial">
            <h1> ¿Cómo utilizo phishmail? </h1>
            <ol>
                <li> Para poder utilizar nuestra aplicación debes de ir a tu gestor de correos de tu preferencia.
                    Puede ser cualquier correo electrónico de cualquier dispositivo
                    <span className="gestor">
                        <img src={gestorGoogle}  alt=" "/>
                        <img src={gestorOutlook} alt=""/>
                    </span>
                    Para el caso de Gmail sigue los siguientes pasos
                    <Link to ="/TutorialOutlook" className="linkdecor">
                        <span>
                            <p>Si deseas hacerlo en Outlook, da clic aquí </p>
                        </span>
                    </Link>
                </li>
                <li> Selecciona los correos que quieras descargar y envialos a una carpeta nueva 
                    <img src={ejemplo} className="capturas" alt=" " />
                </li>

                <li> Cuando termines de seleccionar los correos, ve a tu perfil de Google y da clic en Gestionar tu cuenta  
                    <img src={cuenta} className="capturas" alt=" " />
                    Aparecerá el apartado de "Privacidad y personalización", despues de darle clic a ese apartado, desplaza la 
                    página hasta encontrar "Descargar o eliminar tus datos" y da clic a descargar tus datos como lo muestra la 
                    imagen 
                    <img src={gestionCuenta} className="capturas" alt="" />
                    
                </li>  

                <li> Desplaza la página hasta encontrar "Crear una exportación", da clic en desmarcar todo, busca Correo y marca 
                    la casilla como en la imagen
                    <img src={takeout} className="capturas" alt="" />
                    Da clic en "Se han incluido todos los datos" y selecciona el nombre de la etiqueta donde guardaste tus correos
                    y acepta los cambios
                    <img src={contenidoCorreo} className="capturas" alt="" />
                    Desplaza la página hasta el final y continua al siguiente paso
                </li>          

                <li> Elige como quieres que se descargue el archivo y con que frecuencia. Despues crea la exportación con el botón
                    al final de la página
                    <img src={exportacion} className="capturas" alt=""/>
                     
                </li>

                <li>Espera a que llegue la notificación de que ya puedes descargar tus correos 
                    <img src={descargaArch} className="capturas" alt="" />
                </li>

                <li> Abre phishmail y sube el archivo que descargaste en el botón “Usar phishing"
                    <img src={capturaApp} className="capturaApp" alt=" " />
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

export {Tutorial}