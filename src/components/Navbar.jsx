import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  // Function to toggle the menu
  const handleNav = (e) => {
    e.stopPropagation(); // Prevent event from propagating to parent elements
    setNav(!nav);
  };

  // Function to close the menu when clicking outside
  const closeMenu = () => {
    setNav(false);
  };

  useEffect(() => {
    // Add event listener to close menu when clicking outside
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  // Function to prevent menu from closing when clicking inside the menu
  const preventClose = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up to document
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setNav(false);
  };

  return (
    <div className='text-black-800 h-[100px] max-w-full mx-auto flex justify-between items-center relative'>
      {/* Name on the left */}
      <h1 className='text-3xl font-bold mx-3 sm:ml-[10px] md:ml-[80px] gradient-text text-color'>M. Dan</h1>

      {/* Menu icon on the right */}
      <div className="flex items-center">
        <div onClick={handleNav} className='block md:hidden mr-4'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={25} className='primary-color'/>}
        </div>
      </div>
      
      {/* Conditionally render links based on the nav state */}
      {!nav && (
        <ul className='hidden md:flex mr-20'>
          <li className='p-5'><a href='#about' onClick={handleLinkClick}>About</a></li>
          <li className='p-5'><a href='#skills' onClick={handleLinkClick}>Skills</a></li>
          <li className='p-5'><a href='#projects' onClick={handleLinkClick}>Projects</a></li>
          <li className='p-5'><a href='#contact' onClick={handleLinkClick}>Contact</a></li>
        </ul>
      )}
    
      <div className={nav ? 'fixed h-[40%] left-0 top-0 w-[50%] ease-in-out duration-500 primary-color z-10 fixed rounded-md text-white' : 'fixed left-[-100%]'}>
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
