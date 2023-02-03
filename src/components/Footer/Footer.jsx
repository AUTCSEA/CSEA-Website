import React from "react";
import Logo from "../../assets/images/Transparent_CSEA.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo__socials">
        <img src={Logo} alt="Logo" className="footer-logo" />

        <div className="footer-social__icons">
          <a href="https://www.instagram.com/autcsea/">
            <InstagramIcon sx={{ color: "black" }} fontSize="medium" />
          </a>
          <a href="https://www.facebook.com/AUTCSEA">
            <FacebookIcon sx={{ color: "black" }} fontSize="medium" />
          </a>
          <a href="https://www.linkedin.com/company/autcsea/mycompany/">
            <LinkedInIcon sx={{ color: "black" }} fontSize="medium" />
          </a>
        </div>
      </div>

      <ul className="footer-links__list">
        <li className="footer-link">Go to top</li>
        <li className="footer-link">About us</li>
        <li className="footer-link">Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
