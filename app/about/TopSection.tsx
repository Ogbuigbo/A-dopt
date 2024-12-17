import React from 'react';
import Image from 'next/image';

function TopSection() {
  return (
    <section className="pb-16 px-4 md:px-8 xl:px-[120px] mt-[100px]">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center text-center w-full">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-10 md:mt-20 flex flex-col items-center justify-center gap-2">
          About Our Expertise
          <hr className="w-[80px] md:w-[100px] bg-slate-500 p-[1px] flex justify-center items-center mt-2" />
        </h1>
        <p className="mt-4 md:mt-6 w-full md:w-[600px] text-base md:text-lg text-gray-700">
          A-Dopt International Services Limited excels in industrial automation and environmental management. Our commitment to quality and sustainability sets us apart in the industry.
        </p>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-12 md:mt-16">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left px-4">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            A-Dopt International Services Nigeria Limited was founded in 2009 with a vision to provide top-tier engineering consultancy services. Our mission is to deliver high-quality solutions that not only meet client needs but also promote sustainable practices. We pride ourselves on our core values: Integrity, Excellence, Innovation, and Sustainability. These principles guide our operations and ensure that we maintain the highest standards in every project we undertake, fostering a culture of continuous improvement and environmental stewardship.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734426880/front-view-medical-control-covid19-concept_qji7xu.jpg"
            alt="about-img"
            width={800}
            height={400}
            className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-md"
          />
        </div>
      </div>

      {/* Full-width Image */}
  
    </section>
  );
}

export default TopSection;
