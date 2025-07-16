import React from 'react';
import myImage from '../assets/myImage.jpeg'; // Import your image
import { TypeAnimation } from 'react-type-animation';
import background from '../assets/background-img.jpg';
// import { Link } from 'react-router-dom'; // No longer needed as we are linking to a static HTML file
// import Navbar from './Navbar'; // Removed to avoid duplicate navbar

const About = () => {

  return (
    <div 
      id="about"
      className="relative bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto p-8 bg-black/5 backdrop-blur-md lg:mt-[100px] scroll-mt-20 lg:scroll-mt-[80px] rounded-lg">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:justify-start sm:ml-8">
          <h2 className="text-2xl font-mono italic font-bold text-rose-50 mb-0 sm:mb-0 flex items-center">
            About Me
            <img 
              src={myImage} 
              alt="profile" 
              className=" sm:inline-block w-16 h-16 rounded-full ml-4 object-cover border-2 border-rose-200 shadow-md" 
            />
          </h2>
        </div>
        
       

          
          <div className='col-span-2 px-5 my-auto'>
          <h1 className=' sm:text-5xl lg:text-6x0.5 md:text-6x0.5 font-extrabold'>
          <span className='text-xl text-rose-50 sm:text-2xl md:text-4xl font-light italic' style={{ fontFamily: 'Caveat, cursive' }}>
          Hello! I'm Dancan — a Full-Stack Developer passionate about crafting innovative, secure, and scalable web and mobile applications. Welcome to my portfolio, where clean code meets thoughtful design and security best practices.
</span>




          <br />
          <br />
          <div className="type-animation-container flex items-center w-[110%] sm:whitespace-nowrap whitespace-normal min-h-[3.5rem]">
  {/* Responsive animation: shorter titles on mobile, full on desktop */}
<span className="block md:hidden flex items-center">
  <TypeAnimation 
    className='gradient-text text-4xl pb-2 pt-2'
    sequence={[
      "Junior Dev",
      2500,
      "",
      700,
      "Software Dev",
      2500,
      "",
      700,
      "Fullstack Dev",
      2500,
      "",
      700,
    ]}
    wrapper="span"
    speed={30}
    repeat={Infinity} 
  />
  <span className="-ml-1 text-4xl text-rose-100 animate-pulse align-baseline">|</span>
</span>
<span className="hidden md:flex items-center">
  <TypeAnimation 
    className='gradient-text md:text-5xl lg:text-7xl'
    sequence={[
      "Junior Developer",
      2500,
      "",
      700,
      "Software Developer",
      2500,
      "",
      700,
      "Fullstack Developer",
      2500,
      "",
      700,
    ]}
    wrapper="span"
    speed={30}
    repeat={Infinity} 
  />
  <span className="-ml-1 md:text-4xl lg:text-6xl text-rose-100 animate-pulse align-baseline">|</span>
</span>
</div>
        </h1>
        </div>
      </div>

      <div className="about-info mx-4 sm:mt-32 md:mx-20 lg:mx-40 sm:mx-5 md:mt-20 lg:mt-20">
        <p className="text-base text-rose-50 sm:text-lg my-6 lg:text-xl font-sans italic">
          <strong>Dancan Malongo Ongong'o | Full-Stack Developer 👨‍💻</strong><br />
          I’m a Full-Stack Developer with a strong foundation in software engineering and a passion for building secure, high-quality web and mobile applications.

 While my academic journey at Zetech University provided the fundamentals, I’ve gone far beyond that—driven by curiosity and a desire to stay ahead. I’ve taught myself modern tools like React Native and Next.js, and continually explore new technologies to stay in sync with industry trends.

 Alongside development, I’ve built solid expertise in cybersecurity and networking, earning the Cisco CCNA certification. This background plays a key role in how I approach software — helping me develop applications that are not just functional and scalable, but secure by design.

 I’ve contributed to a range of client projects and thrive in collaborative teams that value clean code, innovation, and continuous learning.

Let’s build something bold, secure, and impactful. 
        </p>
      </div>

      <div className='flex flex-wrap justify-center items-center gap-4 md:gap-4 lg:gap-40'>
        <a 
          href="/portfolio/cv.html"
          className='px-2 py-1 text-sm md:px-6 md:py-3 md:text-base rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
        >
          View My CV
        </a>
        <a 
          href="#contact" 
          className='px-2 py-1 text-sm md:px-6 md:py-3 md:text-base rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
        >
          Contact Me
        </a>
        <a 
          href="https://github.com/danray472" 
          target="_blank" 
          rel="noopener noreferrer" 
          className='px-2 py-1 text-sm md:px-6 md:py-3 md:text-base rounded-xl bg-gray-900 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
          aria-label="GitHub Profile"
        >
          {/* GitHub SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.104.823 2.225 0 1.606-.015 2.898-.015 3.293 0 .322.192.699.799.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
            My GitHub
          </a>
        </div>
      </div>
  
  );
};

export default About;
