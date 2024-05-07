import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='p-5 flex justify-between items-center mx-auto bg-black w-full rounded-lg'>
      <div className='bg-gray-600 flex items-center justify-between w-full px-3 rounded-sm'>
      <span className='text-white'>M. Dan</span>
      <div className='flex gap-4'>
        <a href='https://wa.me/254739798820' target='_blank' rel='noopener noreferrer' className='text-white'>
          <FaWhatsapp size={24} />
        </a>
        <a href='https://github.com/danray472' target='_blank' rel='noopener noreferrer' className='text-white'>
          <FaGithub size={24} />
        </a>
        <a href='https://linkedin.com/in/dan-ray-b5695a241/' target='_blank' rel='noopener noreferrer' className='text-white'>
          <FaLinkedin size={24} />
        </a>
      </div>
      <p className='bg-gray-600 text-white'>danray472@gmail.com <br /> #SoftwareEngineer2024</p>
    </div>
    </div>
  );
};

export default Footer;
