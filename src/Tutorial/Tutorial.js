import "./tutorial.css";
import gestorGoogle from "../Lotties/Gmail.json";
import gestorOutlook from "../Lotties/microsoft-outlook4.json";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

function Tutorial() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gestorGoogle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptionsOutlook = {
    loop: true,
    autoplay: true,
    animationData: gestorOutlook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="tutorial">
      <h1> ¿Cómo utilizo phishmail? </h1>
        <p>Para poder utilizar nuestra aplicación debes de ir al gestor de
          correos de tu preferencia. Puede ser cualquier correo electrónico de
          cualquier dispositivo. Da clic en el icono del gestor del que quieras
          saber como descargar tus correos</p>
          <span className="gestor">
            <Link to="/TutorialGoogle" className="linkdecor">
              <span className="contenedorGestor">
                <Lottie 
                    options={defaultOptions} 
                    height={200} 
                    width={200} />
                Google
              </span>
            </Link>

            <Link to="/TutorialOutlook" className="linkdecor">
              <span className="contenedorGestor">
                <Lottie
                  options={defaultOptionsOutlook}
                  height={200}
                  width={200}/>
                Outlook
              </span>
            </Link>
          </span>

    </div>
  );
}

export { Tutorial };
