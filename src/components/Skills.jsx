import React from 'react';

import JavaScriptImage from '../assets/javascript.png';
import CSSImage from '../assets/css.png';
import HTMLImage from '../assets/html.png';
import ReactImage from '../assets/react.ico';
import mongoDB from '../assets/mongoDB.jpeg';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import networking from '../assets/networking.jpg';
import security from '../assets/cyberSecurity.jpg';
import apis from '../assets/apis.png';
import authenticationAuthorization from '../assets/authenticationAuthorization.jpeg';
import c from '../assets/c.png';
import ciCd from '../assets/ciCd.png';
import kali from '../assets/kali.png';
import npm from '../assets/npm.png';
import php from '../assets/php.png';
import uiUx from '../assets/uiUx.jpeg';
import versionControl from '../assets/versionControl.jpg';
import communicationSkills from '../assets/communicationSkills.png';
import problemSolving from '../assets/problemSolving.jpeg';
import teamWork from '../assets/teamWork.jpeg';
import reactNative from '../assets/reactNative.png';
import nextjs from '../assets/nextjs.png';
import firebase from '../assets/firebase.png';
import timeManagement from '../assets/timeManagement.png';

const skills = [
  {
    image: JavaScriptImage,
    alt: 'JavaScript',
    title: 'JavaScript',
    description: 'JavaScript stands out as my primary programming language, cultivated through extensive and regular application',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: ReactImage,
    alt: 'React',
    title: 'React',
    description: 'ReactJS stands as my preferred framework in web development, seamlessly extending its capabilities to mobile development through React Native',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: nextjs,
    alt: 'NextJs',
    title: 'NextJs',
    description: 'A robust framework for building server-side rendered and statically generated React applications, Next.jsoffers features like automatic code splitting, optimized performance, and built-in API routes. It simplifies the development process while enhancing the scalability of web applications',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: firebase,
    alt: 'Firebase',
    title: 'Firebase',
    description: `Google's mobile and web application development platform, Firebase provides a suite of tools and services, such as real-time database, authentication, and cloud storage. It helps developers build high-quality apps quickly by handling backend infrastructure and offering seamless integration with other Google services`,
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: reactNative,
    alt: 'React Native',
    title: 'React Native',
    description: 'This powerful framework enables the creation of natively-rendered mobile applications for iOS and Android using a single codebase written in JavaScript. Its component-based architecture allows for efficient development and excellent performance across platforms',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: mongoDB,
    alt: 'mongoDB',
    title: 'mongoDB',
    description: 'MongoDB played an integral role in my MERN-stack projects, representing a cornerstone of my expertise due to its extensive utilization across various endeavors',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: tailwind,
    alt: 'Tailwind',
    title: 'Tailwind',
    description: 'Tailwind CSS stands as an indispensable tool in modern web development, characterized by its simplicity, efficiency, and remarkable speed',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: python,
    alt: 'Python',
    title: 'Python',
    description: 'Python stands out as one of the most widely utilized programming languages over the years, owing to its versatility and robust capabilities that enable it to tackle a myriad of tasks. Its inclusion in my skill stack is inevitable, given its indispensable role in modern software development',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: c,
    alt: 'C++',
    title: 'C++',
    description: 'Proficient in C++ for system programming, game development, and performance-critical applications',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: npm,
    alt: 'NPM',
    title: 'NPM',
    description: 'Proficient in using NPM for package management, facilitating efficient dependency management and project configuration',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: php,
    alt: 'PHP',
    title: 'PHP',
    description: 'Experienced in using PHP for server-side scripting and dynamic web development',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: sql,
    alt: 'SQL',
    title: 'SQL',
    description: 'While I may not employ it on a daily basis, this database system has remained the foremost choice for decades, retaining its preeminent position in the industry. Its enduring popularity and rich feature set underscore its indispensable role in software development',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: CSSImage,
    alt: 'CSS',
    title: 'CSS',
    description: 'CSS serves as an indispensable tool utilized by developers and software engineers, constituting a fundamental component of software development processes',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: HTMLImage,
    alt: 'HTML',
    title: 'HTML',
    description: 'While HTML proficiency is inherent in my skill set, I have acquired it since the inception of my journey in software development',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: networking,
    alt: 'Networking',
    title: 'Computer Network',
    description: 'Computer networking stands as a foundational skill requisite for any tech-related position, and I have diligently cultivated proficiency in this domain. Additionally, I pursued the CCNA certification to deepen my understanding of networking principles and practices',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: security,
    alt: 'Cyber Security',
    title: 'Cyber Security',
    description: `In today's era of computer technology, computer security holds paramount importance. I have dedicated significant effort to enhancing my knowledge in cybersecurity, extensively studying various aspects of the field. Additionally, I have obtained certification in network security to further fortify my expertise in safeguarding digital assets against potential threats`,
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: apis,
    alt: 'RESTful APIs',
    title: 'RESTful APIs',
    description: 'Experienced in designing and consuming RESTful APIs to enable seamless communication between client and server applications',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: authenticationAuthorization,
    alt: 'Authentication & Authorization',
    title: 'Authentication & Authorization',
    description: 'Proficient in implementing secure authentication and authorization mechanisms to safeguard user data and control access',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: ciCd,
    alt: 'CI/CD',
    title: 'CI/CD',
    description: 'Experienced with CI/CD pipelines using GitHub Actions for automated testing and deployment',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: kali,
    alt: 'Kali Linux',
    title: 'Kali Linux',
    description: 'Skilled in using Kali Linux for penetration testing and ethical hacking, providing hands-on experience with a wide range of security tools and techniques',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: uiUx,
    alt: 'UI/UX',
    title: 'UI/UX Design',
    description: 'Skilled in UI/UX design principles to create user-friendly and visually appealing interfaces',
    imgClass: 'w-22 mx-auto',
  },
  {
    image: versionControl,
    alt: 'Version Control',
    title: 'Version Control',
    description: 'Proficient in using version control systems like Git for efficient collaboration and code management',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: communicationSkills,
    alt: 'Communication Skills',
    title: 'Communication Skills',
    description: 'Clear and concise communication is essential in the tech industry, and I excel in this area. I articulate ideas, requirements, and feedback effectively to both technical and non-technical stakeholders. My ability to listen actively and respond thoughtfully ensures that everyone is on the same page, facilitating smooth project execution and minimizing misunderstandings.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: problemSolving,
    alt: 'Problem Solving',
    title: 'Problem Solving',
    description: 'Tackling challenges head-on is a core strength of mine. I approach problems methodically, breaking them down into manageable components and analyzing each aspect to devise effective solutions. My creative thinking and adaptability allow me to navigate complex issues, and I continuously seek innovative ways to overcome obstacles and deliver results.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: teamWork,
    alt: 'Team Work',
    title: 'Team Work',
    description: `I thrive in collaborative environments where diverse skills and perspectives come together to achieve common goals. My ability to work harmoniously with team members fosters a positive and productive atmosphere. Whether in small groups or large teams, I contribute actively, value others' input, and ensure that our collective efforts result in successful outcomes.`,
    imgClass: 'w-40 mx-auto',
  },
  {
    image: timeManagement,
    alt: 'Time Management',
    title: 'Time Management',
    description: `As a tech professional, I excel in time management, ensuring that I prioritize tasks effectively and meet deadlines consistently. My ability to schedule tasks efficiently and execute them with precision allows me to deliver high-quality work on time. This skill is essential in managing multiple projects and maintaining productivity, making me a reliable and organized member of any team.`,
    imgClass: 'w-40 mx-auto',
  },
];

