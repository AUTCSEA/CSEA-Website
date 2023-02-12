import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const LandingPage = () => {
  return (
    <>
      {/* Top image */}
      <div className={styles.imageContainer}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          src={MainImage}
          className={styles.image}
        />
        <motion.div
          className={styles.mission}
          initial={{ opacity: 0, scale: 0.5, bottom: "40%" }}
          animate={{
            opacity: 1,
            scale: 1,
            bottom: window.innerWidth < 769 ? "5%" : "30%",
          }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.bar} />
          <div className={styles.barText}>
            <h2 className={styles.brand}>
              Computer Science & Engineering Association
            </h2>
            <h3 style={{ fontWeight: "500" }}>
              Connecting students with the industry
            </h3>
          </div>
        </motion.div>
      </div>

      {/* What we do */}
      <div className={styles.container}>
        <h1 className={styles.title}>What we do?</h1>
        <p className={styles.description}>
          We are a student run club for AUT but any students from other
          education are welcome!
        </p>
        <motion.div
          className={styles.grid}
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          <motion.div variants={item}>
            <Card
              title="Host Events"
              image={Event}
              style="primary"
              description="We regularly host events with the help from our sponsors. 
            These events include hackathons, workshops and talk shows"
            />
          </motion.div>
          <motion.div variants={item}>
            <Card
              title="Meet experts from industry"
              style="secondary"
              image={Coach}
              description="We invite many experts to our events. Students get a chance to interact
            with our hosts and gain knowledge about the software industry"
            />
          </motion.div>
          <motion.div variants={item}>
            <Card
              title="Gain future insights"
              style="primary"
              image={Brain}
              description="From attending the events and meeting experts, our students
            get a better knowledge and insights about the software engineering industry."
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Become a member */}
      <motion.div
        className={styles.memberContainer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className={styles.memberTitle}>
          <h1>Become a member!</h1>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Get notified for our events and workshops
          </p>
          <Button
            title="Join Us"
            onClick={() => {
              window.location.href = "https://forms.gle/XoN5LsgsrqH6SkX28";
            }}
          />
        </div>

        <img className={styles.exec} src={Execs} alt="CSEA Executives" />
      </motion.div>

      {/* Sponsors */}
      <div className={styles.sponsorContainer}>
        <h1 className={styles.sponsorTitle}>Our Sponsors</h1>
        <p className={styles.subtitle}>
          We are proud to share our sponsors for 2023
        </p>
        <motion.div
          className={styles.sponsorImageContainer}
          initial={{ opacity: 0, borderRadius: "50%" }}
          whileInView={{ opacity: 1, borderRadius: 0 }}
          transition={{ delay: 0.25 }}
        >
          <img
            className={styles.sponsors}
            src={Sponsors}
            alt="2023 CSEA Sponsors"
          />
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
