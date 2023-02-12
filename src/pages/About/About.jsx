import styles from "./About.module.css";
import MainImage from "../../../public/images/bg-main.jpg";
import AvatarCard from "../../components/AvatarCard/AvatarCard";
import aboutData from "./data/aboutData.js";
const About = () => {
  return (
    <>
      {/* <div className={styles.about}> */}
        <div className={styles.imageContainer}>
          {/* <img src={MainImage} className={styles.image}></img> */}
          <h1 style={{"color": "white"}}>Meet the team!</h1>
        </div>
        <div className={styles.membersContainer}>
          {/* <h1>Meet the executive team</h1> */}
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
       {/* </div> */}
    </>
  );
};

export default About;
