import React from "react";
import "./results.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import EmailTable from './EmailTable';
import MetricsComponent from './MetricsComponent';

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

  const percentageValid = parseFloat((numValidEmails*100/dataJson.TotalEmails).toFixed(3));
  const percentagePhishing = parseFloat((numPhishingEmails*100/dataJson.TotalEmails).toFixed(3));

  return (
    <div className="tablaResponsive">
      {/* <h3 className="h3">Resultados del Análisis</h3>
      <h4>Número de Correos Analizados: {dataJson.TotalEmails}</h4>
      <h4>Número de Correos Inválidos: {dataJson.InvalidEmails}</h4>
      <h4 className="secure">Número de Posibles Correos Seguros: {numValidEmails}</h4>
      <h4 className="secure">Porcentaje de Posibles Correos Seguros: {percentageValid}%</h4>
      <h4 className="phishing">Número de Posibles Correos Phishing: {numPhishingEmails}</h4>
      <h4 className="phishing">Porcentaje de Posibles Correos Phishing: {percentagePhishing}%</h4> */}
      <div>
        <MetricsComponent dataJson={dataJson} />
      </div>

      <div className="table-wrap">
        {/* <table>
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
        </table> */}
        <div>
            <EmailTable data={dataJson} />
        </div>
        
      </div>
      <div className="tablas">
      <Link to="/UploadMedia" className="linkdecor1">
            <button className="buttonRegresa">Sube más archivos</button>
      </Link>
      </div>
      
    </div>
  );
}

export { Results };
