// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // Optional: for card-specific styling

function ProjectCard({ project, image, title, year, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h2 className="project-title">{project}</h2>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <p className="project-description">{title}</p>
        <p className="project-duration">{year}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
