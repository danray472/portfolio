import React from 'react';
import JavaScriptImage from '../assets/javascript.png';
import CSSImage from '../assets/css.png';
import HTMLImage from '../assets/html.png';
import ReactImage from '../assets/react.ico';
import mongoDB from '../assets/mongoDB.jpeg';
import sql from '../assets/sql.png';
import tailwind from '../assets/tailwind.png';
import python from '../assets/python.png'

const Skills = () => {
  return (
    <div className="container mx-auto p-8" id="skills">
      <h2 className="text-2xl font-bold mb-4 text-center font-serif text-[#ef4444]">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={JavaScriptImage} alt="JavaScript" className="w-20 mx-auto animate-bounce rounded-md" />
          <h3 className="text-lg font-semibold mt-4">JavaScript</h3>
          <p className="text-sm text-gray-600 mt-2">JavaScript has been my best languange so far due to how often i usually use it</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={CSSImage} alt="CSS" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">CSS</h3>
          <p className="text-sm text-gray-600 mt-2">CSS is used by every developer/software engineer and is always a key part in software development</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={HTMLImage} alt="HTML" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4">HTML</h3>
          <p className="text-sm text-gray-600 mt-2">As simple as it is, i can skip mentioning HTML skills that i have gained from when i started this amaizing journey</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={ReactImage} alt="React" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4">React</h3>
          <p className="text-sm text-gray-600 mt-2">ReactJS is my favorite tool in web development and also extended to mobile development using react native</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={mongoDB} alt="React" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">mongoDB</h3>
          <p className="text-sm text-gray-600 mt-2">Mongodb was part of my Mern-stack and i can not skip it as i have used it more than any other tool</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={sql} alt="React" className="w-20 mx-auto animate-bounce" />
          <h3 className="text-lg font-semibold mt-4">sql</h3>
          <p className="text-sm text-gray-600 mt-2">This is the most used database systems for decades and still number one currently, though i dont usually use it on a day to day, its very esentiall as its popularity and features</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={tailwind} alt="React" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">tailwind</h3>
          <p className="text-sm text-gray-600 mt-2">Who can ignore tailwind, no one can. Simple, efficient and very fast CSS framework</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img src={python} alt="React" className="w-20 mx-auto animate-pulse" />
          <h3 className="text-lg font-semibold mt-4">Python</h3>
          <p className="text-sm text-gray-600 mt-2">Python is one of the most used programming languange for many years now, python also can do almost anything so i find it hard not to have it in my skills-stack</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
