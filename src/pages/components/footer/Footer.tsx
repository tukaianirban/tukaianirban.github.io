import React from 'react';
import './footer.css';
import { FaTwitter } from 'react-icons/fa';
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="footer__socials">
        <a href="https://twitter.com/TukaiAnirban"><FaTwitter /></a>
        <a href="https://github.com/tukaianirban"><BsGithub /></a>
        <a href="https://tukaianirban.medium.com"><BsMedium /></a>
        <a href="https://www.linkedin.com/in/anirban-mukherjee-28601123/"><BsLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Anirban Mukherjee. All rights reserved </small>
      </div>
      
    </footer>
  )
}

export default Footer;