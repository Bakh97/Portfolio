import Booz from "../../assets/booz.png";
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
          <img src={Booz} />
          <div className="text-box">
            <h2>Allen Booz Hamilton</h2>
            <small>June 2024 -present</small>
            <p>
              Developed scalable enterprise solutions, improving efficiency by
              30%. Optimized AWS infrastructure, cutting costs by 25%. Built
              microservices, reducing latency by 40%. Led CI/CD automation,
              cutting deployment time to 30 minutes.
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
