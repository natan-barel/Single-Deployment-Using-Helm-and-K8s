import "./FooterStyles.css";

import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="info">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Tel Mond</p>
              <p>Israel</p>
            </div>
          </div>
          <div className="info">

            <FaPhone
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>
              0547411773
            </p>
          </div>
          <div className="info">

            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <p>
              natan.barel@outlook.co.il
            </p>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is me - Natan Barel.
          </p>
          <p>
            Reach me out HERE:
          </p>
          <div className="social">
            <a href="https://www.facebook.com/natan.barel/">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/natan-barel/">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/natan-barel/">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
