import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/images/Orange_CSEA.png";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbarCont}>
        <Link to={"/"}>
          <img src={logo} className={styles.logo}></img>
        </Link>

        <div className={styles.linksWrapper}>
          <ul>
            <li className={styles.listItem}>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive && styles.active}
              >
                About Us
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <Link
                to=""
                className={({ isActive }) => isActive && styles.active}
              >
                Sponsors
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="">Events</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="">Become a member</Link>
            </li>
          </ul>
        </div>
        <div className={styles.iconWrapper}>
          <a>
            <MenuIcon
              style={{ color: "white", fontSize: "35px" }}
              className={styles.icon}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
