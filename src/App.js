import "./App.css";
import React, { useState, useEffect } from "react";
import A24Background from "./components/ParticlesBackground.js";
import Header from "./components/Header.js";
import MobileHeader from "./components/MobileHeader.js";
import BentoBox from "./components/BentoBox.js";
import Skills from "./components/Skills.js";
import ProjectTimeline from "./components/ProjectTimeline.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Journal from "./components/Journal.js";
import IntroCard from "./components/IntroCard.js";
import LoadingScreen from "./components/LoadingScreen.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsFading(true);
      
      const fadeTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      
      return () => clearTimeout(fadeTimer);
    }, 2500);
    
    return () => clearTimeout(loadTimer);
  }, []);
  
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentPage, isLoading]);

  const handleNavClick = (pageName) => {
    setCurrentPage(pageName);
    console.log("Current Page:", pageName);
  };

  return (
    <div className="App">
      {isLoading && <LoadingScreen isFading={isFading} />}
      
      {!isLoading && (
        <>
          <A24Background />
          
          <Header currentPage={currentPage} onNavClick={handleNavClick} />
          <MobileHeader currentPage={currentPage} onNavClick={handleNavClick} />
          
          {currentPage === "home" && (
            <div className="home-container home-app-layout">
              <IntroCard />
              <BentoBox onNavClick={handleNavClick} />
            </div>
          )}
          
          <div className="content-container">
            {currentPage === "skills" && <Skills />}
            {currentPage === "resume" && <Resume />}
            {currentPage === "about" && <About />}
            {currentPage === "projects" && <ProjectTimeline />}
            {currentPage === "journal" && <Journal />}
          </div>
          
          <div className="a24-attribution">Design Inspired by A24 Films</div>
        </>
      )}
    </div>
  );
};

export default App;
