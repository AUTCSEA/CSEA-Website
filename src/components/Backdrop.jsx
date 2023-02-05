import ReactDOM from "react-dom";

import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.close}></div>,
    document.getElementById("backdrop")
  );
};

export default Backdrop;
