import MainImage from "../../assets/images/MainScreen-Image.jpg";

import Carousel from "../../components/Carousel/Carousel";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <img src={MainImage} className={styles.image} />
        <div className={styles.mission}>
          <div className={styles.bar}></div>
          <h3>Connecting students with the industry</h3>
        </div>
      </div>
      <div className={styles.title}>
        <h2>Computer Science & Engineering Association</h2>
      </div>
      <Carousel />
    </>
  );
};

export default LandingPage;
