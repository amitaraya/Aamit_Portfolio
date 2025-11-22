import React, { useState } from "react";
import "./TimeLine.css";
import Button from "../compo/Button";

const Timeline = ({ type, timelineData }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className={`timeline-container ${type}`}>
      {/* Section Title in a Box */}
      <div className="title-box">
        <h2 className="section-title">{timelineData.timelineName}</h2>
      </div>

      {/* Render grid for study, else keep previous flex/column */}
      <div className={`timeline${type === "study" ? " study-grid" : ""}`}>
        {timelineData.items.map((item, index) => (
          <div key={index} className={`timeline-item${type === "work" ? (index % 2 === 0 ? " left" : " right") : ""}`}>
            <div className="timeline-content">
              <div className="timeline-con">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-item-title">{item.title}</h3>
              </div>
              <div className="timeline-icon">{item.icon}</div>
              <p className="timeline-description">{item.description}</p>
              {item.project && (
                <p className="timeline-description">
                  <strong>Project: </strong> {item.project}
                </p>
              )}
              {item.projectDescription && (
                <p className="timeline-description">
                  <strong>About Project: </strong> {item.projectDescription}
                </p>
              )}
              {item.roles && item.roles.length > 0 && (
                <div>
                  <strong>My Contributions:</strong>
                  <RolesList roles={item.roles} />
                </div>
              )}
              <Button buttonName="View More..." onClick={() => setSelectedItem(item)} />
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setSelectedItem(null)}>&times;</span>
            <h2>{selectedItem.title}</h2>
            <p><strong>Year:</strong> {selectedItem.year}</p>
            <p>{selectedItem.description}</p>
            {selectedItem.project && <p><strong>Project:</strong> {selectedItem.project}</p>}
            {selectedItem.projectDescription && <p>{selectedItem.projectDescription}</p>}
            {selectedItem.roles && selectedItem.roles.length > 0 && (
              <div>
                <strong>My Contributions:</strong>
                <RolesList roles={selectedItem.roles} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const RolesList = ({ roles = [] }) => {
  if (!Array.isArray(roles) || roles.length === 0) return null;
  return (
    <ul className="timeline-roles">
      {roles.map((role, i) => (
        <li key={i}>{role}</li>
      ))}
    </ul>
  );
};

export default Timeline;
