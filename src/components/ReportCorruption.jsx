import React, { useState } from 'react';

const ReportCorruptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    location: '',
    incidentTime: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission, such as sending data to a server or performing further actions.
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      description: '',
      location: '',
      incidentTime: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2>Report Corruption</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name (Optional)</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your Email (Optional)</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description of Corruption</label>
          <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleChange} rows="4" required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location of Incident</label>
          <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="incidentTime" className="form-label">Time of Incident</label>
          <input type="time" className="form-control" id="incidentTime" name="incidentTime" value={formData.incidentTime} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit Report</button>
      </form>
      <br/> <br/>
    </div>
  );
};

export default ReportCorruptionForm;
