import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white w-full py-10 px-5 z-10 mt-20">
  {/* Gradient overlay */}
  <div className="absolute -top-6 left-0 w-full h-6 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-[-1]"></div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        
        
        <div className='space-y-3'>
          <h2 className='text-2xl font-semibold'>Dan.developer</h2>
          <p className='text-gray-300'>
            Full-stack software developer with a passion for crafting clean, efficient code and modern web and mobile applications.
          </p>
        </div>
        
        <div className='space-y-3'>
          <h3 className='text-xl font-semibold underline'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400'>
            <li><a href='#about' className='hover:text-white underline'>About</a></li>
            <li><a href='#skills' className='hover:text-white underline'>Skills</a></li>
            <li><a href='#projects' className='hover:text-white underline'>Projects</a></li>
            <li><a href='#contact' className='hover:text-white underline'>Contact</a></li>
            <li><a href='/portfolio/cv.html' className='hover:text-white underline'>View My CV</a></li>
          </ul>
        </div>
        
        
        <div className='space-y-3'>
          <h3 className='text-xl font-semibold animate-pulse'>Contact Info</h3>
          <p className='text-gray-400'>dancanfullstackdev@gmail.com</p>
          <p className='text-gray-400'>#JuniorSoftwareEngineer2025</p>
          <p className='text-gray-400'>Nairobi, Kenya</p>
        </div>
        
       
        <div className='space-y-3'>
          <h3 className='text-xl font-semibold animate-bounce'>Connect</h3>
          <div className='flex gap-4'>
            <a href='https://wa.me/254705756500' target='_blank' rel='noopener noreferrer' className='text-white hover:text-green-500'>
              <FaWhatsapp size={24} />
            </a>
            <a href='https://github.com/danray472' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-500'>
              <FaGithub size={24} />
            </a>
            <a href='https://www.linkedin.com/in/dancan-ongong-o-b5695a241/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-blue-400'>
              <FaLinkedin size={24} />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=dancanfullstackdev@gmail.com" target='_blank' rel='noopener noreferrer' className='text-white hover:text-red-500'>
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

      </div>
      
      
      <div className='text-center text-gray-500 mt-8 text-sm mb-8 md:mb-0'>
        &copy; {new Date().getFullYear()} Dancan Malongo Ongong'o -developer All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
