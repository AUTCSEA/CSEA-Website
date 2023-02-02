import React from 'react';
import './Navbar.css';
import logo from '../assets/images/Orange_CSEA.png';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='navbarCont'>
        <img src={logo} className='logo'></img>

        <div className='linksWrapper'>
          <ul>
            <li>
              <a href=''>About Us</a>
            </li>
            <li>
              <a href=''>Sponsors</a>
            </li>
            <li>
              <a href=''>Events</a>
            </li>
            <li>
              <a href=''>Become a member</a>
            </li>
          </ul>
        </div>
        <div className='iconWrapper'>
            <a>
            <MenuIcon style={{"color": "white", "font-size": "35px"}} className='icon' />

            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
