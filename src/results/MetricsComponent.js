import React from 'react';
import './metrics.css'; // Importar los estilos

const MetricsComponent = ({ dataJson }) => {
  let numPhishingEmails = 0;
  let numValidEmails = 0;

  dataJson.Predictions.map((email) => {
    if (email.Results === 0) {
      numValidEmails++;
    }else{
      numPhishingEmails++;
    }
  });

  const percentageValid = ((numValidEmails / dataJson.TotalEmails) * 100).toFixed(3);
  const percentagePhishing = ((numPhishingEmails / dataJson.TotalEmails) * 100).toFixed(3);

  return (
    <div className="result-card">
      <h3>Resultados del Análisis</h3>
      
      <div className="section">
        <div className="section-title">Resumen Global</div>
        <div className="stat">
          <span className="stat-label">Número de Correos Analizados:</span>
          <span className="stat-value">{dataJson.TotalEmails}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Número de Correos Inválidos:</span>
          <span className="stat-value">{dataJson.InvalidEmails}</span>
        </div>
      </div>
      
      <div className="section">
        <div className="section-title">Correos Seguros</div>
        <div className="stat secure">
          <span className="stat-label">Número De Correos Clasificados Como Seguros:</span>
          <span className="stat-value">{numValidEmails}</span>
        </div>
        <div className="stat secure">
          <span className="stat-label">Porcentaje De Correos Clasificados Como Seguros:</span>
          <span className="stat-value">{percentageValid}%</span>
        </div>
      </div>
      
      <div className="section">
        <div className="section-title">Correos Phishing</div>
        <div className="stat phishing">
          <span className="stat-label">Número De Correos Clasificados Como Phishing:</span>
          <span className="stat-value">{numPhishingEmails}</span>
        </div>
        <div className="stat phishing">
          <span className="stat-label">Porcentaje De Correos Clasificados Como Phishing:</span>
          <span className="stat-value">{percentagePhishing}%</span>
        </div>
      </div>
    </div>
  );
};

export default MetricsComponent;