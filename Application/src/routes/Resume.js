import React from "react";
import Resume from "../components/Resume/Resume";
import HeroImg2 from "../components/Images/HeroImg2";

const MyResume = () => {
    return (
        <div>
            <HeroImg2 heading="6+ YEARS OF EXPERIENCE" text="My Resume" />
            <Resume />
        </div>
    );
};

export default MyResume;
