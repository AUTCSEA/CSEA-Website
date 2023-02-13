import styles from "./Events.module.css";
import EventCard from "../../components/EventCard/EventCard";
import eventsData from "./data/eventsData.js";
// import { motion } from "framer-motion";

const Events = () => {
  return (
    <>
      <div className={styles.imageContainer}>
        <h1 style={{ color: "white" }}>Upcoming Events</h1>
      </div>
      <div className={styles.eventsContainer}>
        <div className={styles.cardsWrapper}>
          {eventsData.map((event) => {
            return (
              <EventCard
                title={event.title}
                date={event.date}
                day={event.day}
                month={event.month}
                postURL={event.postURL}
                image={event.imgPath}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Events;
