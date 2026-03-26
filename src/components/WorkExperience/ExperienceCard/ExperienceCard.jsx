import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  return (
    <div className="exp-card">
      <div className="exp-header">
        <div className="exp-dot" />
        <div>
          <h3 className="exp-title">{details.title}</h3>
          <span className="exp-date">{details.date}</span>
        </div>
      </div>
      <ul className="exp-list">
        {details.responsibilities.map((r, i) => (
          <li key={i}><span className="exp-bullet">▸</span>{r}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
