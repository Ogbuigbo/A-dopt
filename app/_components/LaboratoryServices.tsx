import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LaboratoryServices() {
  return (
    <section className="py-24 md:px-10 px-6 xl:px-[150px] bg-[#f8f9fa] lg:px-[50px]">
      <div className="mx-auto max-w-screen-xl grid grid-cols-1  gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-6 flex flex-col md:flex-row  md:gap-20">
            <div className=''>
            <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            Precision Testing
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Advanced Laboratory Services for Quality Assurance
          </h1>
            </div>
        <div className='flex flex-col gap-2 items-baseline'>
        <p className="text-lg text-gray-600 leading-relaxed lg:w-[600px]">
            Our state-of-the-art laboratory is equipped with cutting-edge technology to deliver precise and reliable testing results. Our expert technicians are committed to maintaining the highest standards of quality and safety, ensuring that your engineering projects are supported with accurate data and analysis.
          </p>
          <Link href='/services/laboratory-testing?section=laboratory'>
          <button className="px-6 py-3 text-white bg-[#C8102E] hover:bg-[#A10D24] rounded-md shadow-md">
            Learn More
          </button>
          </Link>
        </div>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734427461/freepik__enhance__19328_hedemi.png" // Replace with the actual image path or URL
            alt="Advanced laboratory setup"
            width={800}
            height={300}
            className="w-full rounded-md h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default LaboratoryServices;
