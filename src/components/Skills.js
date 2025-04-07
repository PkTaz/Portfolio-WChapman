import React from "react";
import "../styles/Skills.css";
import { 
  FaCode, FaServer, FaTools, FaPalette,
  FaLightbulb, FaUsers, FaClock, FaCodeBranch,
  FaCertificate
} from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      icon: <FaCode />,
      skills: [
        { name: "React", image: "/assets/REACT.svg" },
        { name: "JavaScript", image: "/assets/JS.svg" },
        { name: "TypeScript", image: "/assets/TS.svg" },
        { name: "HTML", image: "/assets/HTML.svg" },
        { name: "CSS", image: "/assets/CSS.svg" }
      ]
    },
    {
      category: "Backend",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", image: "/assets/NODEJS.svg" },
        { name: "MongoDB", image: "/assets/MongoDB.png" },
        { name: "Express", image: "/assets/express.webp" }
      ]
    },
    {
      category: "Design & Tools",
      icon: <FaPalette />,
      skills: [
        { name: "Figma", image: "/assets/Figma.png" },
        { name: "Git", image: "/assets/GitHubCard.png" },
        { name: "VS Code", image: "/assets/vscode.png" }
      ]
    }
  ];

  const professionalSkills = [
    {
      name: "Problem Solving",
      icon: <FaLightbulb />,
      description: "Breaking down complex challenges into elegant solutions"
    },
    {
      name: "Communication",
      icon: <FaUsers />,
      description: "Translating technical concepts for diverse audiences"
    },
    {
      name: "Time Management",
      icon: <FaClock />,
      description: "Prioritizing effectively to meet project deadlines"
    },
    {
      name: "Collaboration",
      icon: <FaCodeBranch />,
      description: "Working within teams to achieve optimal results"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", image: "/assets/certR1.png" },
    { name: "CompTIA Project+", image: "/assets/certR2.png" },
    { name: "ITIL v4 Foundation", image: "/assets/certL1.png" },
    { name: "Google IT Support Professional", image: "/assets/certL2.png" }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <span className="mono-label">02/</span>
        <h1>Skills</h1>
      </div>
      
      <div className="skills-intro">
        <p>
          Full-stack development expertise with a focus on creating seamless, 
          user-centered web experiences. Combining technical proficiency with
          thoughtful problem-solving and collaborative approach.
        </p>
      </div>
      
      <div className="a24-skill-grid">
        <div className="tech-skills-section">
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-number">01</span>
              <div className="indicator-line"></div>
            </div>
            <h2>Technical Expertise</h2>
          </div>
          
          <div className="tech-categories">
            {technicalSkills.map((category, idx) => (
              <div className="tech-category" key={idx}>
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3>{category.category}</h3>
                </div>
                
                <div className="skills-gallery">
                  {category.skills.map((skill, skillIdx) => (
                    <div className="skill-card" key={skillIdx}>
                      <div className="skill-image-container">
                        <img 
                          src={`${process.env.PUBLIC_URL}${skill.image}`} 
                          alt={skill.name}
                          className="skill-image" 
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="certifications-section">
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-number">02</span>
              <div className="indicator-line"></div>
            </div>
            <h2>Certifications</h2>
          </div>
          
          <div className="certifications-row">
            {certifications.map((cert, idx) => (
              <div className="certification-card" key={idx}>
                <div className="certification-image-container">
                  <img 
                    src={`${process.env.PUBLIC_URL}${cert.image}`} 
                    alt={cert.name}
                    className="certification-image" 
                  />
                </div>
                <div className="certification-name">
                  <span>{cert.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="divider"></div>
        
        <div className="professional-skills-section">
          <div className="section-header">
            <div className="section-indicator">
              <span className="indicator-number">03</span>
              <div className="indicator-line"></div>
            </div>
            <h2>Professional Skills</h2>
          </div>
          
          <p className="section-quote">
            "Technical skills make solutions possible.<br />
            Professional skills make them valuable."
          </p>
          
          <div className="professional-skills-list">
            {professionalSkills.map((skill, idx) => (
              <div className="professional-skill" key={idx}>
                <div className="skill-label">
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.name}</h3>
                </div>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="skills-note">
            <span className="note-marker">Note</span>
            <p>Continuously exploring new technologies and methodologies to enhance development capabilities and deliver exceptional results.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
