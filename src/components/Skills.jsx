import React from 'react';

import JavaScriptImage from '../assets/javascript.png';
import CSSImage from '../assets/css.png';
import HTMLImage from '../assets/html.png';
import ReactImage from '../assets/react.ico';
import mongoDB from '../assets/mongoDB.jpeg';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png';
import networking from '../assets/networking.png';
import security from '../assets/cyberSecurity.png';
import apis from '../assets/apis.png';
import authenticationAuthorization from '../assets/authenticationAuthorization.png';
import c from '../assets/c.png';
import ciCd from '../assets/ciCd.png';
import kali from '../assets/kali.png';
import npm from '../assets/npm.png';
import php from '../assets/php.png';
import uiUx from '../assets/uiUx.png';
import versionControl from '../assets/versionControl.png';
import communicationSkills from '../assets/communicationSkills.png';
import problemSolving from '../assets/problemSolving.png';
import teamWork from '../assets/teamWork.png';
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
    description: 'A robust framework for building server-side rendered and statically generated React applications, with built-in routing and API support.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: firebase,
    alt: 'Firebase',
    title: 'Firebase',
    description: `Firebase is Google's app development platform that provides backend services such as real-time databases, authentication, cloud functions, and hosting.`,
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: reactNative,
    alt: 'React Native',
    title: 'React Native',
    description: 'A popular JavaScript framework for writing mobile applications that render natively on iOS and Android using one codebase.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: mongoDB,
    alt: 'mongoDB',
    title: 'MongoDB',
    description: 'A document-oriented NoSQL database, essential in MERN stack development for handling unstructured data.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: tailwind,
    alt: 'Tailwind',
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework that enables rapid UI development with consistent design directly in your markup.',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: python,
    alt: 'Python',
    title: 'Python',
    description: 'A versatile programming language widely used for scripting, web apps, automation, data science, and security tools.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: c,
    alt: 'C++',
    title: 'C++',
    description: 'Proficient in C++ for system programming, performance-critical software, and security-related low-level tasks.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: npm,
    alt: 'NPM',
    title: 'NPM',
    description: 'Proficient in managing JavaScript packages and dependencies using NPM.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: php,
    alt: 'PHP',
    title: 'PHP',
    description: 'Experienced in using PHP to build server-side logic, interact with databases, and render dynamic content.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: sql,
    alt: 'SQL',
    title: 'SQL',
    description: 'Proficient in writing queries, managing relational databases, and handling data integrity using SQL.',
    imgClass: 'w-20 mx-auto rounded-md',
  },
  {
    image: CSSImage,
    alt: 'CSS',
    title: 'CSS',
    description: 'Styling language that transforms HTML structures into visually compelling web experiences.',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: HTMLImage,
    alt: 'HTML',
    title: 'HTML',
    description: 'The standard markup language for building the structure of web content.',
    imgClass: 'w-20 mx-auto',
  },
  {
    image: networking,
    alt: 'Networking',
    title: 'Computer Networking',
    description: 'Solid understanding of TCP/IP, routing, subnets, and switching. Backed by Cisco CCNA certification and practical labs.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: security,
    alt: 'Cyber Security',
    title: 'Cyber Security',
    description: 'Practical knowledge of security concepts, ethical hacking, and vulnerability analysis. Certified in network security with hands-on penetration testing.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: apis,
    alt: 'RESTful APIs',
    title: 'RESTful APIs',
    description: 'Skilled in designing, implementing, and consuming RESTful services for client-server communication.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: authenticationAuthorization,
    alt: 'Authentication & Authorization',
    title: 'Authentication & Authorization',
    description: 'Experienced in implementing OAuth, JWT, and session-based access control for securing applications.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: ciCd,
    alt: 'CI/CD',
    title: 'CI/CD',
    description: 'Set up continuous integration and delivery pipelines using GitHub Actions to automate testing and deployment.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: kali,
    alt: 'Kali Linux',
    title: 'Kali Linux',
    description: 'Hands-on experience with Kali Linux tools for ethical hacking, vulnerability scanning, and network reconnaissance.',
    imgClass: 'w-full h-32 object-contain p-4',
  },
  {
    image: uiUx,
    alt: 'UI/UX',
    title: 'UI/UX Design',
    description: 'Designing user-friendly interfaces using wireframes, mockups, and usability principles.',
    imgClass: 'w-22 mx-auto',
  },
  {
    image: versionControl,
    alt: 'Version Control',
    title: 'Version Control',
    description: 'Fluent in Git for version tracking, branching strategies, and collaborative workflows.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: communicationSkills,
    alt: 'Communication Skills',
    title: 'Communication Skills',
    description: 'Strong verbal and written communication. Able to explain technical concepts clearly across teams.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: problemSolving,
    alt: 'Problem Solving',
    title: 'Problem Solving',
    description: 'Analytical thinker with a methodical approach to identifying root causes and deploying effective solutions.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: teamWork,
    alt: 'Team Work',
    title: 'Team Work',
    description: 'Collaborative and supportive team player, contributing actively and valuing diversity of thought.',
    imgClass: 'w-40 mx-auto',
  },
  {
    image: timeManagement,
    alt: 'Time Management',
    title: 'Time Management',
    description: 'Well-organized and deadline-oriented. Skilled in planning tasks across multiple projects.',
    imgClass: 'w-40 mx-auto',
  },
];

const technicalSkills = skills.filter(s => s.title !== 'Computer Networking' && skills.indexOf(s) < skills.findIndex(s => s.title === 'Cyber Security'));
const softSkills = skills.filter((s, idx) => idx >= skills.findIndex(s => s.title === 'Computer Networking'));

const Skills = () => {
  return (
    <div className="mt-10 2xl:-mt-60 container mx-auto p-8 bg-black/20 border border-white/10 backdrop-blur-lg shadow-lg rounded-lg scroll-mt-20 lg:scroll-mt-[80px]" id="skills">
      <h2 className="text-2xl font-bold mb-4 !text-center font-serif gradient-text">Professional Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {technicalSkills.map((skill, idx) => (
          <div key={idx} className="bg-black/0 p-4 shadow-lg custom-shadow border border-white/20 rounded-lg">
            <img src={skill.image} alt={skill.alt} className={skill.imgClass} />
            <h3 className="text-lg font-semibold mt-4 text-white">{skill.title}</h3>
            <p className="text-sm text-white mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {softSkills.map((skill, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden w-full max-w-xs mx-auto bg-black/0 p-4 shadow-lg custom-shadow border border-white/20">
            <div className="w-full h-40 flex items-center justify-center overflow-hidden">
              <img src={skill.image} alt={skill.alt} className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-white mb-2">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
