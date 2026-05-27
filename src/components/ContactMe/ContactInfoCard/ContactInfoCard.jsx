import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, linkUrl }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-icon-wrap">
        <img src={iconUrl} alt="" />
      </div>
      {/* Hardcoding the link tag temporarily to force a change */}
      <a href={linkUrl} target="_blank" rel="noreferrer" className="contact-link">
        {text}
      </a>
    </div>
  );
};

export default ContactInfoCard;