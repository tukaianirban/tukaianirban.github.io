import React from 'react'
import {BsLinkedin, BsGithub, BsMedium} from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';

const IntroSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://twitter.com/TukaiAnirban' target="_blank" rel="noreferrer"><FaTwitter /></a>
        <a href='https://www.linkedin.com/in/anirban-mukherjee-28601123/' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.github.com/tukaianirban' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://tukaianirban.medium.com/' target="_blank" rel="noreferrer"><BsMedium /></a>
    </div>
  );
}

export default IntroSocials