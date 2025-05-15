"use client";

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
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736695190/optimization_hrcdmx.png",
    details: "Our automation solutions are designed to streamline industrial processes. From controlling machinery to improving workflow efficiency, our approach helps industries save time and reduce human error."
  },
  {
    title: "Environmental Project",
    description: "Environmental sustainability solutions for a greener future.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734422971/465690926_1033945058505385_631866673145992697_n.webp_txueai.jpg",
    details: "Our environmental projects focus on sustainable energy solutions, waste management, and reducing the carbon footprint. We provide comprehensive solutions to ensure a sustainable and green future."
  },
  {
    title: "Laboratory Solutions",
    description: "Providing high-quality testing solutions for various laboratory needs.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png",
    details: "We offer innovative laboratory solutions with advanced equipment for precise testing in various fields. Our labs are equipped with the latest technologies to meet industry standards."
  },
  {
    title: "Pipe Laying Project",
    description: "Underground pipe laying solutions for effective water and gas distribution.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128319/PHOTO-2024-12-20-16-05-19_jrkuwo.jpg",
    details: "We specialize in laying pipes for water and gas distribution systems. Our solutions are designed to ensure the durability, safety, and efficiency of the entire infrastructure."
  },
  {
    title: "WaterBoreHole Drilling and Reticulation",
    description: "Drilling and reticulation solutions to provide accessible and clean water.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734509360/project1_qbhjoz.png",
    details: "We provide high-quality drilling and reticulation services to ensure reliable access to clean water. Our solutions are tailored to meet the needs of various communities and industries."
  },
  {
    title: "Dredging Solutions",
    description: "Dredging and excavation solutions for ports, harbors, and waterways.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737105643/lred_okot3l.png",
    details: "Our dredging services enhance the navigation of waterways, ports, and harbors. We use state-of-the-art equipment to provide cost-effective solutions that ensure optimal water depth and flow."
  },
  {
    title: "Oil Spillage Solutions",
    description: "Pollution, particularly from oil spills, poses a severe threat to marine ecosystems and coastal environments.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736696912/spill_tcvb7p.png",
    details: "Pollution, particularly from oil spills, poses a severe threat to marine ecosystems and coastal environments. At ADISL, we utilize methods like containment and skimming, chemical dispersants, and bioremediation."
  },
  {
    title: "RoadConstruction Project",
    description: "Road construction solutions to improve transportation infrastructure.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737105643/caterpillar_erjtkw.png",
    details: "We offer comprehensive road construction services that focus on durability, safety, and efficiency. Our projects contribute to enhanced transportation networks and the overall development of regions."
  },
  {
    title: "Water Engineering",
    description: "Water management and engineering solutions for sustainable development.",
    imageUrl: "https://res.cloudinary.com/dpkn1ppzj/video/upload/v1737105806/DSCN0902_hfu8sv.mov",
    details: "We specialize in water engineering, offering solutions for efficient water distribution, treatment, and management. Our services are crucial in ensuring sustainable water usage across industries and communities."
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

  const renderMedia = (url: string) => {
    if (url.endsWith(".mov") || url.endsWith(".mp4")) {
      return (
        <video controls className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <Image
          src={url}
          alt="Project image"
          width={500}
          height={350}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover"
        />
      );
    }
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
              {renderMedia(project.imageUrl)}
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
                  {renderMedia(activeProject.imageUrl)}
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