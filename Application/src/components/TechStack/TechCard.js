import "./TechStackStyles.css";

import React from "react";

const TechCard = (props) => {
    return (
        <div className="tech-item">
            <div className="logo">
                <img src={props.imgsrc}></img>
            </div>
            <div className="title">
                {props.title}
            </div>
        </div>
    );
};

export default TechCard;
