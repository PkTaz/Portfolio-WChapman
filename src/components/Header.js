import React from "react";
import "../styles/Header.css";

const Header = ({ currentPage, onNavClick }) => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="navbar">
          <ul className="nav-list">
            <li className={`nav-item ${currentPage === "about" ? "active" : ""}`} onClick={() => onNavClick("about")}>
              <span>About</span>
            </li>
            <li className={`nav-item ${currentPage === "projects" ? "active" : ""}`} onClick={() => onNavClick("projects")}>
              <span>Projects</span>
            </li>
            <li className={`nav-item ${currentPage === "home" ? "active" : ""}`} onClick={() => onNavClick("home")}>
              <span>Home</span>
            </li>
            <li className={`nav-item ${currentPage === "skills" ? "active" : ""}`} onClick={() => onNavClick("skills")}>
              <span>Skills</span>
            </li>
            <li className={`nav-item ${currentPage === "resume" ? "active" : ""}`} onClick={() => onNavClick("resume")}>
              <span>Resume</span>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
