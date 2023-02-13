import React from "react";
import styles from "./AvatarCard.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InfoIcon from '@mui/icons-material/InfoOutlined';const AvatarCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
      <InfoIcon
        sx={{ color: "white" }}
        fontSize="medium"
        className={styles.infoLogo}
      />
        <div className={styles.overlay}>
          <h1 className={styles.nameHeader}>{props.name}</h1>
          <h2 className={styles.positionHeader}>{props.position}</h2>
          <a href={props.linkedin} target="_blank" className={styles.link}>
            <LinkedInIcon
              sx={{ color: "black" }}
              fontSize="large"
              className={styles.logo}
            />
          </a>
        </div>
        <img src={props.image} className={styles.image} />
      </div>
    </div>
  );
};

export default AvatarCard;
