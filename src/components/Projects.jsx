import React from 'react';
import { FaGithub } from 'react-icons/fa';
import eComm from '../assets/eCommerce.png';
import electronicShopImage from '../assets/eletronicShop.jpg';
import recipeApp from '../assets/rcm-college.png';
import portfolio from '../assets/portfolio.png';
import bsrHospital from '../assets/bsrHospital.png';
import bookStore from '../assets/bookStore.png';
import aldeonWorld from '../assets/aldeon-world.png';
import Library from '../assets/Library.png';
import inroom from '../assets/inroom.png';

const Projects = () => {
  const projects = [

   {
      title: "University Library Management System",
      description: "A modern, full-featured library platform with an admin panel.",
      image: Library,
      githubLink: "https://github.com/danray472/university-library.git",
      rendaLink: "https://university-library-amber.vercel.app"
    },
    {
      title: "Electronic Repair Shop Management System",
      description: "This project was centered around management systems, with a particular focus on the operations of an electronics repair shop.",
      image: electronicShopImage,
      githubLink: "https://github.com/danray472/myDseProject/tree/master",
      rendaLink: "https://dseproject-client-1.onrender.com"
    },
    {
      title: "Aldeon World",
      description: "A business website for Aldeon World, specializing in tender and contract services, premium supplies, branding, construction, and interior design.",
      image: aldeonWorld,
      githubLink: "https://github.com/danray472/aldeon-world.git",
      rendaLink: "https://aldeonworld.com/"
    },
    {
      title: "RCM College Website",
      description: "I developed the website for this college based in Nairobi and the client has been using it since to advertise the school online.",
      image: recipeApp,
      githubLink: "https://github.com/danray472/client-acam-proj",
      rendaLink: "https://danray472.github.io/client-acam-proj/"
    },
    {
      title: "E-commerce Website",
      description: "Ecommerce website built using Next.js and Tailwind CSS",
      image: eComm,
      githubLink: "https://github.com/danray472/e-commerce.git",
      rendaLink: "https://ecommerce-nextjs-fullstack-app-kappa.vercel.app/"
    },
    {
      title: "Stylish Portfolio",
      description: "Magical feeling portfolio using wizard design look and feel.",
      image: portfolio,
      githubLink: "https://github.com/danray472/portfolio-next",
      rendaLink: "https://next-portfolio-bice-phi.vercel.app/"
    },
    {
      title: "Hospital Website",
      description: "I developed the website for this hospital based in Nairobi and the client has been using it since to advertise the hospital online.",
      image: bsrHospital,
      githubLink: "https://github.com/danray472/bsr-hospital",
      rendaLink: "https://bsr-hospital.vercel.app/"
    },
    {
      title: "Book Management App",
      description: "I developed the website for this hospital based in Nairobi and the client has been using it since to advertise the hospital online.",
      image: bookStore,
      githubLink: "https://github.com/danray472/MERN-bookStoreProj.git",
      rendaLink: "https://mern-bookstoreproj-1.onrender.com/"
    },
    {
      title: "In‑Room Dining Website",
      description: "A sleek Airbnb-style in-room dining web app to browse menus and place orders online.",
      image: inroom,
      githubLink: "https://github.com/danray472/in-roomDining.git",
      rendaLink: "https://danray472.github.io/in-roomDining/"
    }
  ];

  
    return (
      <div className="container mx-auto px-4 py-12 scroll-mt-20 lg:scroll-mt-[80px]" id="projects">
        <h2 className="text-3xl font-serif font-bold text-center mb-8 gradient-text bg-slate-400">
          Some of my Projects
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glassy-card rounded-lg overflow-hidden w-full max-w-xs mx-auto"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-40 object-cover transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:transform-none" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 milky-white-text">{project.title}</h3>
                <p className="milky-white-text mb-4">{project.description}</p>
                <div className="flex items-center justify-between milky-white-text">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                  <a 
                    href={project.rendaLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 border border-white-500 text-white-500 rounded hover:bg-gray-500 hover:text-white transition-colors duration-200"
                  >
                    View Live
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
