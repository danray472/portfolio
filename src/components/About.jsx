import React from 'react';
import myImage from '../assets/myImage.jpeg'; // Import your image
import { TypeAnimation } from 'react-type-animation';
import background from '../assets/background-img.jpg';

const About = () => {

  return (
    <div 
      id="about"
      className="relative bg-fixed bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto p-8 bg-white/70 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-2xl font-mono italic font-bold mb-4">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center">
        <img 
  src={myImage} 
  alt="profile" 
  className="w-40 h-50 md:w-52  md:h-52 rounded-[30px] mb-4 md:mb-0" 
/>

          
          <div className='col-span-2 px-5 my-auto'>
          <h1 className='text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
          <span className='text-xl sm:text-xl md:text-6xl font-light italic' style={{ fontFamily: 'Caveat, cursive' }}>
  Hello, I'm developer Dancan, a dedicated Full-Stack Developer with a passion for crafting innovative solutions on both mobile and web applications. Welcome to my portfolio!
</span>




            <br />
            <br />
            <div className="type-animation-container relative overflow-hidden sm:whitespace-nowrap whitespace-normal" style={{ height: '6rem', width: '110%' }}>
                <TypeAnimation 
                  className='gradient-text absolute'
                  sequence={[
                    "Software Developer",
                    3000,
                    "Full-Stack Developer",
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

        <div className="about-info mt-0 sm:mt-32 md:mt-40 lg:mt-48">
          <p className="text-base sm:text-lg my-6 lg:text-xl font-sans italic">
            <strong>Dancan Malongo Ongong'o. | Full-Stack Developer</strong><br />
            As a dedicated Full-Stack Developer proficient in both web and mobile development, I specialize in crafting high-quality, innovative solutions tailored to client needs. My academic journey in software engineering at Zetech University provided me with a solid foundation in programming and problem-solving. In web development, I leverage frameworks like React Native and Next.js to build dynamic, responsive applications. For mobile platforms, I utilize React Native to create seamless cross-platform apps.

            Beyond development, I have honed skills in cybersecurity and networking, exemplified by earning the Cisco CCNA certification. This expertise ensures that the solutions I deliver are not only functional but also secure and robust.

            Throughout my career, I have contributed to numerous projects, delivering both mobile and web applications for various clients. My passion for continuous learning and growth drives me to excel in collaborative environments that value effective communication and teamwork. I am committed to pushing boundaries and exceeding expectations. Let’s bring transformative ideas to life together!.
          </p>
        </div>

        <div className='flex justify-center items-center gap-4'>
          <a 
            href="/portfolio/Dancan Ongong'o CV_v1.2.pdf" 
            download="Dancan Ongong'o - Software Engineer Resume" 
            className='px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
          >
            Download My CV
          </a>
          <a 
            href="#contact" 
            className='px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
          >
            Contact Me
          </a>
          <a 
            href="https://github.com/danray472" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gray-900 text-white font-semibold flex items-center gap-2 hover:scale-105 duration-200 shadow-lg'
            aria-label="GitHub Profile"
          >
            {/* GitHub SVG icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="inline-block w-5 h-5 mr-2"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 0-.288-.012-1.243-.018-2.252-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.467-1.332-5.467-5.932 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.104.823 2.225 0 1.606-.015 2.898-.015 3.293 0 .322.192.699.799.58C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
