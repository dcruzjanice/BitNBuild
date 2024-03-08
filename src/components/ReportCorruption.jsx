import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ReportCorruptionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    location: '',
    incidentTime: '',
  });

  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSpeechRecognition = () => {
    SpeechRecognition.startListening();
  };

  const stopSpeechRecognition = () => {
    SpeechRecognition.stopListening();
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
    resetTranscript(); // Reset transcript when manually typing
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
      <h2 className="text-center mb-4">Report Corruption</h2>
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
          <label htmlFor="description" className="form-label">
            Description of Corruption
            <button type="button" onClick={handleSpeechRecognition} className="btn btn-sm btn-outline-primary mx-2">
              Start Speech
            </button>
            <button type="button" onClick={stopSpeechRecognition} className="btn btn-sm btn-outline-danger">
              Stop Speech
            </button>
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description || transcript}
            onChange={handleDescriptionChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location of Incident</label>
          <input type="text" className="form-control" id="location" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="incidentTime" className="form-label">Time of Incident</label>
          <input type="time" className="form-control" id="incidentTime" name="incidentTime" value={formData.incidentTime} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="audio" className="form-label">Upload Audio (Optional)</label>
          <input type="file" className="form-control" id="audio" name="audio" onChange={handleChange} accept="audio/*" />
        </div>
        <div className="mb-3">
          <label htmlFor="video" className="form-label">Upload Video</label>
          <input type="file" className="form-control" id="video" name="video" onChange={handleChange} accept="video/*" />
        </div>
        <div className="mb-3">
          <label htmlFor="photo" className="form-label">Upload Photo</label>
          <input type="file" className="form-control" id="photo" name="photo" onChange={handleChange} accept="image/*" />
        </div>
        <button type="submit" className="btn btn-primary">Submit Report</button>
      </form>
      <br/><br/><br/>
    </div>
  );
};

export default ReportCorruptionForm;
