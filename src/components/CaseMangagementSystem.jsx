// CaseManagementSystem.jsx
import React, { useState } from 'react';
import CaseCard from './CaseCard';

const CaseManagementSystem = () => {
  const [cases, setCases] = useState([
    { id: 1, title: 'Bribery in Department', status: 'Open', details: 'Took place on 15th feb at 12:25pm' },
    { id: 2, title: 'Embezzlement in ABC Company', status: 'Closed', details: 'The following incident took place in ABC Company ' },
    { id: 3, title: 'Extortion', status: 'Open', details: 'The evidence has been looked upon and respective action will be taken ' },
    { id: 4, title: 'Nepotism', status: 'Open', details: 'Took place on 5th Feb 2024' },
    { id: 5, title: 'Bribery in tech department', status: 'Closed', details: 'Took place on 25th dec 2023' },
    { id: 6, title: 'Embezzlement', status: 'Closed', details: 'this took place in Bandra' },
    { id: 7, title: 'Bribery', status: 'Closed', details: 'The person has been taken into account' },
    { id: 8, title: 'Embezzlement in ABC Company', status: 'Closed', details: 'Details about the case...' },
    { id: 9, title: 'Embezzlement in XYZ Company', status: 'Open', details: 'Took place on 15th feb at 12:25pm in Andheri' },

  ]);

  return (
    <div className="container mt-5">
      <h2>Case Management System</h2>
      <div className="row">
        {cases.map((c) => (
          <div key={c.id} className="col-md-4 mb-4">
            <CaseCard caseData={c} />
          </div>
        ))}
      </div>
      <br/>
      <br/><br/><br/>
    </div>
  );
};

export default CaseManagementSystem;
