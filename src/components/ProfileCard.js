import React from "react";
import "../styles/ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} 
          alt="William Chapman" 
          className="profile-image" 
        />
      </div>
      <div className="profile-content">
        <div className="profile-header">
          <h1 className="profile-name">William Chapman</h1>
          <div className="profile-details">
            <h2 className="profile-title">Full-Stack Developer</h2>
            <p className="profile-location">Detroit, MI📍</p>
          </div>
        </div>
        <p className="profile-bio">
          Passionate Full-Stack Developer with expertise in React, JavaScript, TypeScript, MongoDB, and AWS.
          I design and build scalable, user-friendly solutions that drive business growth and create meaningful impact.
        </p>
        <div className="profile-socials">
          <a href="https://github.com/PkTaz" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={`${process.env.PUBLIC_URL}/assets/GitHub.png`} alt="GitHub" className="social-icon-gh" />
          </a>
          <a href="https://www.linkedin.com/in/william-chapman-80944b254/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={`${process.env.PUBLIC_URL}/assets/LinkedIn.png`} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="mailto:chapmanw811@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={`${process.env.PUBLIC_URL}/assets/Email.png`} alt="Email" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 