"use client"

import React from 'react'
import { motion } from 'framer-motion';
import SnakeLine from '../../_components/SnakeLine';
import Link from 'next/link';

function Hero() {
  return (
    <div
      className="relative w-full h-[800px] flex flex-col justify-center items-center text-white bg-cover bg-center transition-all duration-300 ease-in-out"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734680453/tenweb_media_xeIhxPKz_jpuixx.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative flex flex-col items-center px-6 lg:px-12 mt-16 text-center z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Leading Enviromental Management Solutions
        </h1>
        <p className="text-lg md:text-xl mb-8 lg:w-[800px]">
        At A-Dopt International Services Limited, we are dedicated to providing innovative environmental management consultancy services. Our team of experts ensures sustainable practices and compliance with environmental regulations, fostering a greener future for all.						
        </p>

        {/* Snake Line */}
        <SnakeLine />

        {/* Call to Action */}
        <div className="mt-8 flex gap-6">
          <Link href="/contact">
            <button className="py-3 px-6 rounded-lg bg-white text-black font-medium shadow-lg transition-all duration-300 hover:opacity-70">
              Get in Touch
            </button>
          </Link>
          <Link href="/services/enviromental-management?section=enviroment">
            <button className="py-3 px-6 rounded-lg border-2 border-white text-white font-medium shadow-lg transition-all duration-300 hover:bg-white hover:text-black">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero;
