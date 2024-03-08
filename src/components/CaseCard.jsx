// CaseCard.jsx
import React, { useState } from 'react';

const CaseCard = ({ caseData }) => {
  const { id, title, status, details } = caseData;
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Status: {status}</p>
        {showDetails && <p className="card-text">{details}</p>}
        <button onClick={toggleDetails} className="btn btn-primary">
          {showDetails ? 'Hide Details' : 'View Details'}
        </button>
      </div>
    </div>
  );
};

export default CaseCard;
