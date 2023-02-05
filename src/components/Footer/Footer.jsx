import React from "react";
import Logo from "../../assets/images/Transparent_CSEA.png";

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
        <li className={styles.link}>Go to top</li>
        <li className={styles.link}>About us</li>
        <li className={styles.link}>Contact</li>
      </ul>
    </div>
  );
};

export default Footer;
