"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SnakeLine from "./SnakeLine";
import Link from "next/link";

function Hero() {
  const images = [
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128320/PHOTO-2024-12-20-16-05-18_yzhuct.jpg",
      title: "Empowering Engineering Excellence",
      description:
        "At A-DOPT International Services, we specialize in Industrial Automation, Electromechanical, Instrumental Engineering, and Environmental Services. Our mission is to deliver innovative solutions that drive success for our clients worldwide.",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734351929/engineering_ffbivj.png",
      title: "Innovative Engineering Solutions",
      description:
        "We provide cutting-edge engineering solutions, helping businesses optimize their processes and enhance productivity in various sectors.",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714128/PHOTO-2025-01-16-11-53-15_2_sdmrxp.jpg",
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
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentIndex].src})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col items-center px-6 lg:px-12 mt-16 text-center z-20"
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl mt-[200px] lg:mt-0 font-bold leading-tight mb-4"
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
        >
          {images[currentIndex].title}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%]"
          key={currentIndex}
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
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Link href="/about">
            <button className="py-2 px-4 sm:py-3 sm:px-6 rounded-lg bg-white text-black font-medium shadow-lg transition-all duration-300 hover:opacity-70">
              Learn More
            </button>
          </Link>
          <Link href="/services">
            <button className="py-2 px-4 sm:py-3 sm:px-6 rounded-lg border-2 border-white text-white font-medium shadow-lg transition-all duration-300 hover:bg-white hover:text-black">
              Our Services
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="lg:absolute lg:bottom-[-200px] mt-[350px] sm:mt-[400px] left-0 w-full max-w-[1200px] bg-[#00205B] rounded-lg shadow-2xl py-6 px-4 sm:px-6 lg:px-12 text-white z-30">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
          {[
            {
              img: "https://img.icons8.com/ios-filled/50/ffffff/checked.png",
              title: "100% Confidential",
              description:
                "We ensure the highest levels of confidentiality in every project, safeguarding your sensitive data and intellectual property.",
            },
            {
              img: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736848097/DALL_E_2025-01-14_10.47.13_-_A_simple_and_clean_icon_representing_a_team_of_people._The_icon_should_feature_a_group_of_two_or_three_stylized_human_figures_with_minimal_details_s_wqxzbm.webp",
              title: "Qualified Team",
              description:
                "Our team consists of skilled professionals with extensive experience in engineering, ensuring top-tier solutions for your needs.",
            },
            {
              img: "https://img.icons8.com/ios-filled/50/ffffff/umbrella.png",
              title: "Individual Approach",
              description:
                "We offer tailored solutions for each client, ensuring that every project aligns with your unique needs and goals.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4 max-w-full sm:max-w-[330px] bg-[#011b44] rounded-lg p-6 shadow-lg transition-all duration-300 hover:bg-[#0A1D39]"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-12 h-12 sm:w-14 sm:h-14"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-md">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;