// NavigateHeader.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavigateHeader.css';

const NavigateHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <header className="navigate-header">
      <div className="header-container">
        <div className="title-section">
          <h1 className="page-title">{title}</h1>
          <div className="title-underline"></div>
        </div>
        <div className="navigation-section">
          <button className="back-button" onClick={() => navigate('/')}>
            <span className="back-arrow">←</span>
            <span className="back-text">Back to Home</span>
          </button>
        </div>
      </div>
      <div className="header-glow"></div>
    </header>
  );
};

export default NavigateHeader;