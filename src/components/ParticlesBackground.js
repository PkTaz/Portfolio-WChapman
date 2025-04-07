import React, { useEffect } from 'react';
import '../styles/ParticlesBackground.css';

const HybridBackground = () => {
  useEffect(() => {
    const background = document.getElementById('hybrid-background');
    if (!background) return; // Guard clause

    // --- Element Creation Functions ---

    // Create dynamic blur elements
    const createBlurElements = () => {
      const blurContainer = document.createElement('div');
      blurContainer.className = 'blur-container';

      // Define blur properties (color, position, size)
      const blurs = [
        { id: 'blur-1', color: 'rgba(0, 122, 255, 0.15)', top: '-20%', left: '-20%', size: '70%' }, // Apple Blue-ish
        { id: 'blur-2', color: 'rgba(74, 255, 145, 0.12)', top: '50%', left: '50%', size: '60%' }, // A24 Green
        { id: 'blur-3', color: 'rgba(255, 55, 95, 0.1)', top: '30%', left: '80%', size: '50%' }   // Apple Pink/Red-ish
      ];

      blurs.forEach(blurData => {
        const blurElement = document.createElement('div');
        blurElement.className = 'blur-element';
        blurElement.id = blurData.id;
        blurElement.style.top = blurData.top;
        blurElement.style.left = blurData.left;
        blurElement.style.width = blurData.size;
        blurElement.style.height = blurData.size;
        blurElement.style.backgroundColor = blurData.color;
        blurContainer.appendChild(blurElement);
      });

      background.appendChild(blurContainer);
    };

    // Create subtle noise overlay
    const createNoiseOverlay = () => {
      const noiseOverlay = document.createElement('div');
      noiseOverlay.className = 'noise-overlay';
      // Noise texture will be applied via CSS background
      background.appendChild(noiseOverlay);
    };
    
    // Create minimal accent motes (A24 touch) - Increased count for stars
    const createAccentMotes = () => {
        const motesContainer = document.createElement('div');
        motesContainer.className = 'motes-container';
        
        for (let i = 0; i < 40; i++) { // Increased from 15 to 40
            const mote = document.createElement('div');
            mote.className = 'accent-mote';
            mote.style.top = `${Math.random() * 100}%`;
            mote.style.left = `${Math.random() * 100}%`;
            const size = 1 + Math.random() * 1.5; // Slightly smaller max size
            mote.style.width = `${size}px`;
            mote.style.height = `${size}px`;
            mote.style.opacity = 0.3 + Math.random() * 0.4; // Vary base opacity
            mote.style.animationDelay = `${Math.random() * 15}s`;
            mote.style.animationDuration = `${18 + Math.random() * 12}s`;
            motesContainer.appendChild(mote);
        }
        background.appendChild(motesContainer);
    };

    // Create comet elements
    const createComets = () => {
      const cometsContainer = document.createElement('div');
      cometsContainer.className = 'comets-container';

      for (let i = 0; i < 2; i++) { // Reduced from 5 to 2
        const comet = document.createElement('div');
        comet.className = 'comet';
        // Set vertical start position
        comet.style.top = `${10 + Math.random() * 80}%`; 
        // Set horizontal start position (off-screen right) via animation
        // Set animation delay
        const delay = 5 + Math.random() * 25; // Start delay 5s, max delay 30s
        comet.style.setProperty('--delay', `${delay}s`); 
        cometsContainer.appendChild(comet);
      }
      background.appendChild(cometsContainer);
    };

    // (Frosted glass content area is implicitly defined by content on top + CSS)

    // --- Parallax Effect ---
    const setupParallax = () => {
      const handleMouseMove = (e) => {
        if (!background) return; // Ensure background exists

        const xPos = (e.clientX / window.innerWidth) - 0.5;
        const yPos = (e.clientY / window.innerHeight) - 0.5;

        // Move Blurs
        const blurs = background.querySelectorAll('.blur-element');
        blurs.forEach((blur, index) => {
          const factor = (index + 1) * 15 * (index % 2 === 0 ? 1 : -1); // Different directions/speeds
          blur.style.transform = `translate3d(${xPos * factor}px, ${yPos * factor * 0.7}px, 0)`;
        });
        
        // Move Motes (Stars)
        const motes = background.querySelectorAll('.accent-mote');
        motes.forEach((mote, index) => {
          const depth = 5 + (index % 8) * 3; // Varying depths, slightly less variation
          mote.style.transform = `translate3d(${xPos * depth}px, ${yPos * depth}px, 0)`;
        });

        // Move Comets (Faster parallax)
        const comets = background.querySelectorAll('.comet');
        comets.forEach((comet, index) => {
          const depth = 30 + index * 5; // Faster movement
          comet.style.transform = `translate3d(${xPos * depth}px, ${yPos * depth}px, 0)`;
        });
      };

      document.addEventListener('mousemove', handleMouseMove);

      // Return cleanup function
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    };

    // --- Execution ---
    // Clear previous elements if any (important for hot reloading)
    while (background.firstChild) {
        background.removeChild(background.firstChild);
    }

    createNoiseOverlay(); // Add noise first (lowest layer)
    createBlurElements();
    createAccentMotes(); // More stars
    createComets(); // Add comets
    const removeParallaxListener = setupParallax();

    // --- Cleanup ---
    return () => {
      removeParallaxListener(); // Remove mousemove listener
      // Optional: Clear background children on unmount
       if (background) {
           while (background.firstChild) {
               background.removeChild(background.firstChild);
           }
       }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Use the new ID for the main container
  return <div id="hybrid-background"></div>;
};

export default HybridBackground;
