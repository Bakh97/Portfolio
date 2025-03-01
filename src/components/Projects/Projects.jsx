import "./Projects.css";
const Projects = () => {
  return (
    <div>
      <h3 className="title">Projects</h3>
      <div className="projects">
        <div className="project">
          <h4>Web-Based Sequence Game Platform</h4>
          <p>
            {" "}
            Developed a real-time multiplayer game using ReactJS for a
            responsive UI and Node.js (ExpressJS) for efficient server logic.
            Implemented WebSockets for live player interactions and game state
            management. Utilized MongoDB for scalable data storage and Jest for
            comprehensive testing, ensuring reliability and seamless gameplay
            synchronization.
          </p>
        </div>
        <div className="project">
          <h4>Secure WhatsApp Bot for Patient Data Collection</h4>
          <p>
            This FastAPI-based WhatsApp bot securely collects patient data using
            JWT authentication, RBAC, and encryption. It integrates with
            WhatsApp Business API, stores data in SQLite, exports to CSV/Google
            Sheets, and ensures secure deployment with GitHub Actions and HTTPS
            communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
