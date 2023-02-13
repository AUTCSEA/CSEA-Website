import styles from "./AboutPage.module.css";
import MainImage from "../../../public/images/bg-main.jpg";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import aboutData from "./data/aboutData.js";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <h1 className={styles.header}>Meet the executive team!</h1>
      </div>
      <div className={styles.membersContainer}>
        <div className={styles.cardsWrapper}>
          {aboutData.map((member) => {
            return (
              <AvatarCard
                name={member.name}
                position={member.position}
                linkedin={member.linkedin}
                image={member.imgPath}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
