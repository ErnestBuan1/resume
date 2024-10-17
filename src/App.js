import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}

function Resume() {
  return (
    <div className="resume-container">
      <Header />
      <div className="resume-content">
        <PersonalInfo />
        <Experience />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="resume-header">
      <h1>ERNEST BENEDICT BUAN</h1>
      <h2>FUTURE FULL-STACK DEVELOPER</h2>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="personal-info">
      <Contact />
      <Education />
      <Skills />
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-section">
      <h1>CONTACT</h1>
      <p>
        ernest.buan@example.com <FontAwesomeIcon icon={faEnvelope} /> <br />
        09123456789 <FontAwesomeIcon icon={faPhone} /> <br />
        Angeles City, Pampanga, Philippines <FontAwesomeIcon icon={faLocationDot} /> <br />
        <a href="https://www.facebook.com/ernest.buan" target="_blank" rel="noopener noreferrer">Facebook</a> <FontAwesomeIcon icon={faFacebook} /> <br />
        <a href="https://github.com/ernestbuan" target="_blank" rel="noopener noreferrer">GitHub</a> <FontAwesomeIcon icon={faGithub} />
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="education-section">
      <h1>EDUCATION</h1>
      <p>
        Bachelor of Science <br />
        Information Technology <br />
        University of the Assumption <br />
        2021 - Present <br />
        San Fernando, Pampanga
      </p>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-section">
      <h1>SKILLS</h1>
      <p>
        React <br />
        Node.js <br />
        MongoDB <br />
      </p>
    </div>
  );
}

function Experience() {
  return (
    <div className="experience-section">
      <h1>LEARNING EXPERIENCE</h1>
      <LearningExperience
        year="1st Year College"
        technologies="Python, HTML, CSS"
        description="Introduced to basic programming concepts, web development with HTML/CSS, and Python scripting for automation tasks."
      />
      <LearningExperience
        year="2nd Year College"
        technologies="JavaScript, Node.js, Express"
        description="Focused on back-end development using Node.js and Express, creating APIs and working with databases like MongoDB."
      />
      <LearningExperience
        year="3rd Year College (Currently)"
        technologies="React, Redux, TypeScript"
        description="Specializing in front-end development using React, Redux, and TypeScript to build scalable and maintainable web applications."
      />
    </div>
  );
}

function LearningExperience({ year, technologies, description }) {
  return (
    <div className="learning-experience">
      <h2>{year}</h2>
      <p>{technologies}</p>
      <ul>
        <li>{description}</li>
      </ul>
    </div>
  );
}
