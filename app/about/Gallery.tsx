import React from 'react';
import Image from 'next/image';

function Gallery() {
  const projects = [
    { id: 1, title: 'Project 1', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128320/PHOTO-2024-12-20-16-05-18_yzhuct.jpg' },
    { id: 2, title: 'Project 2', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128319/PHOTO-2024-12-20-16-05-16_wetu61.jpg' },
    { id: 3, title: 'Project 3', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128318/PHOTO-2024-12-20-16-03-27_rvvuti.jpg' },
    { id: 4, title: 'Project 4', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128318/PHOTO-2024-12-20-16-05-12_bisaso.jpg' },
    { id: 5, title: 'Project 5', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128319/PHOTO-2024-12-20-16-05-19_jrkuwo.jpg' },
    { id: 6, title: 'Project 6', image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734511037/freepik-export-20241218083619fTKO_jkq1pb.png' },
  ];

  return (
    <div className="mt-10 bg-[#f2f4f6] py-10">
      <h1 className="text-6xl text-center font-bold mb-10">Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden group rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600} // You can adjust the width and height based on your design
              height={400}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {/* <span className="text-white text-lg font-semibold">{project.title}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
