import "./formasEstafa.css";
import Correo from "../images/CorreoPhishing.png"
import santanderMail from "../images/emailsantander.png"
import SMSPhishing from "../images/smsPhishing.jpeg"
import vishinig from "../images/Vishing.jpg"
import phishingMarca from "../images/phishingMarca.jpg"

function FormasEstafa(){
    return(
        <div className="formasestafa">
            <h1>Principales formas de estafa</h1>
            <p>El phishing es una técnica de fraude cibernético utilizada por los delincuentes para engañar
                a las personas y obtener información confidencial de forma fraudulenta. Las tácticas de phishing
                pueden variar ampliamente, pero aquí están algunas de las más comunes:</p>
            <ol>
                <li>
                    <h4>Emails de phishing</h4>
                    <p>Los atacantes envían correos electrónicos que parecen ser de fuentes legítimas, 
                        como bancos, plataformas de redes sociales o servicios de pago. Estos correos suelen solicitar
                         a los usuarios que verifiquen información personal, como contraseñas o números de tarjetas de crédito, 
                         a través de un enlace que dirige a una página web falsa.</p>
                    <img src={Correo} className="ejemplos" alt=" "/>
                </li>

                <li>
                    <h4>Spear Phishing</h4>
                    <p>Esta forma de phishing es más dirigida. Los atacantes personalizan sus mensajes usando 
                        información específica sobre el destinatario para hacer el engaño más creíble. Esto podría incluir 
                        el nombre del destinatario, su puesto de trabajo, o detalles personales, lo que incrementa las 
                        posibilidades de que la víctima caiga en la trampa.</p>
                    <img src={santanderMail} className="ejemplos2" alt=""/>
                </li>

                <li>
                    <h4>Phishing por SMS (Smishing)</h4>
                    <p>Similar al phishing por email, pero los mensajes son enviados a través de SMS. El mensaje puede 
                        pedirle al destinatario que responda con información personal o que visite un sitio web malicioso 
                        a través de un enlace corto que a menudo es difícil de verificar.</p>
                    <img src={SMSPhishing} className="ejemplos3" alt=""/>
                </li>

                <li>
                    <h4>Phishing por voz (Vishing)</h4>
                    <p>Aquí, el ataque se realiza a través de una llamada telefónica. El atacante puede fingir ser un representante 
                    de servicio al cliente y tratar de engañar a las personas para que revelen información personal o realicen 
                    transferencias de dinero.</p>
                    <img src={vishinig} className="ejemplos" alt=""/>

                </li>

                <li>
                    <h4>Phishing de marca (Brandjacking)</h4>
                    <p>Este tipo implica la creación de sitios web, correos electrónicos o páginas de redes sociales que
                         imitan las de marcas conocidas. Los delincuentes utilizan estos sitios para engañar a las personas
                          para que proporcionen datos confidenciales.</p>
                    <img src={phishingMarca} className="ejemplos3" alt=""/>
                </li>
            </ol>
        </div>
    );
}

export {FormasEstafa}