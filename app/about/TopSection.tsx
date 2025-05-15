import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TopSection() {
  return (
    <>
      {/* Projects Section */}
      <section className="py-12 px-4 md:px-8 bg-[#f2f4f6] lg:px-[120px] text-center">
        {/* Title */}
        <div className="mb-8 md:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Projects
          </h1>
          <p className="mt-2 md:mt-4 text-gray-600 text-base md:text-lg">
            Explore our diverse projects in engineering and environmental services.
          </p>
        </div>

        {/* Images Section 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4">
          {/* Image 1 */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734512732/freepik-export-20241218090432gocp_lep3fo.png"
              alt="Automation Solutions"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Automation Solutions</h3>
              <p>Advanced automation for industrial sectors to improve efficiency and safety.</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734511037/freepik-export-20241218083619fTKO_jkq1pb.png"
              alt="Environmental Project"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Environmental Project</h3>
              <p>Environmental sustainability solutions for a greener future.</p>
            </div>
          </div>

            {/* Image 2 */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128320/PHOTO-2024-12-20-16-05-18_yzhuct.jpg"
              alt="Civil Construction"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Civil Construction</h3>
              <p>Building resilient infrastructure with a focus on sustainability and innovation.</p>
            </div>
          </div>
        </div>

        {/* Text and Button */}
  

        {/* Images Section 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-4 mt-12 md:mt-4">
          {/* Image 1 */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png"
              alt="Laboratory Solutions"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Laboratory Solutions</h3>
              <p>Providing high-quality testing solutions for various laboratory needs.</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516193/freepik-export-20241218100006QWJ0_c9zabr.png"
              alt="Environmental Project"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Environmental Management</h3>
              <p>Implementing sustainable practices in environmental management.</p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg relative group">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736696912/spill_tcvb7p.png"
              alt="Environmental Project"
              width={500}
              height={350}
              className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white text-lg p-4 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Oil Spillage Solutions</h3>
              <p>Advanced solutions to mitigate and manage oil spills, protecting ecosystems.</p>
            </div>
          </div>
        </div>

        {/* Text and Button */}
     
      </section>
    </>
  );
}

export default TopSection;