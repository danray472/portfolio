
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

const Skills = () => {
  
  return (
    <div className="mt-10 container mx-auto p-8 bg-transparent border border-white/20 backdrop-blur-lg shadow-lg rounded-lg" id="skills">

      <h2 className="text-2xl font-bold mb-4 !text-center font-serif gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={JavaScriptImage} alt="JavaScript" className="w-20 mx-auto animate-wiggle rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">JavaScript</h3>
          <p className="text-sm text-black-600 mt-2 text-white">JavaScript stands out as my primary programming language, cultivated through extensive and regular application</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={CSSImage} alt="CSS" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4 text-white">CSS</h3>
          <p className="text-sm text-black-600 mt-2 text-white">CSS serves as an indispensable tool utilized by developers and software engineers, constituting a fundamental component of software development processes</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={HTMLImage} alt="HTML" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4 text-white">HTML</h3>
          <p className="text-sm text-black-600 mt-2 text-white">While HTML proficiency is inherent in my skill set, I have acquired it since the inception of my journey in software development</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={ReactImage} alt="React" className="w-20 mx-auto animate-slideInLeft" />
          <h3 className="text-lg font-semibold mt-4 text-white">React</h3>
          <p className="text-sm text-black-600 mt-2 text-white">ReactJS stands as my preferred framework in web development, seamlessly extending its capabilities to mobile development through React Native</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={mongoDB} alt="mongoDB" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">mongoDB</h3>
          <p className="text-sm text-black-600 mt-2 text-white">MongoDB played an integral role in my MERN-stack projects, representing a cornerstone of my expertise due to its extensive utilization across various endeavors</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={sql} alt="SQL" className="w-20 mx-auto animate-wiggle rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">SQL</h3>
          <p className="text-sm text-black-600 mt-2 text-white">While I may not employ it on a daily basis, this database system has remained the foremost choice for decades, retaining its preeminent position in the industry. Its enduring popularity and rich feature set underscore its indispensable role in software development</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={tailwind} alt="Tailwind" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4 text-white">Tailwind</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Tailwind CSS stands as an indispensable tool in modern web development, characterized by its simplicity, efficiency, and remarkable speed</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={python} alt="Python" className="w-20 mx-auto animate-slideInRight rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">Python</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Python stands out as one of the most widely utilized programming languages over the years, owing to its versatility and robust capabilities that enable it to tackle a myriad of tasks. Its inclusion in my skill stack is inevitable, given its indispensable role in modern software development</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={c} alt="C++" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">C++</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Proficient in C++ for system programming, game development, and performance-critical applications</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={npm} alt="NPM" className="w-20 mx-auto animate-fadeIn rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">NPM</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Proficient in using NPM for package management, facilitating efficient dependency management and project configuration</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={php} alt="PHP" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">PHP</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Experienced in using PHP for server-side scripting and dynamic web development</p>
        </div>

{/* New Skills */}
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={reactNative} alt="Python" className="w-20 mx-auto animate-slideInLeft rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">React Native</h3>
          <p className="text-sm text-black-600 mt-2 text-white">This powerful framework enables the creation of natively-rendered mobile applications for iOS and Android using a single codebase written in JavaScript. Its component-based architecture allows for efficient development and excellent performance across platforms</p>
        </div>

        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={nextjs} alt="Python" className="w-20 mx-auto animate-zoomIn rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">NextJs</h3>
          <p className="text-sm text-black-600 mt-2 text-white">A robust framework for building server-side rendered and statically generated React applications, Next.jsoffers features like automatic code splitting, optimized performance, and built-in API routes. It simplifies the development process while enhancing the scalability of web applications</p>
        </div>

        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={firebase} alt="Python" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4 text-white">Firebase</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Google's mobile and web application development platform, Firebase provides a suite of tools and services, such as real-time database, authentication, and cloud storage. It helps developers build high-quality apps quickly by handling backend infrastructure and offering seamless integration with other Google services</p>
        </div>



        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={networking} alt="Networking" className="w-30 mx-auto rounded-sm" />
          <h3 className="text-lg font-semibold mt-4 text-white">Computer Network</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Computer networking stands as a foundational skill requisite for any tech-related position, and I have diligently cultivated proficiency in this domain. Additionally, I pursued the CCNA certification to deepen my understanding of networking principles and practices</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={security} alt="Cyber Security" className="w-30 mx-auto p-0 m-0 rounded-sm" />
          <h3 className="text-lg font-semibold mt-4 text-white">Cyber Security</h3>
          <p className="text-sm text-black-600 mt-2 text-white">In today's era of computer technology, computer security holds paramount importance. I have dedicated significant effort to enhancing my knowledge in cybersecurity, extensively studying various aspects of the field. Additionally, I have obtained certification in network security to further fortify my expertise in safeguarding digital assets against potential threats</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={apis} alt="RESTful APIs" className="w-45 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">RESTful APIs</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Experienced in designing and consuming RESTful APIs to enable seamless communication between client and server applications</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={authenticationAuthorization} alt="Authentication & Authorization" className="w-30 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Authentication & Authorization</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Proficient in implementing secure authentication and authorization mechanisms to safeguard user data and control access</p>
        </div>
    
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={ciCd} alt="CI/CD" className="w-22 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">CI/CD</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Experienced with CI/CD pipelines using GitHub Actions for automated testing and deployment</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={kali} alt="Kali Linux" className="w-30 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Kali Linux</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Skilled in using Kali Linux for penetration testing
          and ethical hacking, providing hands-on experience with a wide range of security tools and techniques</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={uiUx} alt="UI/UX" className="w-22 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">UI/UX Design</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Skilled in UI/UX design principles to create user-friendly and visually appealing interfaces</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={versionControl} alt="Version Control" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Version Control</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Proficient in using version control systems like Git for efficient collaboration and code management</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={communicationSkills} alt="Communication Skills" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Communication Skills</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Clear and concise communication is essential in the tech industry, and I excel in this area. I articulate ideas, requirements, and feedback effectively to both technical and non-technical stakeholders. My ability to listen actively and respond thoughtfully ensures that everyone is on the same page, facilitating smooth project execution and minimizing misunderstandings.</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={problemSolving} alt="Problem Solving" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Problem Solving</h3>
          <p className="text-sm text-black-600 mt-2 text-white">Tackling challenges head-on is a core strength of mine. I approach problems methodically, breaking them down into manageable components and analyzing each aspect to devise effective solutions. My creative thinking and adaptability allow me to navigate complex issues, and I continuously seek innovative ways to overcome obstacles and deliver results.</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={teamWork} alt="Team Work" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Team Work</h3>
          <p className="text-sm text-black-600 mt-2 text-white">I thrive in collaborative environments where diverse skills and perspectives come together to achieve common goals. My ability to work harmoniously with team members fosters a positive and productive atmosphere. Whether in small groups or large teams, I contribute actively, value others' input, and ensure that our collective efforts result in successful outcomes.</p>
        </div>
        <div className="glassy-card p-4 shadow-lg custom-shadow border border-white rounded-lg">
          <img src={timeManagement} alt="Team Work" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4 text-white">Time Management</h3>
          <p className="text-sm text-black-600 mt-2 text-white">As a tech professional, I excel in time management, ensuring that I prioritize tasks effectively and meet deadlines consistently. My ability to schedule tasks efficiently and execute them with precision allows me to deliver high-quality work on time. This skill is essential in managing multiple projects and maintaining productivity, making me a reliable and organized member of any team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
