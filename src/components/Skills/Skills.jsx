import Java from "../../assets/Java.svg";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Python from "../../assets/Python.svg";
import JavaScript from "../../assets/Javascript.svg";
import TypeScript from "../../assets/Typescript.svg"; 
import React from "../../assets/React.svg";
import Angular from "../../assets/Angular.svg"; 
import NodeJS from "../../assets/Nodejs.svg";
import Spring from "../../assets/Spring.svg";
import Express from "../../assets/Express.svg";
import Django from "../../assets/Django.svg";
import Flask from "../../assets/Flask.svg";
import MySQL from "../../assets/MySQL.svg";
import PostgresSQL from "../../assets/PostgresSQL.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Redis from "../../assets/Redis.svg"; 
import AWS from "../../assets/AWS.svg";
import Azure from "../../assets/Azure.svg";
import Terraform from "../../assets/Terraform.svg";
import Docker from "../../assets/Docker.svg";
import Kubernetes from "../../assets/Kubernetes.svg";
import Jenkins from "../../assets/Jenkins.svg";
import Git from "../../assets/Git.svg";

import "./Skills.css"; // Import CSS file
import "../../assets/AWS.svg"

const Skills = () => {
  return (
    <div className="skills-section">
      <h1 className="section-title">Skills</h1>
      <div className="skills-container">
        
        <div className="skills-box">
          <h2>Programming Languages</h2>
          <div className="skills-list">
            <span><img src={Java} /> Java</span>
            <span><img src={Python}/> Python</span>
            <span><img src={JavaScript}  /> JavaScript</span>
            <span><img src={TypeScript}/> TypeScript</span>
          </div>
        </div>

        <div className="skills-box">
          <h2>Web Development</h2>
          <div className="skills-list">
            <span><img src={React}  /> React.js</span>
            <span><img src={Angular} /> Angular</span>
            <span><img src={NodeJS}/> Node.js</span>
            <span><img src={HTML}  /> HTML</span>
            <span><img src={CSS}  /> CSS</span>
          </div>
        </div>

        <div className="skills-box">
          <h2>Backend Technologies</h2>
          <div className="skills-list">
            <span><img src={Spring} /> Spring</span>
            <span><img src={Express}  /> Express.js</span>
            <span><img src= {Django} /> Django</span>
            <span><img src={Flask}/> Flask</span>
          </div>
        </div>

        <div className="skills-box">
          <h2>Databases</h2>
          <div className="skills-list">
            <span><img src={MySQL} /> MySQL</span>
            <span><img src={PostgresSQL}  /> PostgreSQL</span>
            <span><img src={MongoDB} /> MongoDB</span>
            <span><img src={Redis}  /> Redis</span>
          </div>
        </div>

        <div className="skills-box">
          <h2>Cloud & DevOps</h2>
          <div className="skills-list">
            <span><img src={AWS}  /> AWS</span>
            <span><img src={Azure} /> Azure</span>
            <span><img src={Terraform}  /> Terraform</span>
            <span><img src={Docker} /> Docker</span>
            <span><img src={Kubernetes} /> Kubernetes</span>
            <span><img src={Jenkins} /> Jenkins</span>
            <span><img src={Git}  /> Git </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
