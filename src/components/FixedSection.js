import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/FixedSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faPencilRuler, faNetworkWired } from '@fortawesome/free-solid-svg-icons';


const FixedSection = () => {
  const [quote, setQuote] = useState("Loading...");

  // Fetch the quote from the API
  const fetchQuote = async () => {
    console.log("Fetching new quote..."); // Debugging
    try {
      const response = await axios.get("https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random"));
      const data = JSON.parse(response.data.contents); // Parse the response
      if (data && data.length > 0) {
        setQuote(data[0].q); // Update the quote
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Stay focused and keep pushing forward!"); // Default fallback quote
    }
  };

  // Set the interval to fetch quotes every 15 seconds
  useEffect(() => {
    fetchQuote(); // Fetch on initial mount
    const interval = setInterval(fetchQuote, 15000); // Set the interval to 15 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array, so it runs only once when the component mounts

  return (
    <div className="fixed-section">
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`}
          alt="Description"
          className="fixed-image"
        />
      </div>
      <h1 className="aside-title">Full-Stack Developer</h1>
    <h2 className="aside-subtitle">Interests</h2>
    <h3 className="aside-subtitle3">
      <FontAwesomeIcon icon={faRobot} /> A.I Engineering
    </h3>
    <h3 className="aside-subtitle2">
      <FontAwesomeIcon icon={faPencilRuler} /> UI/UX Development
    </h3>
    <h3 className="aside-subtitle2">
      <FontAwesomeIcon icon={faNetworkWired} /> System Architecture
    </h3>
    <h4 className="motive-title">15 Second Quotes</h4>
      <p className="motivational-quote">"{quote}"</p> {/* Display quote */}
      <h4 className="motive-title">Quick Links</h4>
      <nav className="fixed-links">
        <ul>
          <li><a href="https://newhuerestoration-designrevamp.netlify.app/">New Hue Project</a></li>
          <li><a href="https://docs.google.com/document/d/19SlGq47Lvz6FjakNmUhr8yz57Cz8VCHI/edit?usp=sharing&ouid=115633295017463972231&rtpof=true&sd=true">CRM Project</a></li>
          <li><a href="https://pktaz.github.io/Countries-of-The-World/">Countries Project</a></li>
          <li><a href="https://github.com/PkTaz/Fairway-Finder/tree/master">Fairway Finder</a></li>
        </ul>
      </nav>
      <div className="social-icons-container">
    <a href="https://github.com/PkTaz" target="_blank">
      <img src={`${process.env.PUBLIC_URL}/assets/GitHub.png`} alt="GitHub" className="social-icon-gh" />
    </a>
    <a href="https://www.linkedin.com/in/william-chapman-80944b254/" target="_blank">
      <img src={`${process.env.PUBLIC_URL}/assets/LinkedIn.png`} alt="LinkedIn" className="social-icon" />
    </a>
    <a href="mailto:chapmanw811@gmail.com" target="_blank">
      <img src={`${process.env.PUBLIC_URL}/assets/Email.png`} alt="Email" className="social-icon" />
    </a>
  </div>
    </div>
  );
};

export default FixedSection;
