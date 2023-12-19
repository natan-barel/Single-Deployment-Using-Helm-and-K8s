import React from "react";
import HeroImg2 from "../components/Images/HeroImg2";
import AboutContent from "../components/About/AboutContent";
import TechStackContent from "../components/TechStack/TechStack";

const About = () => {
  return (
    <div>
      <HeroImg2 heading="ABOUT" text="Im a friendly Front-End Developer" />
      <AboutContent />
      <TechStackContent />
    </div>
  );
};

export default About;
