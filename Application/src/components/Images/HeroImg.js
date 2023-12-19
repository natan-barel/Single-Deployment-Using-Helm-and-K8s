import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A</p>
        <h1>
          <span>
            <Typewriter words={["Professional Coder.", "Front-End Expert.", "DevOps Engineer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
          </span>
        </h1>
        <div className="links">
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
