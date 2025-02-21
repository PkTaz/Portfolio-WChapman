import "./App.css";
import React, { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground.js";
import Header from "./components/Header.js";
import IntroCard from "./components/IntroCard.js";
import FixedSection from "./components/FixedSection.js";
import Skills from "./components/Skills.js";
import ProjectTimeline from "./components/ProjectTimeline.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";

const pages = ["home", "skills", "resume", "about", "projects"];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
  };

  const handleNavClick = (pageName) => {
    const pageIndex = pages.indexOf(pageName);
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
      console.log("Current Page:", pageName);  // Log to check the current page
    }
  };

  return (
    <div className="App">
      <ParticlesBackground />
      <FixedSection />
      <Header currentPage={pages[currentPage]} onNavClick={handleNavClick} />
      {currentPage === 0 && (
        <div className="mobile-image-container">
          <img className="mobile-image" src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} alt="mobile-image" />
        </div>
      )}

      {currentPage === 0 && <IntroCard />}  {/* Show IntroCard on homepage */}
      {currentPage === 1 && <Skills />}
      {currentPage === 2 && <Resume />} 
      {currentPage === 3 && <About />}
      {currentPage === 4 && <ProjectTimeline />}
  
      <button className="next-button" onClick={nextPage}>➝</button>
    </div>
  );
};

export default App;
