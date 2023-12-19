import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <a href={props.source}><img src={props.imgsrc} alt="" /></a>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {/* <NavLink to={props.view} className="btn">
            View
          </NavLink> */}
          <a href={props.source} className="btn">
            <BsGithub /> &nbsp;
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
