import React from 'react';
import {contactInfo} from '../medaData/ProjectMedaData'; // Ensure MetaData exports contactInfo
import './Footer.css'; // Add some styling

function Footer() {
  return (
    <div className="footer-container">
      <h3> Contact Me </h3>
      <ul className="contact-list">
        {contactInfo.map((info, index) => (
          <li key={index}>
            <strong>{info.type}: </strong>
            <a href={info.link} target="_blank" rel="noopener noreferrer">
              {info.value}
            </a>
          </li>
        ))}
      </ul>
      <h4>All rights reserved @ Araya Coding #Since@2018</h4>
    </div>
  );
}

export default Footer;
