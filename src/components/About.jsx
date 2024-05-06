import React from 'react';
import myImage from '../assets/myImage.png'; // Import your image
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  // Function to handle the download event
  const handleDownloadCV = () => {
    // You can add custom logic here if needed
    console.log('CV downloaded');
  };

  return (
    <div className="container mx-auto p-8" id="about">
      <h2 className="text-2xl font-mono italic font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src={myImage} alt="profile" className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0" /> {/* Adjust the width and styling as needed */}
        
        <div className='col-span-2 px-5 my-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
            <span className='text-[#ef4444] font-medium font-mono italic'>Hi,</span>
            <br />
            <span className='text-[#ef4444] font-sans italic'>I'm a</span>
            <br/>
            <TypeAnimation
              sequence={[
                "Software engineer",
                1000,
                "Full-stack developer",
                1000,
                "React Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity} 
            />
          </h1>
        </div>
      </div>

      {/* Move the info section outside the flex container */}
      <div className="about-info">
        <p className='sm:text-lg my-6 lg:text-xl italic'>
          My name is Dan, a motivated software developer
        </p>

        <div className='my-8'></div>
        {/* Download CV button */}
        <a href="resume.pdf" download="Dan_CV.pdf" onClick={handleDownloadCV} className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500'>
             Download CV
        </a>
        <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none'>
          Contact
        </a>
      </div>
    </div>
  );
};

export default About;
