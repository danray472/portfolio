
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

const Skills = () => {
  return (
    <div className="container mx-auto p-8" id="skills">
      <h2 className="text-2xl font-bold mb-4 !text-center font-serif gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white border border-white p-4 rounded-lg shadow-lg custom-shadow">
          <img src={JavaScriptImage} alt="JavaScript" className="w-20 mx-auto animate-bounce rounded-md" />
          <h3 className="text-lg font-semibold mt-4">JavaScript</h3>
          <p className="text-sm text-gray-600 mt-2">JavaScript stands out as my primary programming language, cultivated through extensive and regular application</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={CSSImage} alt="CSS" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">CSS</h3>
          <p className="text-sm text-gray-600 mt-2">CSS serves as an indispensable tool utilized by developers and software engineers, constituting a fundamental component of software development processes</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={HTMLImage} alt="HTML" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4">HTML</h3>
          <p className="text-sm text-gray-600 mt-2">While HTML proficiency is inherent in my skill set, I have acquired it since the inception of my journey in software development</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={ReactImage} alt="React" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4">React</h3>
          <p className="text-sm text-gray-600 mt-2">ReactJS stands as my preferred framework in web development, seamlessly extending its capabilities to mobile development through React Native</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={mongoDB} alt="mongoDB" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4">mongoDB</h3>
          <p className="text-sm text-gray-600 mt-2">MongoDB played an integral role in my MERN-stack projects, representing a cornerstone of my expertise due to its extensive utilization across various endeavors</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={sql} alt="SQL" className="w-20 mx-auto animate-bounce rounded-md" />
          <h3 className="text-lg font-semibold mt-4">SQL</h3>
          <p className="text-sm text-gray-600 mt-2">While I may not employ it on a daily basis, this database system has remained the foremost choice for decades, retaining its preeminent position in the industry. Its enduring popularity and rich feature set underscore its indispensable role in software development</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={tailwind} alt="Tailwind" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">Tailwind</h3>
          <p className="text-sm text-gray-600 mt-2">Tailwind CSS stands as an indispensable tool in modern web development, characterized by its simplicity, efficiency, and remarkable speed</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={python} alt="Python" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4">Python</h3>
          <p className="text-sm text-gray-600 mt-2">Python stands out as one of the most widely utilized programming languages over the years, owing to its versatility and robust capabilities that enable it to tackle a myriad of tasks. Its inclusion in my skill stack is inevitable, given its indispensable role in modern software development</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={networking} alt="Networking" className="w-30 mx-auto rounded-sm" />
          <h3 className="text-lg font-semibold mt-4">Computer Network</h3>
          <p className="text-sm text-gray-600 mt-2">Computer networking stands as a foundational skill requisite for any tech-related position, and I have diligently cultivated proficiency in this domain. Additionally, I pursued the CCNA certification to deepen my understanding of networking principles and practices</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={security} alt="Cyber Security" className="w-30 mx-auto p-0 m-0 rounded-sm" />
          <h3 className="text-lg font-semibold mt-4">Cyber Security</h3>
          <p className="text-sm text-gray-600 mt-2">In today's era of computer technology, computer security holds paramount importance. I have dedicated significant effort to enhancing my knowledge in cybersecurity, extensively studying various aspects of the field. Additionally, I have obtained certification in network security to further fortify my expertise in safeguarding digital assets against potential threats</p>
        </div>

        {/* New Skills */}
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={apis} alt="RESTful APIs" className="w-45 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">RESTful APIs</h3>
          <p className="text-sm text-gray-600 mt-2">Experienced in designing and consuming RESTful APIs to enable seamless communication between client and server applications</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={authenticationAuthorization} alt="Authentication & Authorization" className="w-30 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Authentication & Authorization</h3>
          <p className="text-sm text-gray-600 mt-2">Proficient in implementing secure authentication and authorization mechanisms to safeguard user data and control access</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={c} alt="C++" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4">C++</h3>
          <p className="text-sm text-gray-600 mt-2">Proficient in C++ for system programming, game development, and performance-critical applications</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={ciCd} alt="CI/CD" className="w-22 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">CI/CD</h3>
          <p className="text-sm text-gray-600 mt-2">Experienced with CI/CD pipelines using GitHub Actions for automated testing and deployment</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={kali} alt="Kali Linux" className="w-30 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Kali Linux</h3>
          <p className="text-sm text-gray-600 mt-2">Skilled in using Kali Linux for penetration testing
          and ethical hacking, providing hands-on experience with a wide range of security tools and techniques</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={npm} alt="NPM" className="w-20 mx-auto animate-bounce rounded-md" />
          <h3 className="text-lg font-semibold mt-4">NPM</h3>
          <p className="text-sm text-gray-600 mt-2">Proficient in using NPM for package management, facilitating efficient dependency management and project configuration</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={php} alt="PHP" className="w-20 mx-auto animate-pulse rounded-md" />
          <h3 className="text-lg font-semibold mt-4">PHP</h3>
          <p className="text-sm text-gray-600 mt-2">Experienced in using PHP for server-side scripting and dynamic web development</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={uiUx} alt="UI/UX" className="w-22 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">UI/UX Design</h3>
          <p className="text-sm text-gray-600 mt-2">Skilled in UI/UX design principles to create user-friendly and visually appealing interfaces</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={versionControl} alt="Version Control" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Version Control</h3>
          <p className="text-sm text-gray-600 mt-2">Proficient in using version control systems like Git for efficient collaboration and code management</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={communicationSkills} alt="Communication Skills" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Communication Skills</h3>
          <p className="text-sm text-gray-600 mt-2">Strong communication skills to effectively collaborate with team members and stakeholders</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={problemSolving} alt="Problem Solving" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Problem Solving</h3>
          <p className="text-sm text-gray-600 mt-2">Exceptional problem-solving skills to identify issues and develop effective solutions</p>
        </div>
        <div className="bg-white border border-white p-4 rounded-lg shadow-md">
          <img src={teamWork} alt="Team Work" className="w-40 mx-auto" />
          <h3 className="text-lg font-semibold mt-4">Team Work</h3>
          <p className="text-sm text-gray-600 mt-2">Strong team player with experience working in collaborative environments to achieve project goals</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
