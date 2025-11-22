import React, { useState } from 'react';
import './ContactMe.css';
import NavigateHeader from '../compo/NavigateHeader';

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>aamit.wincent@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+91 7464060122</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Bangalore - (India)</p>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-link"><i className="fab fa-linkedin">LinkedIn</i></a>
            <a href="#" className="social-link"><i className="fab fa-github">GitHub</i></a>
            {/* <a href="#" className="social-link"><i className="fab fa-twitter">Twitter</i></a> */}
           
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
      <NavigateHeader />
    </div>
  );
}

export default ContactMe;