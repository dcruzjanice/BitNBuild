import React from 'react';
import ab2 from '../images/a2.jpg';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="about-us-content">
            <h2 className="about-us-title mb-4">About Us</h2>
            <p className="about-us-description">
              CorruptionWatch is dedicated to promoting transparency, accountability, and the fight against corruption.
              Our mission is to empower individuals, communities, and organizations to combat corruption at all levels.
            </p>
            <p className="about-us-description">
              With a commitment to fostering a culture of integrity, we provide tools, resources, and a platform for reporting
              and tracking incidents of corruption. Through awareness, education, and advocacy, we strive to create a world where
              corruption has no place, and individuals can live in societies that uphold ethical values.
            </p>
            <h4 className="about-us-subtitle mt-4">Our Vision</h4>
            <p className="about-us-description">
              To build a corruption-free society where trust, justice, and fairness prevail, leading to sustainable development
              and improved quality of life for all.
            </p>
            <h4 className="about-us-subtitle mt-4">Core Values</h4>
            <ul className="about-us-values">
              <li>Transparency</li>
              <li>Integrity</li>
              <li>Accountability</li>
              <li>Justice</li>
              <li>Equality</li>
            </ul>
            <p className="about-us-join mt-4">
              Join us in our mission to eradicate corruption and create a better future for generations to come.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <img src={ab2} className="img-fluid rounded" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
