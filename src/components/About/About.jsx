import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me </h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-scetion">
        <div className="about-right">
          <p>
            I am a Software Engineer with over three years of experience
            designing and implementing scalable backend systems and
            microservices. Proficient in Java, JavaScript, and Python, I develop
            RESTful and GraphQL APIs using Spring Boot, Node.js, and Django. My
            expertise includes cloud computing (AWS, Azure), containerization
            (Docker, Kubernetes), and database management (SQL, NoSQL).
            Currently, I work at Booz Allen Hamilton, building secure,
            high-performance solutions for U.S. federal agencies. I thrive in
            Agile environments, optimizing system performance and ensuring
            seamless integrations. Passionate about architecture, automation,
            and DevOps, I focus on delivering efficient, reliable, and scalable
            software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
