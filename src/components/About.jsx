import React from 'react';
import myImage from '../assets/myImage.jpeg'; // Import your image
import { TypeAnimation } from 'react-type-animation';
import background from '../assets/background-img.jpg';

const About = () => {
  // Function to handle the download event
  const handleDownloadCV = () => {
    console.log('CV downloaded');
  };

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
            sizes={20}
            alt="profile" 
            className="w-full md:w-1/3 rounded-[30px]  mb-4 md:mb-0" 
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

        <div className='flex justify-center'>
          <a 
            href="CV_v6.pdf" 
            download="Resume_dancan-Developer.pdf" 
            onClick={handleDownloadCV} 
            className='lg:mx-4 px-4 py-2 md:px-6 md:py-3 rounded-xl mr-2 bg-gradient-to-br from-orange-500 to-pink-500'
          >
            Download CV
          </a>
          <a 
            href="#contact" 
            className='lg:mx-32 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none'
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
