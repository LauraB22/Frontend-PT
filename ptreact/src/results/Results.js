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
    <div>
      <h3>Resultados del Análisis</h3>
      <table>
        <thead>
            <tr>
                <th>Asunto del correo electrónico</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            {Object.entries(emails).map(([key,value]) => (
                <tr key={key}>
                    <td>{value["Sender Address"]}</td>
                    <td>{value.result == 1 ? 'Correo seguro' : 'Posible phishing'}</td>
                </tr>
            ))}
        </tbody>
      </table>
      {/*<p>{resultados}</p>*/ }
    </div>
  );

}

export {Results}