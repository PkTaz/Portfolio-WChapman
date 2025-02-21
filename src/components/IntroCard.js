import "../styles/IntroCard.css";

const IntroCard = () => {
    return (
        <div className="card">
            <div className="card-left">
                <h2 className="card-name">William Chapman</h2>
                <h3 className="title">Full-Stack Developer</h3>
                <p className="location">Detroit, MI📍</p>
                <p className="bio">
                    Passionate Full-Stack Developer with expertise in React, JavaScript, TypeScript, MongoDB, and AWS.<br /> 
                    I design and build scalable, user-friendly solutions that drive business growth and focus on creating a meaningful impact <br /><br />From responsive 
                    UI/UX design to full-stack web applications and CRM systems, I specialize in turning complex 
                    challenges into seamless digital experiences. Certified in IT support, cloud computing, and project 
                    management, I focus on creating impactful tech solutions that enhance customer engagement and efficiency.
                </p>
                <div className="certifications">
                    <img src={`${process.env.PUBLIC_URL}/assets/certL1.png`} alt="Certification 1" className="cert-image" />
                    <img src={`${process.env.PUBLIC_URL}/assets/certL2.png`} alt="Certification 2" className="cert-image" />
                    <img src={`${process.env.PUBLIC_URL}/assets/certR1.png`} alt="Certification 3" className="cert-image" />
                    <img src={`${process.env.PUBLIC_URL}/assets/certR2.png`} alt="Certification 4" className="cert-image" />
                </div>
            </div>
            <div className="card-right">
                <a href="https://github.com/PkTaz" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/GitHub.png`} alt="GitHub" className="social-icon-gh" />
                </a>
                <a href="https://www.linkedin.com/in/william-chapman-80944b254/" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/LinkedIn.png`} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="mailto:chapmanw811@gmail.com" target="_blank">
                    <img src={`${process.env.PUBLIC_URL}/assets/Email.png`} alt="Resume" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default IntroCard;