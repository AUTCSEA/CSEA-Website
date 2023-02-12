import React from "react";
import { Link } from "react-router-dom";

import Logo from "/images/Transparent_CSEA.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoSocials}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        <div className={styles.socialIcons}>
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

      <ul className={styles.linksList}>
        <li className={styles.link}>
          <a className={styles.footerLink} href="#nav">
            Go to top
          </a>
        </li>
        <li className={styles.link}>
          <Link className={styles.footerLink} to="/about">
            About us
          </Link>
        </li>
        <li className={styles.link}>
          <Link className={styles.footerLink} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
