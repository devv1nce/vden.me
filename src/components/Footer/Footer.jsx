import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">GAMEDEV</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <span className="footer-copy">© 2025 — Built with passion & caffeine</span>
        <div className="footer-status">
          <span className="status-dot" />
          <span>AVAILABLE FOR HIRE</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
