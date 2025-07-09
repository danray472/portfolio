import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLaptopCode, faProjectDiagram, faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const closeMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = [
        { id: 'about', offset: 0 },
        { id: 'skills', offset: 0 },
        { id: 'projects', offset: 0 },
        { id: 'contact', offset: 0 },
        { id: 'cv', offset: 0 },
      ];
      let found = 'home';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            found = sections[i].id;
          }
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const handleLinkClick = () => {
    setNav(false);
  };

  const isHomePage = window.location.pathname === '/portfolio/' || window.location.pathname === '/portfolio' || window.location.pathname === '/';

  return (
    <>
      {/* Top bar: Only logo and name on mobile, full nav on desktop */}
      <div
        className={`lg:fixed top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300 ${
          scrolled
            ? 'bg-black/0 backdrop-blur-xl shadow-lg h-[70px] text-lg text-rose-50'
            : 'bg-transparent h-[100px] text-2xl text-white'
        }`}
      >
      <div className="flex items-center mx-3 sm:ml-[10px] md:ml-[80px]">
  <a
    href={isHomePage ? '#home' : '/portfolio'}
    className="flex flex-row items-center space-x-2"
    onClick={handleLinkClick}
  >
    <img
      src={logo}
      alt="Logo"
      className="h-8 w-8 mr-2 sm:mr-4 sm:h-14 sm:w-14 rounded-md mt-2"
    />
    <div>
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-5xl font-bold gradient-text leading-[1.2] pb-2">
        Dancan Ongong'o
      </h1>
      <p className="text-sm sm:text-base text-gray-500 italic md:mt-[-6px]">
        Full-Stack Developer Portfolio
      </p>
    </div>
  </a>
</div>


        {/* Desktop nav links */}
        <ul className={`hidden lg:flex mr-20 lg:text-base xl:text-xl`}> {/* Show only on desktop (lg and up) with smaller font on lg */}
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
                <a href="/portfolio/cv.html" onClick={handleLinkClick}>View My CV</a>
              </li>
            </>
          ) : (
            <li className='p-3 flex items-center'>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              <a href="/portfolio/" onClick={handleLinkClick}>Home</a>
            </li>
          )}
        </ul>

        {/* Hamburger menu for mobile (removed for new bottom nav) */}
        <div className="flex items-center sm:hidden"></div>
      </div>

      {/* Bottom Tab Bar for Mobile/Tablet Only */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center py-4 px-2 backdrop-blur-xl bg-white/5 border-t border-white/20 shadow-lg" style={{backdropFilter: 'blur(16px)'}}>
        <a href="#about" className={`flex flex-col items-center text-xs transition-all ${activeSection === 'about' ? 'text-[#f97316]' : 'text-white'}`}> 
          <FontAwesomeIcon icon={faUser} size="lg" />
          <span className="font-bold">About</span>
        </a>
        <a href="#skills" className={`flex flex-col items-center text-xs transition-all ${activeSection === 'skills' ? 'text-[#f97316]' : 'text-white'}`}> 
          <FontAwesomeIcon icon={faLaptopCode} size="lg" />
          <span className="font-bold">Skills</span>
        </a>
        <a href="#projects" className={`flex flex-col items-center text-xs transition-all ${activeSection === 'projects' ? 'text-[#f97316]' : 'text-white'}`}> 
          <FontAwesomeIcon icon={faProjectDiagram} size="lg" />
          <span className="font-bold">Projects</span>
        </a>
        <a href="#contact" className={`flex flex-col items-center text-xs transition-all ${activeSection === 'contact' ? 'text-[#f97316]' : 'text-white'}`}> 
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          <span className="font-bold">Contact</span>
        </a>
        <a href="/portfolio/cv.html" className={`flex flex-col items-center text-xs transition-all ${activeSection === 'cv' ? 'text-[#f97316]' : 'text-white'}`}> 
          <FontAwesomeIcon icon={faUser} size="lg" />
          <span className="font-bold">My CV</span>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
