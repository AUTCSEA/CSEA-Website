import MainImage from "../../assets/images/MainScreen-Image.jpg";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <div className={styles.mission}>
          <h3>Connecting students with the industry</h3>
        </div>
        <img src={MainImage} className={styles.image} />
      </div>
    </>
  );
};

export default LandingPage;
