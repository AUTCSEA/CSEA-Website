import React from "react";
import styles from "./EventCard.module.css";
import CSEA from "../../../public/images/CSEA_logo.png";

const EventCard = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={props.image || CSEA} className={styles.image}></img>
        <div className={styles.dateOverlay}>
          <h1>{props.day && props.month && props.date ? props.day : "TBA"}</h1>
          <p>{props.month && props.day && props.date ? props.month : ""}</p>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <h3 className={styles.date}>{props.date || "TBA"}</h3>
        <h1 className={styles.title}>{props.title}</h1>

        {props.date && props.postURL ? (
          <a className={styles.buttonAnchor} href={props.postURL}>
            <button className={styles.eventButton}>Learn more</button>
          </a>
        ) : (
          <button className={styles.eventButton} disabled>
            Learn more
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