const technicalSkills = skills.filter(s => s.title !== 'Computer Network' && skills.indexOf(s) < skills.findIndex(s => s.title === 'Cyber Security'));
const softSkills = skills.filter((s, idx) => idx >= skills.findIndex(s => s.title === 'Computer Network'));

const Skills = () => {
  return (
    <div className="mt-10 container mx-auto p-8 bg-black/20 border border-white/10 backdrop-blur-lg shadow-lg rounded-lg scroll-mt-20 lg:scroll-mt-[80px]" id="skills">
      <h2 className="text-2xl font-bold mb-4 !text-center font-serif gradient-text">Skills</h2>
      {/* Technical Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {technicalSkills.map((skill, idx) => (
          <div key={idx} className="bg-black/0 p-4 shadow-lg custom-shadow border border-white/20 rounded-lg">
            <img src={skill.image} alt={skill.alt} className={skill.imgClass} />
            <h3 className="text-lg font-semibold mt-4 text-white">{skill.title}</h3>
            <p className="text-sm text-black-600 mt-2 text-white">{skill.description}</p>
          </div>
        ))}
      </div>
      {/* Soft Skills (styled like Projects) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {softSkills.map((skill, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden w-full max-w-xs mx-auto bg-black/0 p-4 shadow-lg custom-shadow border border-white/20">
            <div className="w-full h-40 flex items-center justify-center bg-white/5 overflow-hidden">
  <img src={skill.image} alt={skill.alt} className="w-full h-full object-cover rounded-md" />
</div>
            <div className="p-4">
              <p className="text-sm text-white mb-2">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
