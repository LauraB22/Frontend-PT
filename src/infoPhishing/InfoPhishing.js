import "./infoPhishing.css"
import ReactPlayer from "react-player";
import React from "react";

function InfoPhishing() {
  const vidurl = "https://www.youtube.com/watch?v=jlmBCYm6IZk";
  return (
    <div className="containerInfo">
      <span className="textoContainer">
        <h2> Aprende más sobre el phishing</h2>
        <p>El phishing se puede describir como el procedimiento mediante el cual alguien es contactado por correo electrónico o 
        teléfono por una persona que se hace pasar por una institución legítima, con el fin de obtener información privada, 
        como datos bancarios, contraseñas o información personal. 
        Esta información, obtenida de manera fraudulenta, es luego utilizada para acceder a las cuentas personales de las víctimas,
        provocando pérdidas económicas o usurpación de identidad. </p>
      </span>
      <ReactPlayer className="containerVideo"
        url={vidurl} 
        playing={true}
        controls={true}
        volume={0.5} 
        />
      
    </div>
  );
}

export { InfoPhishing };
