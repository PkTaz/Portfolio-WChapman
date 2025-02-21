import "../styles/Skills.css";
import { FaRegLightbulb, FaUsers, FaClock, FaBrain, FaCodeBranch, FaPhone, FaLightbulb, FaHandshake, FaCogs, FaChalkboardTeacher } from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
      {/* Languages & Technologies Section */}
      <div className="skills-container">
        <h2 className="skills-header">Languages <br />&<br /> Technologies</h2>
        <div className="skills-grid">
          <div className="language-item" data-lang="React">
            <img src={`${process.env.PUBLIC_URL}/assets/REACT.svg`} alt="React" />
            <span className="language-text">React</span>
          </div>
          <div className="language-item" data-lang="HTML">
            <img src={`${process.env.PUBLIC_URL}/assets/HTML.svg`} alt="HTML" />
            <span class="language-text">HTML</span>
          </div>
          <div className="language-item" data-lang="CSS">
            <img src={`${process.env.PUBLIC_URL}/assets/CSS.svg`} alt="CSS" />
            <span className="language-text">CSS</span>
          </div>
          <div className="language-item" data-lang="JavaScript">
            <img src={`${process.env.PUBLIC_URL}/assets/JS.svg`} alt="JavaScript" />
            <span className="language-text">JavaScript</span>
          </div>
          <div className="language-item" data-lang="Node.js">
            <img src={`${process.env.PUBLIC_URL}/assets/NODEJS.svg`} alt="Node.js" />
            <span className="language-text">Node.js</span>
          </div>
          <div className="language-item" data-lang="MongoDB">
            <img src={`${process.env.PUBLIC_URL}/assets/MongoDB.png`} alt="MongoDB" />
            <span className="language-text">MongoDB</span>
          </div>
          <div className="language-item" data-lang="TypeScript">
            <img src={`${process.env.PUBLIC_URL}/assets/TS.svg`} alt="TypeScript" />
            <span className="language-text">TypeScript</span>
          </div>
          <div className="language-item" data-lang="GitHub">
            <img src={`${process.env.PUBLIC_URL}/assets/GitHubCard.png`} alt="GitHub" />
            <span className="language-text">GitHub</span>
          </div>
          <div className="language-item" data-lang="Figma">
            <img src={`${process.env.PUBLIC_URL}/assets/Figma.png`} alt="Figma" />
            <span className="language-text">Figma</span>
          </div>
          <div className="language-item" data-lang="VSCode">
            <img src={`${process.env.PUBLIC_URL}/assets/vscode.png`} alt="VSCode" />
            <span className="language-text">VSCode</span>
          </div>
        </div>
      </div>
      <h2 className="soft-skills-header">Soft Skills</h2>
      {/* Soft Skills Section */}
      <div className="soft-skills-container">
        <div className="soft-skills-grid">
          <div className="soft-skill-card">
            <FaRegLightbulb className="soft-skill-icon" />
            <h3>Problem Solving</h3>
            <p>The ability to break down complex problems and find efficient solutions.</p>
          </div>
          <div className="soft-skill-card">
            <FaUsers className="soft-skill-icon" />
            <h3>Communication</h3>
            <p>Explaining technical concepts clearly to non-technical stakeholders.</p>
          </div>
          <div className="soft-skill-card">
            <FaClock className="soft-skill-icon" />
            <h3>Time Management</h3>
            <p>Effectively managing multiple tasks and meeting deadlines.</p>
          </div>
          <div className="soft-skill-card">
            <FaBrain className="soft-skill-icon" />
            <h3>Critical Thinking</h3>
            <p>Analyzing situations and making informed decisions based on evidence.</p>
          </div>
          <div className="soft-skill-card">
            <FaCodeBranch className="soft-skill-icon" />
            <h3>Collaboration</h3>
            <p>Working well within a team environment and contributing to group efforts.</p>
          </div>
          <div className="soft-skill-card">
            <FaPhone className="soft-skill-icon" />
            <h3>Customer Service</h3>
            <p>Building relationships and providing support to clients and users.</p>
          </div>
          <div className="soft-skill-card">
            <FaLightbulb className="soft-skill-icon" />
            <h3>Adaptability</h3>
            <p>Quickly learning new technologies and adjusting to changing project requirements.</p>
          </div>
          <div className="soft-skill-card">
            <FaHandshake className="soft-skill-icon" />
            <h3>Leadership</h3>
            <p>Taking initiative, mentoring others, and driving projects to success.</p>
          </div>
          <div className="soft-skill-card">
            <FaCogs className="soft-skill-icon" />
            <h3>Attention to Detail</h3>
            <p>Writing clean, maintainable code and catching potential errors early.</p>
          </div>
          <div className="soft-skill-card">
            <FaChalkboardTeacher className="soft-skill-icon" />
            <h3>Mentorship</h3>
            <p>Sharing knowledge, guiding junior developers, and fostering growth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
