import React from 'react';
import { FaGithub } from 'react-icons/fa';
import bookStoreImage from '../assets/bookStore.jpg';
import electronicShopImage from '../assets/eletronicShop.jpg';
import escrowProjectReact from '../assets/escrowProjectReact.png';
import safepay from '../assets/safepay.jpeg';
import recipeApp from '../assets/recipeApp.png';

const Projects = () => {
  const projects = [
    {
      title: "Book store project",
      description: "I used Mern-stack to develop this project and it was really beneficial in my tech journey",
      image: bookStoreImage,
      githubLink: "https://github.com/danray472/MERN-bookStoreProj/tree/master",
    },
    {
      title: "Electronic repair shop management system",
      description: "This project was focused on management systems, specifically electronics repairing shop",
      image: electronicShopImage,
      githubLink: "https://github.com/danray472/myDseProject/tree/master",
    },
    {
      title: "Escrow project react",
      description: "Mern-stack was used in this project and firebase technology for the backend",
      image: escrowProjectReact,
      githubLink: "https://github.com/danray472/escrow_project_react/tree/master",
    },
    {
      title: "SafePay project",
      description: "In this project i used Php, mysql and xampp.",
      image: safepay,
      githubLink: "https://github.com/danray472/escrow_proj",
    },
    {
      title: "Recipe project",
      description: "Recipe app is very common and i thought i not i try it also to improve my skills. I used reactJS and mongoBD to develop this app",
      image: recipeApp,
      githubLink: "https://github.com/danray472/Mern-recipe-app/tree/master",
    }
  ];

  return (
    <div className="container mx-auto py-12" id="projects">
      <h2 className="text-3xl font-serif gradient-text font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-50">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {/* GitHub link */}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-500 hover:text-gray-700 animate-pulse">
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
