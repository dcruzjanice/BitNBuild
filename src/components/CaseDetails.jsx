// CaseDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CaseDetails = ({ cases }) => {
  const { id } = useParams();
  const selectedCase = cases.find((c) => c.id === parseInt(id, 10));

  if (!selectedCase) {
    return <div>Case not found</div>;
  }

  const { title, status, details } = selectedCase;

  return (
    <div className="container mt-5">
      <h2>Case Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Status: {status}</p>
          <p className="card-text">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
