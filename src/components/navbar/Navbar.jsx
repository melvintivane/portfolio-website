import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('');
  
  const sectionOffsets = {
    home: 0,
    about: 639,
    experience: 1386,
    services: 1990,
    contact: 2704,
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    for (const section in sectionOffsets) {
      if (scrollPosition >= sectionOffsets[section]) {
        setActiveNav(section);
        console.log(section)
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="#home" className={activeNav === 'home' ? 'active' : ''}> <AiOutlineHome /> </a>
      <a href="#about" className={activeNav === 'about' ? 'active' : ''}> <AiOutlineUser /> </a>
      <a href="#experience" className={activeNav === 'experience' ? 'active' : ''}> <BiBook /> </a>
      <a href="#services" className={activeNav === 'services' ? 'active' : ''}> <RiServiceLine /> </a>
      <a href="#contact" className={activeNav === 'contact' ? 'active' : ''}> <BiMessageSquareDetail /> </a>
    </nav>
  )
};

export default Nav;