import React from 'react';
import contactImage from '../images/s2.jpg'; // Replace with the actual path to your image

const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns, please feel free to reach out to us. We would love to hear from you!
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Your Phone Number
              </label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
        <br/><br/>
        <div className=" col-md-6">
          <img src={contactImage} alt="Contact" className="img-fluid" />
        </div>
      </div>
      <br/><br/>
    </div>
  );
};

export default Contact;
