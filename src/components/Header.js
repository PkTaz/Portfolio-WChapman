import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Header = ({ currentPage, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  
  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
  
  // Format time with leading zeros
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "about", label: "About" },
    { id: "journal", label: "Journal" }
  ];

  return (
    <header className={`futuristic-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-backdrop"></div>
      <div className="header-content">
        <div className="header-left">
          <div className="logo" onClick={() => onNavClick("home")}>
            <div className="logo-border"></div>
            <span className="logo-text">WC</span>
          </div>
          
          <div className="header-status">
            <div className="status-item">
              <span className="status-label">System</span>
              <span className="status-value">Online</span>
            </div>
            <div className="status-item">
              <span className="status-label">Time</span>
              <span className="status-value">{formatTime(time)}</span>
            </div>
          </div>
        </div>
        
        <nav className="futuristic-nav">
          <div className="nav-track">
            {navItems.map((item, index) => (
              <div 
                key={item.id}
                className={`nav-node ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => onNavClick(item.id)}
              >
                <div className="node-indicator"></div>
                <span className="node-label">{item.label}</span>
                {index < navItems.length - 1 && (
                  <div className="node-connector">
                    <div className="connector-line"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
        
        {currentPage !== "home" && (
          <button className="home-button" onClick={() => onNavClick("home")}>
            <FaHome className="home-icon" />
            <span className="button-label">Return</span>
            <FaChevronRight className="chevron-icon" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
