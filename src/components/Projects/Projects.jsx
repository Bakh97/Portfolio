import "./Projects.css"
const Projects = () => {
  return (
    <div>
      <h3 className="title">Projects</h3>
      <div className="projects">
        <div className="project">
          <h4 >Web-Based Sequence Game Platform</h4>
          <p> Developed a real-time multiplayer game using ReactJS for a responsive UI and Node.js (ExpressJS) for efficient server logic. Implemented WebSockets for live player interactions and game state management. Utilized MongoDB for scalable data storage and Jest for comprehensive testing, ensuring reliability and seamless gameplay synchronization.</p>
          
        </div>
        <div className="project">
          <h4>Automated Cloud Infrastructure Deployment Using Terraform</h4>
          <p>Designed and deployed a cloud infrastructure solution using Terraform on AWS, automating resource provisioning with EC2, VPC, S3, RDS, and IAM. Implemented remote state management with S3 and DynamoDB, and integrated CI/CD pipelines for automated deployments, ensuring scalability, security, and maintainability using Infrastructure as Code (IaC) principles. </p>
          
        </div>
    </div>
    </div>
  )
}

export default Projects
