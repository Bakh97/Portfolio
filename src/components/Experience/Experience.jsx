import Kyndryl from "../../assets/kyndryl.png";
import Clark from "../../assets/Clark.png";
import Panjab from "../../assets/Panjab.png";
import Sky from "../../assets/sky.png";
import "./Experience.css";
const Experience = () => {
  return (
    <div>
      <h1>My Journey</h1>
      <div className="timeline">
        <div className="container left-container">
          <img src={Kyndryl} />
          <div className="text-box">
            <h2>Kyndryl</h2>
            <small>Feb 2025 -present</small>
            <p>
              Developed scalable financial modules using Java, Spring Boot, and
              Microservices, streamlining premium collections and claims
              processing. Secured transactions with JWT authentication and
              Spring Security. Optimized RESTful APIs for seamless third-party
              payment integration. Automated batch processing with Spring Batch,
              enhancing efficiency. Built a responsive React-based frontend with
              Material UI and Redux, improving user experience. Ensured system
              reliability with comprehensive testing.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={Clark} />
          <div className="text-box">
            <h2>Clark University</h2>
            <small> Jan 2023 – Dec 2024</small>
            <p>
              MSc in Computer Science • Courses: Software Engineering,
              Algorithms,Data Visualization, Machine Learning.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <img src={Sky} />
          <div className="text-box">
            <h2>Sky productivity</h2>
            <small>July 2019 - May 2021</small>
            <p>
              Optimized supply chain management by enhancing order processing
              and reducing costs. Implemented predictive analytics for better
              inventory forecasting. Built RESTful APIs for system integration.
              Strengthened security with RBAC. Automated reporting using Power
              BI and Tableau, enabling real-time insights and improved
              efficiency.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <img src={Panjab} />
          <div className="text-box">
            <h2>Panjab University</h2>
            <small>July 2015 – May 2020</small>
            <p>
              BSc Chemical Engineering with MBA • Project Management, Financial
              Accounting and Management, Business Analytics and
              Intelligence,Process Control and Automation,Chemical Process
              Systems and Control,Engineering Economics
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
