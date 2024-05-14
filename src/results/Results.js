import React from "react";
import "./results.css";
import { UploadMedia } from "../SubirArchivos/UploadMedia";
import { useLocation } from "react-router-dom";

function Results() {
  const location = useLocation();
  const resultados = location.state?.data;

  let emails;

    try {
        emails = JSON.parse(resultados);
    } catch (error) {
        console.error('Error parsing JSON:', error);
        return <p>Error al parsear los datos.</p>;
    }

  return (
    <div className="tablaResponsive">
      <h3>Resultados del Análisis</h3>
      <table>
        <thead>
            <tr>
                <th>Dirección de correo electrónico del remitente </th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(emails).map(([key,value]) => (
                <tr key={key} 
                  className={value.Results == 1 ? 'phishing' : 'secure'}>
                  <td>{value["Sender Address"]}</td>
                  <td>{value.Results == 1 ? 'Posible phishing' : 'Correo seguro'}</td>
                </tr>
            ))}
        </tbody>
      </table>
      {/*<p>{resultados}</p>*/ }
    </div>
  );

}

export {Results}