import React from 'react';
import { featureNamesMap } from './mapeo';

const FeaturesTable = ({ features }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Característica</th>
          <th>Coincidencias</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(features).map(([key, value]) => (
          <tr key={key}>
            <td>{featureNamesMap[key] || key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FeaturesTable;