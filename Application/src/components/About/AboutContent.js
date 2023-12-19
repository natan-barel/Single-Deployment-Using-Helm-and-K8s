import "./AboutContentStyles.css";

import React from "react";
import { Link } from "react-router-dom";
import React1 from "../../assets/react1.jpg";
import React2 from "../../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          A passionate Software and Devops Engineer from Israel | (B.sc.) Computer Science.
        </p>
        <p>
          With over six years of dynamic experience in the tech industry, I pride myself on being a versatile software developer with a passion for problem-solving and innovation. My journey has exposed me to various programming languages and technologies including JavaScript (ES6), TypeScript, NodeJs, Bash, Python, MongoDB, K8s, Terraform, Ansible, AWS, Angular, ReactJS and many more. Whether developing for cloud or on-premise, I have consistently delivered high-quality solutions tailored to specific needs.
        </p>
        <p>
          With a strong commitment to continuous learning and a keen understanding of automation, networking, integration, deployment pipelines,

          cloud and infrastructure as code, I am eager to deliver seamless, scalable solutions.
        </p>
        <p>
          By combining my software engineering background with a strong proficiency in DevOps methodologies, Cloud environment and CI/CD

          tools, I am dedicated to fostering collaboration across teams and optimizing software delivery practices for enhanced product performance and user satisfaction.
        </p>
        <p>
          In my extensive engagements with AWS, I've undertaken comprehensive roles that span from the nascent stage of design to robust implementation, ensuring projects are created and thrive in the real world. My commitment to continuous improvement is reflected in the diligent refinements I bring – whether it’s rectifying bugs, refactoring legacy systems, or breathing fresh life into dated code.

          I remain committed to integrating cutting-edge techniques with proven methodologies in an ever-evolving tech landscape, driving personal and organizational growth. I'm always eager to collaborate with like-minded professionals and forward-thinking organizations to bring the next big idea to life.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
