"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Open the video modal
  const openVideo = () => {
    setIsVideoOpen(true);
  };

  // Close the video modal
  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <div
      className="relative w-full h-[700px] flex flex-col justify-center items-start text-white bg-cover bg-center transition-all duration-300 ease-in-out"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128318/PHOTO-2024-12-20-16-05-14_d21g80.jpg')", // Updated professional image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col xl:flex-row justify-start xl:gap-[150px] xl:items-start px-6 lg:px-12 mt-16 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Title */}
        <div className="max-w-[700px]">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-100 leading-tight mb-6">
            Engineering Solutions for the Future of Innovation
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8">
            We provide cutting-edge engineering services that empower your projects, accelerate innovation, and ensure long-term success. Our expertise spans across diverse industries, ensuring scalable and sustainable solutions for every challenge.
          </p>

          {/* Call to Action */}
          <div className="flex gap-6">
            <button
              onClick={openVideo}
              className="px-6 py-3 text-white bg-[#C8102E] hover:bg-[#A50A26] rounded-md shadow-lg transition-all duration-300 ease-in-out"
            >
              Watch Our Approach
            </button>
            <button className="px-6 py-3 text-white bg-transparent border-2 border-[#C8102E] hover:bg-[#C8102E] hover:text-white rounded-md shadow-lg transition-all duration-300 ease-in-out">
              Get in Touch
            </button>
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-black w-[90%] max-w-3xl">
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 z-50"
            >
              ✕
            </button>

            {/* Video Player */}
            <div className="relative">
              <video
                controls
                autoPlay
                className="w-full h-[400px] object-contain rounded-lg"
                src="https://res.cloudinary.com/dpkn1ppzj/video/upload/v1734684508/3ac9f25821ec47c19edd7d972151793b_gmf9u9.mp4" // Replace with your video link
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;


