import React, { useState } from 'react';
import './MyWork.css';
import ProjectCard from '../compo/ProjectCard';
import NavigateHeader from '../compo/NavigateHeader';
import { myWorkData } from "../medaData/MyWorkData";

const MyWork = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (item) => {
    setSelectedProject(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // allow animation to finish
  };

  return (
    <div className="my-work-container">
      <NavigateHeader title="My Projects" />

      <div className="mywork-column-container">
        {myWorkData.map((item, index) => (
          <ProjectCard
            key={index}
            project={item.key}
            title={item.key}
            image={item.image}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>

      {selectedProject && (
        <div className={`modal-fullscreen ${modalOpen ? 'show' : 'hide'}`}>
          <div className="modal-content">
            <div className="modal-header">
              <button className="close-button" onClick={closeModal}>×</button>
              <h2>{selectedProject.key}</h2>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.key} />
              </div>
              <div className="modal-details">
                {selectedProject.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
