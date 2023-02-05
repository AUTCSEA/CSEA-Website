import ReactDOM from "react-dom";

import styles from "./MobileNav.module.css";

const MobileNav = (props) => {
  const content = <div className={styles.mobileNav}>{props.children}</div>;

  return ReactDOM.createPortal(content, document.getElementById("mobile-nav"));
};

export default MobileNav;
