import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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
      setScrolled(window.scrollY > 50); // Adjust this scroll value as needed
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

  return (
    <div
      className={`${
        scrolled
          ? 'fixed bg-white/60 backdrop-blur-md shadow-lg h-[70px] text-lg'
          : 'relative bg-transparent h-[100px] text-2xl'
      } top-0 left-0 w-full z-50 flex justify-between items-center transition-all duration-300`}
    >
      {/* Name on the left */}
      <h1 className='font-bold mx-3 sm:ml-[10px] md:ml-[80px] gradient-text text-color'>
        M. Dan
      </h1>

      {/* Menu icon on the right */}
      <div className="flex items-center">
        <div onClick={handleNav} className='block md:hidden mr-4'>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} className='primary-color rounded-md'/>}
        </div>
      </div>
      
      {/* Conditionally render links based on the nav state */}
      <ul className={`${nav ? 'hidden' : 'hidden md:flex mr-20'}`}>
        <li className='p-3'><a href='#about' onClick={handleLinkClick}>About</a></li>
        <li className='p-3'><a href='#skills' onClick={handleLinkClick}>Skills</a></li>
        <li className='p-3'><a href='#projects' onClick={handleLinkClick}>Projects</a></li>
        <li className='p-3'><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
      </ul>
    
      <div className={nav ? 'fixed top-[70px] left-0 w-60% ease-in-out duration-500 primary-color z-10 text-black rounded-md' : 'fixed left-[-100%]'}>
  {/* Add event listener to prevent menu from closing when clicking inside */}
  <ul className='p-8 text-2xl mt-6 rounded-x' onClick={preventClose}>
    <li className='p-2'><a href='#about' onClick={handleLinkClick}>About</a></li>
    <li className='p-2'><a href='#projects' onClick={handleLinkClick}>Projects</a></li>
    <li className='p-2'><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
