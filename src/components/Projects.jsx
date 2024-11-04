import React from 'react';
import { FaGithub } from 'react-icons/fa';
import inroomDining from '../assets/inroomDining.png';
import electronicShopImage from '../assets/eletronicShop.jpg';
import recipeApp from '../assets/recipeApp.png';

const Projects = () => {
  const projects = [
    {
      title: "In-room dining website",
      description: "Airbnb in-room dining is a technological app that bringings excellent dining experience on airbnb",
      image: inroomDining,
      githubLink: "https://github.com/danray472/in-roomDining/tree/master",
      rendaLink: "https://inroomdining.co.ke"
    },
    {
      title: "Electronic repair shop management system",
      description: "This project was centered around management systems, with a particular focus on the operations of an electronics repair shop.",
      image: electronicShopImage,
      githubLink: "https://github.com/danray472/myDseProject/tree/master",
      rendaLink: "https://dseproject-client-1.onrender.com"
    },
    {
      title: "Recipe project",
      description: "Developing a recipe app proved instrumental in honing my skills, as I utilized ReactJS for the frontend and MongoDB for the database backend.",
      image: recipeApp,
      githubLink: "https://github.com/danray472/Mern-recipe-app/tree/master",
      rendaLink: "https://recipe-client-renda.onrender.com/"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h2 className="text-3xl font-serif font-bold text-center mb-8 gradient-text">
    Some of my Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-50 w-full max-w-xs mx-auto">
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center justify-between text-gray-500 hover:text-gray-700">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
                <a href={project.rendaLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200">
                  View Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
