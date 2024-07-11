import React, { useState } from 'react';
import FeaturesTable from './FeaturesTable';

const EmailRow = ({ index, email }) => {
    const [showFeatures, setShowFeatures] = useState(false);

  return (
    <>
      <tr className={email.Results === 0 ? 'email-row secure' : 'email-row phishing'} onClick={() => setShowFeatures(!showFeatures)}>
        <td>{index}</td>
        <td>{email.SenderAddress}</td>
        <td>{email["Non-PhishingPureLeaves"]}</td>
        <td>{email["PhishingPureLeaves"]}</td>
        <td>{email.Results === 0 ? 'Posible correo seguro' : 'Posible phishing'}</td>
      </tr>
      {showFeatures && (
        <tr>
          <td colSpan="5">
            <FeaturesTable features={email.AllFeatures} />
          </td>
        </tr>
      )}
    </>
  );
};

export default EmailRow;