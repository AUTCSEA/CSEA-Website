import React from "react";
import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/images/Orange_CSEA.png";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="navbarCont">
        <Link to={"/"}>
          <img src={logo} className="logo"></img>
        </Link>

        <div className="linksWrapper">
          <ul>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive && "active"}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sponsors"
                className={({ isActive }) => isActive && "active"}
              >
                Sponsors
              </NavLink>
            </li>
            <li>
              <Link to="">Events</Link>
            </li>
            <li>
              <Link to="">Become a member</Link>
            </li>
          </ul>
        </div>
        <div className="iconWrapper">
          <a>
            <MenuIcon
              style={{ color: "white", fontSize: "35px" }}
              className="icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
