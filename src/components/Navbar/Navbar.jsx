import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from "react-scroll";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">GAMEDEV</span>
            <span className="logo-bracket">/&gt;</span>
          </div>

          <ul>
            <li><Link activeClass="active" to="hero" smooth spy offset={-80} className="menu-item">Home</Link></li>
            <li><Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Skills</Link></li>
            <li><Link activeClass="active" to="portfolio" smooth spy offset={-100} className="menu-item">Portfolio</Link></li>
            <li><Link activeClass="active" to="work-exp" smooth spy offset={-100} className="menu-item">Experience</Link></li>
            <li><Link activeClass="active" to="contact" smooth spy offset={-100} className="menu-item">Contact</Link></li>
            <Link to="contact" smooth spy offset={-100}>
              <button className="contact-btn">HIRE ME ▶</button>
            </Link>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
