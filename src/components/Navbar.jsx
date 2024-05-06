import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=' text-black-800 h-[100px] max-w-full mx-auto flex justify-between items-center relative'>
      {/* Name on the left */}
      <h1 className='text-3xl font-bold mx-3 sm:ml-[10px] md:ml-[80px] text-[#ef4444]'>M. Dan</h1>

      {/* Menu icon on the right */}
      <div className="flex items-center">
        <div onClick={handleNav} className='block md:hidden mr-4'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      
      {/* Conditionally render links based on the nav state */}
      {!nav && (
        <ul className='hidden md:flex mr-20'>
          <li className='p-5'><a href='#about'>About</a></li>
          <li className='p-5'><a href='#skills'>Skills</a></li>
          <li className='p-5'><a href='#projects'>Projects</a></li>
          <li className='p-5'><a href='#contact'>Contact</a></li>
        </ul>
      )}
    
      <div className={nav ? 'fixed h-[40%]  left-0 top-0 w-[50%]   ease-in-out duration-500 bg-black text-white' : ' fixed left-[-100%]'}>
       
        
        <ul className='p-8 text-2xl mt-6 rounded-x'>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#projects'>Projects</a></li>
          <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
