import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, linkUrl }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-icon-wrap">
        <img src={iconUrl} alt="" />
      </div>
      {/* If linkUrl exists, render a link. Otherwise, render plain text. */}
      {linkUrl ? (
        <a href={linkUrl} target="_blank" rel="noreferrer" className="contact-link">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default ContactInfoCard;