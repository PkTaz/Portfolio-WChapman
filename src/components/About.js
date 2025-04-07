import React from "react";
import "../styles/About.css";
import { FaUser, FaGraduationCap, FaLaptopCode, FaRegLightbulb, FaUsers, FaClock, FaBrain, FaCodeBranch } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <span className="mono-label">04/</span>
        <h1>About</h1>
      </div>
      
      <div className="about-grid">
        <div className="about-section intro-section">
          <div className="section-header">
            <span className="section-index">01</span>
            <h2>Introduction</h2>
          </div>
          <div className="section-content">
            <p>
              Full-Stack Software Engineer and UI/UX Designer focused on building scalable, 
              user-centered web applications. With expertise in React, JavaScript, TypeScript, 
              Node.js, MongoDB, and AWS.
            </p>
            <p>
              Built custom solutions for businesses—from full-stack web applications 
              to comprehensive CRM systems that enhance customer management and business operations.
            </p>
          </div>
        </div>
        
        <div className="about-section background-section">
          <div className="section-header">
            <span className="section-index">02</span>
            <h2>Background</h2>
          </div>
          <div className="section-content">
            <p>
              Bachelor's in Software Engineering from WGU completed in 2.5 years while working full-time.
              Looking forward to advancing education with a Master's in AI Engineering.
            </p>
            <div className="highlight-text">
              <span>Balancing technical expertise with real-world application.</span>
            </div>
          </div>
        </div>
        
        <div className="about-section experience-section">
          <div className="section-header">
            <span className="section-index">03</span>
            <h2>Experience</h2>
          </div>
          <div className="section-content">
            <div className="experience-item">
              <h3>Freelance Web Developer</h3>
              <p className="experience-period">2024—Present</p>
              <p>
                Created responsive full-stack websites using the MERN stack. 
                Focused on enhancing user experience with intuitive interfaces.
              </p>
            </div>
            <div className="experience-item">
              <h3>Customer Service Professional</h3>
              <p className="experience-period">Previous</p>
              <p>
                Managed high-volume customer interactions at The Polo Fields Golf & Country Club
                and Whole Foods Market, helping increase sales by 15% through effective merchandising.
              </p>
            </div>
          </div>
        </div>
        
        <div className="about-section skills-section">
          <div className="section-header">
            <span className="section-index">04</span>
            <h2>Core Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <FaRegLightbulb className="skill-icon" />
              <h3>Problem Solving</h3>
              <p>Breaking down complex problems to find elegant solutions.</p>
            </div>
            <div className="skill-card">
              <FaUsers className="skill-icon" />
              <h3>Communication</h3>
              <p>Translating technical concepts for non-technical stakeholders.</p>
            </div>
            <div className="skill-card">
              <FaClock className="skill-icon" />
              <h3>Time Management</h3>
              <p>Managing priorities and meeting deadlines efficiently.</p>
            </div>
            <div className="skill-card">
              <FaBrain className="skill-icon" />
              <h3>Critical Thinking</h3>
              <p>Analysis-driven decision making based on evidence.</p>
            </div>
            <div className="skill-card">
              <FaCodeBranch className="skill-icon" />
              <h3>Collaboration</h3>
              <p>Working effectively in team environments to achieve goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
