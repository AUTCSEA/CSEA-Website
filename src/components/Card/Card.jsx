import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${styles.card} ${styles[props.style]}`}>
      <div className={styles.image}></div>
      <img src={props.image} alt={props.alt} />
      <h3 className={styles.title}>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
