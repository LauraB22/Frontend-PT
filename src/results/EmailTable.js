import React, { useState } from 'react';
import EmailRow from './EmailRow';

const EmailTable = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Dirección del remitente</th>
            <th>Arboles seguros</th>
            <th>Arboles phishing</th>
            <th>Predicción</th>
          </tr>
        </thead>
        <tbody>
          {data.Predictions.map((email, index) => (
            <EmailRow key={index} index={index + 1} email={email} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailTable;