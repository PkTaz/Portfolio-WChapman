import "../styles/About.css";
import { FaUser, FaGraduationCap, FaLaptopCode, FaRegLightbulb, FaUsers, FaClock, FaBrain, FaCodeBranch } from 'react-icons/fa'; // Importing icons

const About = () => {
    return (
        <div className="about-container">
            {/* Main About Header */}
            <h2>About Me</h2>
            
            {/* Intro Section */}
            <div className="about-section">
                <h3><FaUser className="about-icon" /> Introduction</h3>
                <p>
                Hi, I’m Will – a Full-Stack Software Engineer and UI/UX Designer passionate about building scalable, 
                user-centered web applications. With expertise in React, JavaScript, TypeScript, Node.js, MongoDB, and AWS, 
                I’ve designed custom solutions for businesses, including a full-stack web app for a restoration company and 
                a CRM system to enhance customer management.<br /><br />
                
                In addition to my technical skills, I bring strong customer service experience, having managed high-volume interactions 
                at The Polo Fields Golf & Country Club and Whole Foods Market. I’m always looking for new opportunities 
                to apply my skills to create impactful solutions that drive both user satisfaction and business growth.
                </p>
            </div>

            {/* Background Section */}
            <div className="about-section">
                <h3><FaGraduationCap className="about-icon" /> Background</h3>
                <p>
                I graduated with a Bachelor's in Software Engineering from WGU in just under 2.5 years while balancing full-time work. This experience not only sharpened my technical skills but also taught me time management and perseverance. I'm proud of my ability to juggle demanding coursework while excelling in my professional roles, 
                and I’m now looking forward to advancing my education with a Master's in AI Engineering returning to WGU.
                </p>
            </div>

            {/* Skills & Experience Section */}
            <div className="about-section">
                <h3><FaLaptopCode className="about-icon" /> Skills & Experience</h3>
                <p>
                As a Freelance Web Developer since May 2024, I’ve created responsive, 
                full-stack websites using the MERN stack, including a portfolio site for a Restoration and Design company. 
                My work focused on enhancing user experience with intuitive interfaces and seamless client booking. Previously,
                 I worked at The Polo Fields Golf & Country Club, managing POS systems and assisting 100+ members daily, 
                and at Whole Foods Market, where I helped increase sales by 15% through effective merchandising.
                </p>
                <div className="soft-skills-container">
        <div className="soft-skills-card">
          <FaRegLightbulb className="soft-skill-icon" />
          <h3>Problem Solving</h3>
          <p>The ability to break down complex problems and find efficient solutions.</p>
        </div>
        <div className="soft-skills-card">
          <FaUsers className="soft-skill-icon" />
          <h3>Communication</h3>
          <p>Explaining technical concepts clearly to non-technical stakeholders.</p>
        </div>
        <div className="soft-skills-card">
          <FaClock className="soft-skill-icon" />
          <h3>Time Management</h3>
          <p>Effectively managing multiple tasks and meeting deadlines.</p>
        </div>
        <div className="soft-skills-card">
          <FaBrain className="soft-skill-icon" />
          <h3>Critical Thinking</h3>
          <p>Analyzing situations and making informed decisions based on evidence.</p>
        </div>
        <div className="soft-skills-card">
          <FaCodeBranch className="soft-skill-icon" />
          <h3>Collaboration</h3>
          <p>Working well within a team environment and contributing to group efforts.</p>
        </div>
      </div>
    </div>
</div>
    );
};

export default About;
