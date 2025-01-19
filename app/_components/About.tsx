"use client"

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section 
      className="py-10 md:px-10 px-6 xl:px-[150px] lg:mt-[200px] lg:px-[50px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center gap-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            About A-Dopt International Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A-Dopt International Services Limited has been a leader in engineering consultancy since 2009, committed to delivering innovative solutions while prioritizing sustainability and excellence in every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Statistics Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              <p className="text-gray-600 mt-4">
              To ensure efficient and prompt service delivery in concurrence with clients. Strategic objectives and policies while ensuring that optimal standard is maintained.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              <p className="text-gray-600 mt-4">
              To be the most preferred indigenous EEPC company providing valuable solutions to our clients in Nigeria and around the Globe and to become the foremost Engineering and Environmental Consulting Firm in Nigeria and West Africa.
              </p>
            </motion.div>
            {/* <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">10 years</h2>
              <p className="text-gray-600">
                With over 10 years of experience, our team is equipped to handle complex engineering challenges with integrity and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">10 values</h2>
              <p className="text-gray-600">
                Our core values include Integrity, Excellence, Innovation, and Sustainability, guiding us in every project we undertake.
              </p>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734420135/warehouse-workers-wearing-yellow-helmets-laughing-chatting-work-smiling-african-american-men-storehouse-employees-protective-hard-hats-overall-having-fun-conversation_luxwyz.jpg"
            alt="Team of A-Dopt International Services"
            width={500}
            height={700}
            className="w-full rounded-md object-cover h-[300px] lg:h-[600px]"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default About;
