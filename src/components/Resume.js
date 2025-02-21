import React from "react";
import "../styles/Resume.css"; 

const Resume = () => {
  return (
    <div className="resume-container">
      <a
        href={`${process.env.PUBLIC_URL}/assets/resume-wc.pdf`} 
        target="_blank"
        rel="noopener noreferrer"
        className="resume-link"
      >
        <div className="resume-image-container">
          <img
            src={`${process.env.PUBLIC_URL}/assets/resume.jpg`}  
            alt="View Resume"
            className="resume-image"
          />
        </div>
      </a>
      <h1 className="resume-header"></h1>
    </div>
  );
};

export default Resume;
