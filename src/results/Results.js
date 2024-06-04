import React from "react";
import "./results.css";
import { UploadMedia } from "../SubirArchivos/UploadMedia";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const data = location.state?.data;
  console.log("Datos recibidos en Results:", data);
  console.log("Tipos de datos ", typeof(data));

  let dataJson;
  try {
    dataJson = JSON.parse(data);
  } catch (error) {
    console.error("Error parsing data");
  }

  return (
    <div className="tablaResponsive">
      <h3>Resultados del Análisis</h3>
      <h4>Numero de Correos Analizados: {dataJson.TotalEmails}</h4>
      <table>
        <thead>
          <tr>
            <th>Dirección de correo electrónico del remitente</th>
            <th>Número de URLs en correo</th>
            <th>Número de puntos en URLs</th>
            <th>Número de carácteres especiales en URLs</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          
           {dataJson.Predictions.map((email, index) => (
            <tr key={index} className={email.Results === 0 ? 'secure' : 'phishing'}>
              <td>{email["Sender Address"]}</td>
              <td>{email.NoOfURL}</td>
              <td>{email.NoDotsUrls}</td>
              <td>{email.NoSpecialChar}</td>
              <td>{email.Results === 0 ? 'Correo seguro' : 'Posible phishing'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export { Results };
