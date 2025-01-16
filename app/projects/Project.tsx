"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  details: string;
}

const projects: Project[] = [
  {
    title: "Automation Solutions",
    description: "Advanced automation for industrial sectors to improve efficiency and safety.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734512732/freepik-export-20241218090432gocp_lep3fo.png",
    details: "Our automation solutions are designed to streamline industrial processes. From controlling machinery to improving workflow efficiency, our approach helps industries save time and reduce human error."
  },
  {
    title: "Environmental Project",
    description: "Environmental sustainability solutions for a greener future.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734511037/freepik-export-20241218083619fTKO_jkq1pb.png",
    details: "Our environmental projects focus on sustainable energy solutions, waste management, and reducing the carbon footprint. We provide comprehensive solutions to ensure a sustainable and green future."
  },
  {
    title: "Laboratory Solutions",
    description: "Providing high-quality testing solutions for various laboratory needs.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png",
    details: "We offer innovative laboratory solutions with advanced equipment for precise testing in various fields. Our labs are equipped with the latest technologies to meet industry standards."
  },

  {
    title: "Automation Solutions",
    description: "Advanced automation for industrial sectors to improve efficiency and safety.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734512732/freepik-export-20241218090432gocp_lep3fo.png",
    details: "Our automation solutions are designed to streamline industrial processes. From controlling machinery to improving workflow efficiency, our approach helps industries save time and reduce human error."
  },
  {
    title: "Environmental Project",
    description: "Environmental sustainability solutions for a greener future.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734511037/freepik-export-20241218083619fTKO_jkq1pb.png",
    details: "Our environmental projects focus on sustainable energy solutions, waste management, and reducing the carbon footprint. We provide comprehensive solutions to ensure a sustainable and green future."
  },
  {
    title: "Laboratory Solutions",
    description: "Providing high-quality testing solutions for various laboratory needs.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png",
    details: "We offer innovative laboratory solutions with advanced equipment for precise testing in various fields. Our labs are equipped with the latest technologies to meet industry standards."
  }
  

];

const TopSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleReadMore = (project: Project) => {
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    setActiveProject(null);
  };

  return (
    <>
      {/* Projects Section */}
      <section className="py-12 px-4 md:px-8 bg-[#f2f4f6] lg:px-[120px] text-center mt-[100px]">
        {/* Title */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Projects
          </h1>
          <p className="mt-2 md:mt-4 text-gray-600 text-base md:text-lg">
            Explore our diverse projects in engineering and environmental services.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg border shadow-md">
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500}
                height={350}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>
                <button
                  onClick={() => handleReadMore(project)}
                  className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Modal */}
        {activeProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <Image
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    width={500}
                    height={350}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold">{activeProject.title}</h3>
                  <p className="mt-4 text-lg text-gray-700">{activeProject.details}</p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default TopSection;
