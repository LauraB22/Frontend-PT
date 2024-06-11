import "./error404.css"
import Error from "../Lotties/Error404.json"
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

function Error404() {
  const defaultOpionsAvo = {
    loop: true,
    autoplay: true,
    animationData: Error,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="containerError404">
      <Lottie 
        options={defaultOpionsAvo} 
        height={400} 
        width={400} />

        <p>Oops!, la página que estas buscando no ha sido encontrada</p>
    </div>
  );
}

export { Error404 };
