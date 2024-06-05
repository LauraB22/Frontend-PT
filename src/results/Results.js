import React from "react";
import "./results.css";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const data = location.state?.data;
  let numValidEmails = 0;
  let numPhishingEmails = 0;
  console.log("Datos recibidos en Results:", data);
  console.log("Tipos de datos ", typeof(data));

  let dataJson;
  try {
    dataJson = JSON.parse(data);
  } catch (error) {
    console.error("Error parsing data");
  }

  dataJson.Predictions.map((email) => {
    if (email.Results === 0) {
      numValidEmails++;
    }else{
      numPhishingEmails++;
    }
  });

  return (
    <div className="tablaResponsive">
      <h3>Resultados del Análisis</h3>
      <h4>Numero de Correos Analizados: {dataJson.TotalEmails}</h4>
      <h4>Numero de Correos Inválidos: {dataJson.InvalidEmails}</h4>
      <h4>Numero de posibles Correos Phishing: {numPhishingEmails} - {numPhishingEmails*100/dataJson.TotalEmails}%</h4>
      <h4>Numero de posibles Correos Seguros: {numValidEmails} - {numValidEmails*100/dataJson.TotalEmails}%</h4>
      <table>
        <thead>
          <tr>
            <th></th>
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
            <td>{index+1}</td>
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
