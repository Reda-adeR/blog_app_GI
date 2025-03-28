import React from 'react';
import './Footer.css';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="footer-bottom">
        <p>© Made by Pawel Gola - Powered by Webflow</p>
        <div id="social-icons">

        <FaFacebook size={40} />
        <FaTwitter size={40} />
        <FaInstagram size={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

