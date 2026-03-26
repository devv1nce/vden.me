import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-info-card">
      <div className="contact-icon-wrap">
        <img src={iconUrl} alt="" />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default ContactInfoCard;
