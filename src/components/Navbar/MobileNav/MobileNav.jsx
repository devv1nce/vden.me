import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const handleScroll = (sectionId) => {
    if (isOpen) toggleMenu();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">GAMEDEV</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <ul>
          {["hero","skills","portfolio","work-exp","contact"].map((id) => (
            <li key={id}>
              <a onClick={() => handleScroll(id)} className="menu-item">
                {id === "work-exp" ? "Experience" : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <button className="contact-btn">HIRE ME ▶</button>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
