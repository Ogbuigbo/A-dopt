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
          "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734692017/freepik__enhance__91157_mummmp.png')", // Background image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col xl:flex-row justify-start xl:gap-[150px] xl:items-end  px-6 lg:px-12 mt-16 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Title */}
        <div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Advanced <br /> Laboratory Testing
        </h1>

        {/* Description */}
        <p className="text md:text-xl mb-8 lg:w-[800px] text-left">
          Our state-of-the-art laboratory testing services provide accurate and
          reliable results across a wide range of industries. From
          environmental analysis to advanced materials testing, we leverage
          cutting-edge technology and expertise to ensure precision and
          compliance with global standards.
        </p>
        </div>
       

        {/* Play Button */}
        <button
          onClick={openVideo}
          className="mt-6 flex items-center justify-center w-20 h-20 bg-[#C8102E] rounded-full shadow-lg relative group"
        >
          {/* Pulsating Effect */}
          <span className="absolute inset-0 w-full h-full bg-[#C8102E] rounded-full opacity-75 animate-pulse"></span>
          {/* Play Icon */}
          <span className="relative z-10 text-white text-4xl">▶</span>
        </button>
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
