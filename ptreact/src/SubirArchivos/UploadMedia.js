import subir from "../images/subir.png";
import './uploadMedia.css'


function UploadMedia() {
  return (
    <div className="uploadMedia">
        <h1>¿Tienes sospecha de que el correo electrónico es phishing?</h1>
        <h3>Sube tus correos a analizar en el formato .mbox</h3>
        <img src={subir} alt="" />
        <button className="buttonexaminar">Examinar</button>
        <p> O arrastra archivos aquí</p>
    </div>
  );
}

export { UploadMedia };
