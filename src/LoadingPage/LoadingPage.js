import React from "react";
import "./loadingPage.css"; 
import gif from "../images/cute-loading.gif"
import Lottie from 'react-lottie';
import animationData from "../Lotties/Dots.json";

function LoadingPage(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <div className="loading-container">

            <Lottie 
            options={defaultOptions}
            height={200}
            width={200}
            />
            <p> Cargando... Por favor espera.</p>
        </div>
        
    );
}

export {LoadingPage};
