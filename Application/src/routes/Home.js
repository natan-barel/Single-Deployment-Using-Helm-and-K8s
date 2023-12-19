import React from "react";
import HeroImg from "../components/Images/HeroImg";
import Work from "../components/Projects/Work";
import AboutContent from "../components/About/AboutContent";

const Home = () => {
  return (
    <div>
      <HeroImg />
      <AboutContent />
      <Work />
    </div>
  );
};

export default Home;
