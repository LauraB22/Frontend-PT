import correo from "../images/correopesca.jpg";
import pesca from "../images/pesca.png";
import personCandado from "../images/que-es-phishing-pharming.jpg";
import "./appItem.css";
import { Link } from "react-router-dom";
import { UploadMedia } from "../SubirArchivos/UploadMedia.js";
import React, { useState, useEffect } from "react";

function AppItem(props) {
  // const [data, setData] = useState("");
  // const [file, setFile] = useState(null);

  // useEffect(() => {
  //   if (file !== null) {
  //     fetchData();
  //   }
  // }, [file]);

  // const onFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const fetchData = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("mbox_file", file);

  //     const response = await fetch(
  //       "http://phishing-prediction.us-east-2.elasticbeanstalk.com/upload-mbox",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const result = await response.text();
  //     console.log("Data fetched:", result);
  //     setData(result);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div className="appItem">
      <span className="appContainer">
        <img src={correo} alt="" />
        <h3>Descubre las formas de estafa</h3>
      </span>

      <span className="appContainer">
        <img src={pesca} alt="" />
        <h3>Evita abrir enlaces sospechosos</h3>
      </span>

      <span className="appContainer">
        <img src={personCandado} alt="" />
        <h3>¿No sabes usar Phishmail?</h3>
      </span>

      <span className="appContainer">
        <p>Conoce más sobre como utilizar esta herramienta</p>
          <Link to="UploadMedia" className="linkdecor">
            <button 
              className="leemas2">
              Usa Phishmail
            </button>
          </Link>
          
      </span>

      {/* 
      <div>
        <h4>Sube tu archivo mbox</h4>
        <input type="file" onChange={onFileChange} />
        <p>{data}</p> 
      </div>
      */}
    </div>
  );
}

export { AppItem };
