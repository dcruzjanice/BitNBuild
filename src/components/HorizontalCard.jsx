// HorizontalCard.js

import React from 'react';

const HorizontalCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} className="img-fluid rounded-start" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {description}
                </a>
              ) : (
                description
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
