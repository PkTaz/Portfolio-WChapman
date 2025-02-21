import "../styles/Skills.css";

const Skills = () => {
  return (
    <div className="language-card">
      <div className="language-slide">
        <div className="language-item" data-lang="React">
          <img src={`${process.env.PUBLIC_URL}/assets/REACT.svg`} alt="React" />
          <span className="language-text">React</span>
        </div>
        <div className="language-item" data-lang="HTML">
          <img src={`${process.env.PUBLIC_URL}/assets/HTML.svg`} alt="HTML" />
          <span className="language-text">HTML</span>
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
        <div className="language-item" data-lang="Angular">
          <img src={`${process.env.PUBLIC_URL}/assets/Angular.svg`} alt="Angular" />
          <span className="language-text">Angular</span>
        </div>
        <div className="language-item" data-lang="TypeScript">
          <img src={`${process.env.PUBLIC_URL}/assets/TS.svg`} alt="TypeScript" />
          <span className="language-text">TypeScript</span>
        </div>
        <div className="language-item" data-lang="GitHub">
          <img src={`${process.env.PUBLIC_URL}/assets/GitHubCard.png`} alt="GitHub" />
          <span className="language-text">GitHub</span>
        </div>
        <div className="language-item" data-lang="Python">
          <img src={`${process.env.PUBLIC_URL}/assets/Python.png`} alt="Python" />
          <span className="language-text">Python</span>
        </div>
        <div className="language-item" data-lang="Swift">
          <img src={`${process.env.PUBLIC_URL}/assets/MySQL.png`} alt="Swift" />
          <span className="language-text">MySQL</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
