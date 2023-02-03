import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/Transparent_CSEA.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='logoSocialsContainer'>
        <div>
          <img src={Logo} alt='Logo' className='logo' />
        </div>

        <div className='socialsWrapper'>
          <a href='https://www.instagram.com/autcsea/'>
            <InstagramIcon className='socialIcon' />
          </a>
          <a href='https://www.facebook.com/AUTCSEA'>
            <FacebookIcon className='socialIcon' />
          </a>
          <a href='https://www.linkedin.com/company/autcsea/mycompany/'>
            <LinkedInIcon className='socialIcon' />
          </a>
        </div>
      </div>

      <div className='linksWrapper'>
        <ul>
          <li>Go to top</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
