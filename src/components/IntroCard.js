import "../styles/IntroCard.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const IntroCard = () => {
    return (
        <div className="intro-card">
            <div className="intro-content">
                <div className="intro-left">
                    <div className="intro-image-container">
                        <img 
                            src={`${process.env.PUBLIC_URL}/assets/profilep.jpeg`} 
                            alt="William Chapman" 
                            className="intro-image" 
                        />
                    </div>
                </div>
                
                <div className="intro-right">
                    <div className="intro-header">
                        <span className="intro-eyebrow">Developer / Detroit</span>
                        <h1 className="intro-name">William Chapman</h1>
                        <div className="intro-title-wrap">
                            <span className="intro-title">Full-Stack Developer</span>
                        </div>
                    </div>
                    
                    <div className="intro-bio">
                        Passionate developer crafting scalable web solutions with React, JavaScript, and AWS. 
                        Focused on elegant interfaces and robust architecture.
                    </div>
                    
                    <div className="intro-footer">
                        <div className="intro-social">
                            <a href="https://github.com/PkTaz" target="_blank" rel="noopener noreferrer" className="intro-social-link">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/william-chapman-80944b254/" target="_blank" rel="noopener noreferrer" className="intro-social-link">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:chapmanw811@gmail.com" className="intro-social-link">
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroCard;