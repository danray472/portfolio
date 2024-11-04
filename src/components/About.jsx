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
            <span className='gradient-text font-medium font-mono italic'>Hi,</span>
            <br />
            <span className='gradient-text font-sans italic'>I'm a</span>
            <br />
            <div className="type-animation-container relative" style={{ height: '5rem' }}> {/* Adjust height as needed */}
              <TypeAnimation className='gradient-text absolute'
                sequence={[
                  "Software engineer",
                  1000,
                  "Full-stack developer",
                  5000,
                ]}
                wrapper="span"
                speed={30}
                repeat={Infinity} 
              />
            </div>
          </h1>
        </div>
      </div>

      {/* Move the info section outside the flex container */}
      <div className="about-info mt-24 sm:mt-32 md:mt-40 lg:mt-48">
        <p className='text-base sm:text-lg my-6 lg:text-xl font-sans italic'>
        I'm Dan, a driven Software Engineer competent in MERN stack development. With expertise in both front-end and back-end technologies like React.js, Node.js, and MongoDB, I thrive on tackling challenges and delivering top-notch solutions.

My passion for problem-solving and technology fuels my dedication to continuously learn and grow. I excel in collaborative environments, communicate effectively, and am committed to exceeding expectations.

As a MERN stack developer, I'm determined to push boundaries and contribute to impactful projects. Let's create something amazing together.
        </p>
      </div>

      <div className='flex justify-center'>
        {/* Download CV button */}
        <a href="resume.pdf" download="Dan_CV.pdf" onClick={handleDownloadCV} className='lg:mx-4 px-4 py-2 md:px-6 md:py-3 rounded-xl mr-2 bg-gradient-to-br from-orange-500 to-pink-500'>
          Download CV
        </a>
        <a href="#contact" className='lg:mx-32 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none'>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default About;
