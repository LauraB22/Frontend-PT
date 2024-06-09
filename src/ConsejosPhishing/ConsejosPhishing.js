import "./consejosPhishing.css";
import dominio from "../images/dominioErroneo.png";
import adjuntos from "../images/adjuntos.png";
import infoPersonal from "../images/InfoPersonal.png";
import incoherencia from "../images/incoherencia.png";

function ConsejosPhishing(){

    return(
        <div className="ConsejosContainer">
            <h1> Consejos para evitar Phishing </h1>
            <ol>
                <li>
                    <h4>"Cambio" La dirección de correo electrónico no coincide con el dominio de la empresa</h4>
                    <p> Los correos fraudulentos suelen enviarse desde direcciones que no tienen relación 
                        con la empresa que intentan imitar. Por ejemplo, un correo de Mercado Libre legítimo 
                        tendrá un dominio como mercadolibre.com o mercadolibre.com.ar, mientras que un correo 
                        falso puede provenir de dominios como wwwmercadolibre.com o webmercadoibre.com.</p>
                    <img src={dominio} className="imagePhishing" alt=""/>
                </li>

                <li>
                    <h4>Errores de escritura o falta de coherencia gramatical</h4>
                    <p>Correos con numerosos errores ortográficos y gramaticales son sospechosos. Los estafadores 
                        a menudo usan traducciones automáticas que no son precisas, lo cual puede ser un indicio 
                        de que el correo es falso.</p>
                    <img src={incoherencia} className="imagePhishing" alt=""/>
                </li>

                <li>
                    <h4>El correo solicita información personal</h4>
                    <p>Los correos electrónicos fraudulentos suelen pedir información personal o de pago, como 
                        la verificación de una cuenta o la actualización de datos. Las empresas legítimas no solicitan 
                        este tipo de información por correo electrónico.</p>
                    <img src={infoPersonal} className="imagePhishing" alt=""/>
                </li>

                <li>
                    <h4>Adjuntos en los correos electrónicos</h4>
                    <p>Los correos fraudulentos frecuentemente incluyen archivos adjuntos para evadir los filtros de 
                        spam y, en muchos casos, estos archivos contienen malware. Suelen disfrazarse como documentos 
                        de Word o PDF para engañar al destinatario y lograr que los abra.</p>
                    <img src={adjuntos} className="imagePhishing" alt="" />
                </li>
            </ol>
        </div>
    );
}

export {ConsejosPhishing};