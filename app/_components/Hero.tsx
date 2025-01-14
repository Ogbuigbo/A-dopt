"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SnakeLine from "./SnakeLine";
import Link from "next/link";

function Hero() {
  const images = [
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734421584/freepik__enhance__23965_o23xez.png",
      title: "Empowering Engineering Excellence",
      description:
        "At A-DOPT International Services, we specialize in Industrial Automation, Electromechanical, Instrumental Engineering, and Environmental Services. Our mission is to deliver innovative solutions that drive success for our clients worldwide.",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736695386/architectural-blueprints_g7sggt.jpg",
      title: "Innovative Engineering Solutions",
      description:
        "We provide cutting-edge engineering solutions, helping businesses optimize their processes and enhance productivity in various sectors.",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736849301/group-workers-organizing-protest_cvdhen.jpg",
      title: "Driving Global Success",
      description:
        "Our global network allows us to deliver tailor-made solutions that meet the specific needs of industries worldwide.",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736695672/set-office-supplies_oz9cu0.jpg",
      title: "Future-Ready Technologies",
      description:
        "We are at the forefront of technological advancements, delivering state-of-the-art solutions for a smarter, more efficient world.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image and text every 3 seconds

    return () => clearInterval(interval); // Clean up interval
  }, [images]);

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center text-white bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentIndex].src})`,
        transition: "background-image 1s ease-in-out", // Smooth background image transition
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col items-center px-6 lg:px-12 mt-16 text-center z-20"
        key={currentIndex} // Forces re-render and complete replacement
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          key={currentIndex} // Ensures full replacement on index change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          {images[currentIndex].title}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl mb-8 lg:w-[800px]"
          key={currentIndex} // Ensures full replacement on index change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {images[currentIndex].description}
        </motion.p>

        {/* Snake Line */}
        <SnakeLine />

        {/* Buttons */}
        <div className="mt-8 flex gap-6">
          <Link href="/about">
            <button className="py-3 px-6 rounded-lg bg-white text-black font-medium shadow-lg transition-all duration-300 hover:opacity-70">
              Learn More
            </button>
          </Link>
          <Link href="/services">
            <button className="py-3 px-6 rounded-lg border-2 border-white text-white font-medium shadow-lg transition-all duration-300 hover:bg-white hover:text-black">
              Our Services
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="absolute bottom-[-200px] left-0 w-full max-w-[1200px] bg-[#00205B] rounded-lg shadow-2xl py-6 px-6 lg:px-12 text-white z-30">
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
          {/* Feature 1 */}
          <div className="flex items-start gap-6 max-w-[330px]  rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-[#0A1D39]">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/checked.png"
              alt="Confidential"
              className="w-14 h-14"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">100% Confidential</h3>
              <p className="text-md">
                We ensure the highest levels of confidentiality in every project, safeguarding your sensitive data and intellectual property.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start gap-6 max-w-[330px]  rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-[#0A1D39]">
            <img
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736848097/DALL_E_2025-01-14_10.47.13_-_A_simple_and_clean_icon_representing_a_team_of_people._The_icon_should_feature_a_group_of_two_or_three_stylized_human_figures_with_minimal_details_s_wqxzbm.webp"
              alt="Qualified Team"
              className="w-14 h-14"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Qualified Team</h3>
              <p className="text-md">
                Our team consists of skilled professionals with extensive experience in engineering, ensuring top-tier solutions for your needs.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start gap-6 max-w-[330px]  rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-[#0A1D39]">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/umbrella.png"
              alt="Individual Approach"
              className="w-14 h-14"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">Individual Approach</h3>
              <p className="text-md">
                We offer tailored solutions for each client, ensuring that every project aligns with your unique needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
