import "../styles/ProjectTimeline.css";
import { FaPaintBrush, FaCogs, FaGolfBall } from "react-icons/fa"; 

const ProjectTimeline = () => {
  return (
    <div id="project-timeline" className="project-timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-image-container">
              <a href="https://newhuerestoration-designrevamp.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/project1.png`}
                  alt="New Hue Design Restoration"
                  className="timeline-image"
                />
              </a>
            </div>
            <div className="timeline-icon-container">
              <FaPaintBrush className="timeline-icon" />
            </div>
            <h3>New Hue Design Restoration</h3>
            <p>
              Built a full-stack responsive website utilizing the MERN stack to help bring more clients to a local business.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-image-container">
              <a href="https://github.com/PkTaz/Fairway-Finder/tree/master" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/ff-logo.png`}
                  alt="Fairway Finder"
                  className="timeline-image"
                />
              </a>
            </div>
            <div className="timeline-icon-container">
              <FaGolfBall className="timeline-icon" />
            </div>
            <h3>Fairway Finder</h3>
            <p>
              Developing a full-stack web application designed to help golfers
              find golf courses around the world, review them, and read other users reviews.
            </p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-image-container">
              <a href="https://docs.google.com/document/d/19SlGq47Lvz6FjakNmUhr8yz57Cz8VCHI/edit?usp=sharing&ouid=115633295017463972231&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/project2.jpg`}
                  alt="CRM Design"
                  className="timeline-image"
                />
              </a>
            </div>
            <div className="timeline-icon-container">
              <FaCogs className="timeline-icon" />
            </div>
            <h3>CRM Design</h3>
            <p>
              Developed and designed a CRM system designed to scale and handle
              traffic to accommodate a company that was rapidly growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
