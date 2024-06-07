import "./error.css"
import Gatito from "../Lotties/GatitoAnimation.json"
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

function Error() {
  const defaultOpionsCat = {
    loop: true,
    autoplay: true,
    animationData: Gatito,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="containerError">
      <Lottie 
        options={defaultOpionsCat} 
        height={400} 
        width={400} />

        <p>Oops!, creo que hay un error en el procesamiento. Intenta de nuevo</p>

        <Link to="/UploadMedia" className="linkdecor">
            <button className="buttonError">Regresa a subir tus archivos </button>
        </Link>
    </div>
  );
}

export { Error };
