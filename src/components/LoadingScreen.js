import React from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ isFading }) => {
  return (
    <div className={`a24-loading-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="a24-loading-content">
        <div className="a24-loading-logo">
          {/* Simple text logo, styled to look like minimal A24 title cards */}
          <span className="a24-loading-mark">WC</span>
        </div>
        <div className="a24-loading-line"></div>
        <div className="a24-loading-subtext">PORTFOLIO</div>
      </div>
    </div>
  );
};

export default LoadingScreen; 