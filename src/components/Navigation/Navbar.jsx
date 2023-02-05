import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/Orange_CSEA.png";

import MobileNav from "./MobileNav";

import styles from "./Navbar.module.css";
import Backdrop from "../Backdrop";

const Navbar = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const openMobileNav = () => {
    setShowMobileNav(true);
  };
  const closeMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <>
      {showMobileNav && (
        <MobileNav>
          <ul className={styles.mobileOverlay}>
            <li className={styles.listItem}>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive && styles.active}
                onClick={closeMobileNav}
              >
                About Us
              </NavLink>
            </li>
            <li className={styles.listItem}>
              <Link
                to=""
                className={({ isActive }) => isActive && styles.active}
                onClick={closeMobileNav}
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
        </MobileNav>
      )}
      {showMobileNav && <Backdrop close={closeMobileNav} />}
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
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className={styles.listItem}>
                <Link
                  to=""
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
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

          {/* Mobile Nav */}
          <div className={styles.iconWrapper}>
            <MenuIcon
              style={{ color: "white", fontSize: "35px" }}
              className={styles.icon}
              onClick={openMobileNav}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;