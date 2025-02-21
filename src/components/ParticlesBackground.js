import React, { useEffect } from 'react';
import '../styles/ParticlesBackground.css';

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      // Dynamically load particles.js
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        // Initialize particles.js after script is loaded
        if (window.particlesJS) {
          window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 137,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              color: {
                value: "#00ff4a",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: 2,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 126,
                color: "#ffffff",
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
              },
            },
            retina_detect: true,
          });
        }
      };
      document.body.appendChild(script);
    };

    loadParticles();
  }, []); // Only run once when the component mounts

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;
