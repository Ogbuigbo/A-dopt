"use client"

import React from 'react'
import { motion } from 'framer-motion';
import SnakeLine from './SnakeLine';
import Header from './Header';
import Link from 'next/link';

function Hero() {
  return (
    <div
    className={`w-full h-screen px-6 lg:px-12 flex flex-col justify-between text-white bg-cover bg-center transition-all duration-300 ease-in-out `}
    style={{
      backgroundImage: "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733822074/tenweb_media_vIACnr6S_lahn5i.webp')",
    }}
  >


<motion.div
  className="flex flex-col items-center mt-16 lg:mt-[200px] xl:mt-[380px]  md:mt-24 h-full text-center text-white bg-opacity-60 px-6 md:px-12 z-20 relative"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
    Empowering Engineering Excellence
  </h1>
  <p className="text-lg md:text-xl mb-8 lg:w-[800px]">
    At A-Dopt International Services, we specialize in Industrial Automation, Electromechanical, and Instrumental Engineering. Our mission is to deliver innovative solutions that drive success for our clients worldwide.
  </p>

 

  <SnakeLine/>

  <Link href="/contact" className='flex gap-6'>
    <button className="py-3 px-6 rounded-lg mt-6 bg-white text-black font-medium transition-all duration-300 ease-in-out shadow-lg hover:opacity-50">
      Learn More
    </button>
    <button className="py-3 px-6 rounded-lg mt-6 bg-transparent border border-white text-white font-medium transition-all duration-300 ease-in-out shadow-lg hover:bg-white hover:text-black">
      Our Services
    </button>
  </Link>
</motion.div>


    </div>
  )
}

export default Hero
