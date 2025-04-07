import React, { useState, useEffect, useRef } from "react";
import "../styles/ProjectTimeline.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectTimeline = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeProject, setActiveProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectsContainerRef = useRef(null);
  
  // Project data
  const projects = [
    {
      id: 1,
      title: "New Hue Design Restoration",
      description: "Built a full-stack responsive website utilizing the MERN stack to help bring more clients to a local business.",
      longDescription: "This project features a modern design with smooth animations, customer testimonials, and a robust appointment scheduling system. Built with React, Express, MongoDB, and Node.js.",
      image: `${process.env.PUBLIC_URL}/assets/project1.png`,
      categories: ["web", "featured"],
      liveLink: "https://new-hue-restoration-and-design-revamp.netlify.app/",
      githubLink: "https://github.com/PkTaz",
      technologies: ["React", "CSS", "Node.js", "Express", "MongoDB", "Netlify"]
    },
    {
      id: 6,
      title: "Gymshark Website Redesign",
      description: "A reimagined e-commerce experience for Gymshark with enhanced product displays, user journey optimization, and interactive fitness content.",
      longDescription: "This Gymshark redesign combines sleek aesthetics with powerful e-commerce functionality. Features include personalized product recommendations, size guide visualizations, workout plan integration, and a streamlined checkout process to improve conversion rates.",
      image: `${process.env.PUBLIC_URL}/assets/gymshark.jpg`,
      categories: ["web", "design", "featured"],
      liveLink: "https://gymshark-redesign.netlify.app/",
      githubLink: "#",
      technologies: ["React", "JavaScript", "CSS"]
    },
    {
      id: 5,
      title: "Detroit Lions Website Redesign",
      description: "A complete overhaul of the Detroit Lions website with a modern, fan-focused approach emphasizing team history and player profiles.",
      longDescription: "This redesign project focused on creating an immersive experience for Detroit Lions fans with interactive game schedules, player stats, team history, and ticketing features. The UI includes team colors and dynamic content that updates with real-time game information.",
      image: `${process.env.PUBLIC_URL}/assets/lions.png`,
      categories: ["web", "design", "featured"],
      liveLink: "https://detroit-lions-redesign.netlify.app/",
      githubLink: "https://github.com/PkTaz/detroit-lions-website",
      technologies: ["React", "TypeScript", "Framer", "TailwindCSS"]
    },
    {
      id: 2,
      title: "Color Pal",
      description: "An intelligent color palette generator that uses Claude AI to create harmonious color schemes based on natural language descriptions.",
      longDescription: "Color Pal leverages the power of AI to generate perfect color palettes for brands based on textual descriptions. The system analyzes tone, industry standards, and psychological aspects of colors to create visually appealing palettes.",
      image: `${process.env.PUBLIC_URL}/assets/CPal.png`,
      categories: ["ai", "design"],
      liveLink: "#",
      githubLink: "https://github.com/PkTaz/color-palette-ai",
      technologies: ["React", "Node.js", "Claude AI API", "CSS"]
    },
    {
      id: 3,
      title: "CRM Design",
      description: "Developed and designed a CRM system designed to scale and handle traffic to accommodate a company that was rapidly growing.",
      longDescription: "This enterprise-grade CRM solution includes customer management, sales tracking, analytics dashboard, and reporting features. Built with a focus on scalability and performance.",
      image: `${process.env.PUBLIC_URL}/assets/project2.jpg`,
      categories: ["web", "featured"],
      liveLink: "https://docs.google.com/document/d/19SlGq47Lvz6FjakNmUhr8yz57Cz8VCHI/edit?usp=sharing&ouid=115633295017463972231&rtpof=true&sd=true",
      githubLink: "#",
      technologies: ["AWS Lambda", "S3", "Amazon RDS", "Amazon Quicksight"]
    },
    {
      id: 4,
      title: "Countries Around the World",
      description: "A full-stack web application that allows users to hover over a map of countries and view information about them by pulling data using the WorldBank API.",
      longDescription: "This interactive application provides economic, social, and geographical data about countries through an intuitive map interface. Users can compare statistics and view historical trends.",
      image: `${process.env.PUBLIC_URL}/assets/CATWproject.gif`,
      categories: ["web", "data"],
      liveLink: "https://pktaz.github.io/Countries-of-The-World/",
      githubLink: "https://github.com/PkTaz/Countries-of-The-World",
      technologies: ["TypeScript", "Angular", "WorldBank API", "CSS"]
    }
  ];

  // Filter projects based on active category
  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.categories.includes(activeCategory)));
    }
  }, [activeCategory]);

  // Initialize all projects as visible
  useEffect(() => {
    setVisibleProjects(projects);
  }, []);

  // Open project detail view
  const openProjectDetail = (project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  // Close project detail view
  const closeProjectDetail = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="a24-projects-container">
      <div className="projects-header">
        <span className="mono-label">01/</span>
        <h1>Projects</h1>
      </div>
      
      <div className="projects-intro">
        <p>
          Each of these projects reflects my hands-on approach to problem-solving. I integrate the Software Development Lifecycle 
          into my workflow to keep projects on track, from planning to deployment. These represent real challenges I've solved with code and creativity.
        </p>
      </div>
      
      <div className="category-navigation">
        <div className="categories-label">
          <span className="category-index">01</span>
          <div className="category-line"></div>
          <h2>Categories</h2>
        </div>
        
        <div className="category-filter">
          <button 
            className={`category-btn ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </button>
          <button 
            className={`category-btn ${activeCategory === "featured" ? "active" : ""}`}
            onClick={() => handleCategoryChange("featured")}
          >
            Featured
          </button>
          <button 
            className={`category-btn ${activeCategory === "web" ? "active" : ""}`}
            onClick={() => handleCategoryChange("web")}
          >
            Web
          </button>
          <button 
            className={`category-btn ${activeCategory === "design" ? "active" : ""}`}
            onClick={() => handleCategoryChange("design")}
          >
            Design
          </button>
          <button 
            className={`category-btn ${activeCategory === "ai" ? "active" : ""}`}
            onClick={() => handleCategoryChange("ai")}
          >
            AI
          </button>
          <button 
            className={`category-btn ${activeCategory === "data" ? "active" : ""}`}
            onClick={() => handleCategoryChange("data")}
          >
            Data
          </button>
        </div>
      </div>

      <div className="projects-grid-container">
        <div className="projects-label">
          <span className="projects-index">02</span>
          <div className="projects-line"></div>
          <h2>My Work</h2>
        </div>
        
        <div ref={projectsContainerRef} className="a24-projects-grid">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="a24-project-card"
              onClick={() => openProjectDetail(project)}
            >
              <div className="project-card-inner">
                <div className="project-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-meta">
                    <div className="project-categories">
                      {project.categories.map((category) => (
                        <span key={category} className="project-category">{category}</span>
                      ))}
                    </div>
                    
                    <div className="view-project">
                      <span>View Project</span>
                      <div className="arrow-line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {activeProject && (
        <div className="a24-modal-backdrop" onClick={closeProjectDetail}>
          <div className="a24-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProjectDetail}>×</button>
            
            <div className="a24-modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{activeProject.title}</h2>
                <div className="modal-categories">
                  {activeProject.categories.map((category) => (
                    <span key={category} className="modal-category">{category}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-image-container">
                <img src={activeProject.image} alt={activeProject.title} className="modal-image" />
              </div>
              
              <div className="modal-body">
                <div className="modal-main-content">
                  <div className="modal-description">
                    <h3>Overview</h3>
                    <p>{activeProject.longDescription}</p>
                  </div>
                </div>
                
                <div className="modal-side-content">
                  <div className="modal-tech-stack">
                    <h3>Tech Stack</h3>
                    <div className="modal-tech-tags">
                      {activeProject.technologies.map((tech) => (
                        <span key={tech} className="modal-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-links">
                    {activeProject.githubLink && activeProject.githubLink !== "#" && (
                      <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link github-link">
                        <FaGithub /> View Code
                      </a>
                    )}
                    
                    {activeProject.liveLink && activeProject.liveLink !== "#" && (
                      <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-link live-link">
                        <FaExternalLinkAlt /> View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectTimeline;
