import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faProjectDiagram, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = (e) => {
    e.stopPropagation();
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const preventClose = (e) => {
    e.stopPropagation();
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const isHomePage = window.location.pathname === '/portfolio/' || window.location.pathname === '/portfolio' || window.location.pathname === '/';

  return (
    <div
      className={`${
        scrolled
          ? 'fixed bg-black/0 backdrop-blur-xl shadow-lg h-[70px] text-lg text-rose-50'
          : 'relative bg-transparent h-[100px] text-2xl text-white'
      } top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300`}
    >
      <div className="flex items-center mx-3 sm:ml-[10px] md:ml-[80px]">
        <a href={isHomePage ? '#home' : '/portfolio'} className="flex items-center space-x-2" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2 sm:mr-4 sm:h-14 sm:w-14 rounded-md" />
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold gradient-text text-color'>
            M. Dan.Developer
          </h1>
        </a>
      </div>

      <div className="flex items-center">
        <div onClick={handleNav} className='block md:hidden mr-4'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} className='primary-color rounded-md' />}
        </div>
      </div>

      <ul className={`${nav ? 'hidden' : 'hidden md:flex mr-20'}`}>
        {isHomePage ? (
          <>
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <a href="#about" onClick={handleLinkClick}>About</a>
            </li>
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
              <a href="#skills" onClick={handleLinkClick}>Skills</a>
            </li>
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
            </li>
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <a href="/portfolio/cv.html" onClick={handleLinkClick}>CV</a>
            </li>
          </>
        ) : (
          <li className='p-3 flex items-center'>
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            <a href="/portfolio/" onClick={handleLinkClick}>Home</a>
          </li>
        )}
      </ul>

      <div className={nav ? 'fixed top-[70px] left-0 w-60% ease-in-out duration-500 primary-color z-10 text-black rounded-md' : 'fixed left-[-100%]'}>
        <ul className='p-8 text-2xl mt-6 rounded-x' onClick={preventClose}>
          {isHomePage ? (
            <>
              <li className='p-2 flex items-center'>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <a href="#about" onClick={handleLinkClick}>About</a>
              </li>
              <li className='p-2 flex items-center'>
                <FontAwesomeIcon icon={faLaptopCode} className="mr-2" />
                <a href="#skills" onClick={handleLinkClick}>Skills</a>
              </li>
              <li className='p-2 flex items-center'>
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                <a href="#projects" onClick={handleLinkClick}>Projects</a>
              </li>
              <li className='p-2 flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <a href="#contact" onClick={handleLinkClick}>Contact</a>
              </li>
              <li className='p-2 flex items-center'>
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                <a href="/portfolio/cv.html" onClick={handleLinkClick}>CV</a>
              </li>
            </>
          ) : (
            <li className='p-2 flex items-center'>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              <a href="/portfolio/" onClick={handleLinkClick}>Home</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
