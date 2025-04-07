import React, { useState, useEffect } from 'react';
import '../styles/MobileHeader.css';

const MobileHeader = ({ currentPage, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (page) => {
    onNavClick(page);
    toggleMenu();
  };

  return (
    <header className={`mobile-header ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
      <div className="mobile-header-inner">
        <div className="mobile-logo">
          <a onClick={() => handleNavClick("home")}>WC</a>
        </div>
        
        <button 
          className={`hamburger-button ${isOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      
      <div className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`}>
        <div className="gradient-overlay"></div>
        <nav className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <a onClick={() => handleNavClick("home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("projects")}>Projects</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("skills")}>Skills</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("about")}>About</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("resume")}>Resume</a>
            </li>
            <li>
              <a onClick={() => handleNavClick("journal")}>Journal</a>
            </li>
          </ul>
          
          <div className="mobile-nav-footer">
            <span className="mobile-nav-footer-text">© 2025 • Made by Will Chapman •</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader; 