import React, { useState, useEffect, useRef } from "react";
import "../styles/Resume.css";
import { 
  FaExternalLinkAlt, FaDownload, FaUniversity, 
  FaLaptopCode, FaTools, FaTimeline, FaBriefcase, 
  FaChevronDown, FaChevronUp, FaGraduationCap, 
  FaCode, FaProjectDiagram, FaServer
} from "react-icons/fa";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [isScrolling, setIsScrolling] = useState(false);
  const resumeRef = useRef(null);
  const [skillLevels, setSkillLevels] = useState({
    react: 0,
    javascript: 0,
    html: 0,
    css: 0,
    typescript: 0,
    mongodb: 0,
    nodejs: 0,
    express: 0,
    python: 0,
    figma: 0,
    vscode: 0,
    canva: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const timer = setTimeout(() => {
            setSkillLevels({
              react: 90,
              javascript: 85,
              html: 95,
              css: 90,
              typescript: 45,
              mongodb: 75,
              nodejs: 65,
              express: 60,
              python: 70,
              figma: 85,
              vscode: 95,
              canva: 90
            });
          }, 500);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }

    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);

  const handleScroll = (e) => {
    if (!isScrolling) {
      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 100);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const filterContent = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="resume-page" onScroll={handleScroll}>
      <div className="resume-paper-container" ref={resumeRef}>
        <div className="resume-header">
          <span className="resume-mono-label">03/</span>
          <h1>Resume</h1>
        </div>
        
        <div className="resume-actions">
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume-wc.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-view-button"
          >
            <FaExternalLinkAlt className="resume-button-icon" />
            <span>View PDF</span>
          </a>
          
          <a 
            href={`${process.env.PUBLIC_URL}/assets/resume-wc.pdf`} 
            download
            className="resume-download-button"
          >
            <FaDownload className="resume-button-icon" />
            <span>Download</span>
          </a>
        </div>
        
        <div className="resume-paper">
          <div className="resume-identity">
            <h2 className="resume-name">William Chapman</h2>
            <div className="resume-title">Full-Stack Developer</div>
          </div>
          
          <div className="resume-tabs">
            <button 
              className={`resume-tab ${activeSection === "all" ? "active" : ""}`}
              onClick={() => filterContent("all")}
            >
              All
            </button>
            <button 
              className={`resume-tab ${activeSection === "education" ? "active" : ""}`}
              onClick={() => filterContent("education")}
            >
              <FaGraduationCap className="tab-icon" /> Education
            </button>
            <button 
              className={`resume-tab ${activeSection === "skills" ? "active" : ""}`}
              onClick={() => filterContent("skills")}
            >
              <FaTools className="tab-icon" /> Skills
            </button>
            <button 
              className={`resume-tab ${activeSection === "experience" ? "active" : ""}`}
              onClick={() => filterContent("experience")}
            >
              <FaBriefcase className="tab-icon" /> Experience
            </button>
            <button 
              className={`resume-tab ${activeSection === "projects" ? "active" : ""}`}
              onClick={() => filterContent("projects")}
            >
              <FaProjectDiagram className="tab-icon" /> Projects
            </button>
          </div>
          
          {(activeSection === "all" || activeSection === "education") && (
            <div className="resume-section">
              <div className="resume-section-header">
                <div className="resume-section-marker">
                  <span className="resume-section-number">01</span>
                  <div className="resume-section-line"></div>
                </div>
                <h3>
                  <FaGraduationCap className="resume-section-icon" />
                  Education
                </h3>
              </div>
              
              <div className="resume-education-item">
                <div className="resume-education-details">
                  <div className="resume-institution">Western Governors University</div>
                  <div className="resume-degree">B.S in Software Engineering</div>
                  <div className="resume-graduation-date">August 2025</div>
                  <div className="resume-gpa">GPA: 4.0</div>
                </div>
                
                <div className="resume-education-notes">
                  <p>Pursuing M.S in A.I Engineering post graduation.</p>
                  
                  <div className="resume-courses-list">
                    <div className="resume-courses-title">Deep-Knowledge Courses</div>
                    <ul>
                      <li>Software Engineering / Back-End Development</li>
                      <li>Front-End Development / UI/UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(activeSection === "all" || activeSection === "skills") && (
            <div className="resume-section">
              <div className="resume-section-header">
                <div className="resume-section-marker">
                  <span className="resume-section-number">02</span>
                  <div className="resume-section-line"></div>
                </div>
                <h3>
                  <FaTools className="resume-section-icon" />
                  Technical Skills
                </h3>
              </div>
              
              <div className="resume-skills-container">
                <div className="resume-skill-category">
                  <div className="resume-category-label">
                    <FaCode className="category-icon" /> Frontend
                  </div>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-name">React.js</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.react}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.react}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">JavaScript</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.javascript}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.javascript}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">HTML/CSS</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.html}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.html}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">TypeScript</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.typescript}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.typescript}%</div>
                    </div>
                  </div>
                </div>
                
                <div className="resume-skill-category">
                  <div className="resume-category-label">
                    <FaServer className="category-icon" /> Backend
                  </div>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-name">MongoDB</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.mongodb}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.mongodb}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">Node.js</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.nodejs}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.nodejs}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">Express</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.express}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.express}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">Python</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.python}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.python}%</div>
                    </div>
                  </div>
                </div>
                
                <div className="resume-skill-category">
                  <div className="resume-category-label">
                    <FaLaptopCode className="category-icon" /> Tools
                  </div>
                  <div className="skill-bars">
                    <div className="skill-item">
                      <div className="skill-name">Figma</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.figma}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.figma}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">Canva</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.canva}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.canva}%</div>
                    </div>
                    <div className="skill-item">
                      <div className="skill-name">VS Code</div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar" 
                          style={{ width: `${skillLevels.vscode}%` }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skillLevels.vscode}%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(activeSection === "all" || activeSection === "experience") && (
            <div className="resume-section">
              <div className="resume-section-header">
                <div className="resume-section-marker">
                  <span className="resume-section-number">03</span>
                  <div className="resume-section-line"></div>
                </div>
                <h3>
                  <FaBriefcase className="resume-section-icon" />
                  Experience
                </h3>
              </div>
              
              <div className="resume-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="resume-experience-header">
                      <div className="resume-job-title">Freelance Full-Stack Developer</div>
                      <div className="resume-company-name">New Hue Restoration + Design</div>
                      <div className="resume-job-date">May 2024</div>
                    </div>
                    
                    <div className="resume-job-description">
                      <ul>
                        <li>Designed and Developed a visually engaging, responsive full-stack website for a local Restoration and Design company by utilizing the MERN stack.</li>
                        <li>Rebuilt the projects page, enhancing visual appeal and navigation to showcase completed projects with a responsive, portfolio-style layout.</li>
                        <li>Built custom user interface elements that simplify the work requesting process, providing an intuitive experience for users.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {(activeSection === "all" || activeSection === "projects") && (
            <div className="resume-section">
              <div className="resume-section-header">
                <div className="resume-section-marker">
                  <span className="resume-section-number">04</span>
                  <div className="resume-section-line"></div>
                </div>
                <h3>
                  <FaProjectDiagram className="resume-section-icon" />
                  Projects
                </h3>
              </div>
              
              <div className="projects-grid">
                <div className="project-card">
                  <div className="project-card-front">
                    <div className="project-title">ColorPal Color Studio</div>
                    <div className="project-tech">(React, JavaScript, CSS, ClaudeAPI)</div>
                    <div className="project-expand-hint">Hover to see details</div>
                  </div>
                  <div className="project-card-back">
                    <div className="project-description">
                      <ul>
                        <li>Developed an AI-powered color palette generator integrating Claude AI for natural language processing.</li>
                        <li>Engineered an adaptive color learning system that refines palettes based on user feedback.</li>
                        <li>Implemented advanced color theory algorithms and WCAG accessibility scoring.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="project-card">
                  <div className="project-card-front">
                    <div className="project-title">Detroit Lions Website Redesign</div>
                    <div className="project-tech">(React, TypeScript, Tailwind CSS, Framer Motion)</div>
                    <div className="project-expand-hint">Hover to see details</div>
                  </div>
                  <div className="project-card-back">
                    <div className="project-description">
                      <ul>
                        <li>Developed a fully responsive and interactive website for the Detroit Lions official site.</li>
                        <li>Optimized performance with lazy loading, error handling, and a component-based architecture.</li>
                        <li>Implemented dynamic UI elements, including a video background hero section and interactive game schedule.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
