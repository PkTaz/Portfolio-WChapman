import React from "react";
import "../styles/BentoBox.css";
import { FaCode, FaLaptopCode, FaUserTie, FaUserCircle, FaBook } from "react-icons/fa";

const BentoBox = ({ onNavClick }) => {
  // Bento box items configuration
  const bentoItems = [
    {
      id: "projects",
      title: "Projects",
      icon: <FaLaptopCode className="bento-icon" />,
      color: "#00FF4A",
      size: "large",
    },
    {
      id: "skills",
      title: "Skills",
      icon: <FaCode className="bento-icon" />,
      color: "#00FF4A",
      size: "medium",
    },
    {
      id: "resume",
      title: "Resume",
      icon: <FaUserTie className="bento-icon" />,
      color: "#00FF4A",
      size: "medium",
    },
    {
      id: "about",
      title: "About",
      icon: <FaUserCircle className="bento-icon" />,
      color: "#00FF4A",
      size: "medium",
    },
    {
      id: "journal",
      title: "Journal",
      icon: <FaBook className="bento-icon" />,
      color: "#00FF4A",
      size: "medium",
    }
  ];

  // Function to handle navigation
  const handleItemClick = (id) => {
    onNavClick(id);
  };

  return (
    <div className="bento-container">
      <div className="bento-grid">
        {bentoItems.map((item) => (
          <div 
            key={item.id}
            className={`bento-item ${item.size}`}
            onClick={() => handleItemClick(item.id)}
            style={{ "--item-color": item.color }}
          >
            <div className="bento-content">
              <div className="bento-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="bento-title">{item.title}</h3>
              <div className="bento-background"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoBox; 