import React, { useState } from 'react';
import "./navigation.css";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { FaAward } from "react-icons/fa";

const Navigation = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a 
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      
      <a 
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}><BiBook /></a>
      
      <a 
        href='#recognitions'
        onClick={() => setActiveNav('#recognitions')}
        className={activeNav === '#recognitions' ? 'active' : ''}><FaAward /></a>
      
    </nav>
  )
}

export default Navigation;