import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

// Images
import MainImage from "/images/bg-main.jpg";
import Sponsors from "/images/2023-Sponsors.png";
import Execs from "/images/execs.jpg";

// Icons
import Event from "/icons/event.png";
import Coach from "/icons/coach.png";
import Brain from "/icons/brain.png";

import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <>
      {/* Top image */}
      <div className={styles.imageContainer}>
        <img src={MainImage} className={styles.image} />
        <div className={styles.mission}>
          <div className={styles.bar}></div>
          <div className={styles.barText}>
            <h2 className={styles.brand}>
              Computer Science & Engineering Association
            </h2>
            <h3 style={{ fontWeight: "normal" }}>
              Connecting students with the industry
            </h3>
          </div>
        </div>
      </div>

      {/* What we do */}
      <div className={styles.container}>
        <h1 className={styles.title}>What we do?</h1>
        <p>
          We are a student run club for AUT but any students from other
          education are welcome!
        </p>
        <div className={styles.grid}>
          <Card
            title="Host Events"
            image={Event}
            style="primary"
            description="We regularly host events with the help from our sponsors. 
            These events include hackathons, workshops and talk shows"
          />
          <Card
            title="Meet experts from industry"
            style="secondary"
            image={Coach}
            description="We invite many experts to our events. Students get a chance to interact
            with our hosts and gain knowledge about the software industry"
          />
          <Card
            title="Gain future insights"
            style="primary"
            image={Brain}
            description="From attending the events and meeting experts, our students
            get a better knowledge and insights about the software engineering industry."
          />
        </div>
      </div>

      {/* Become a member */}
      <div className={styles.memberContainer}>
        <div className={styles.memberTitle}>
          <h1>Become a member!</h1>
          <p style={{ marginBottom: "2rem" }}>
            Get notified for our events and workshops
          </p>
          <Button
            title="Join Us"
            onClick={() => {
              window.location.href = "https://forms.gle/XoN5LsgsrqH6SkX28";
            }}
          />
        </div>

        <div className={styles.execImageContainer}>
          <img className={styles.exec} src={Execs} alt="CSEA Executives" />
        </div>
      </div>

      {/* Sponsors */}
      <div className={styles.sponsorContainer}>
        <h1 className={styles.sponsorTitle}>Our Sponsors</h1>
        <h3 className={styles.subtitle}>
          We are proud to share our sponsors for 2023
        </h3>
        <div className={styles.sponsorImageContainer}>
          <img
            className={styles.sponsors}
            src={Sponsors}
            alt="2023 CSEA Sponsors"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
