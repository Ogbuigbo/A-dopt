import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function LaboratoryServices() {
  return (
    <section className="py-10 md:px-10 px-6 xl:px-[150px] lg:px-[50px] bg-[#f8f9fa]">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-start gap-16">
        
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-8">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            Precision Testing
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Advanced Laboratory Services for Quality Assurance
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our state-of-the-art laboratory is equipped with cutting-edge technology to deliver precise and reliable testing results. 
            Our expert technicians are committed to maintaining the highest standards of quality and safety, ensuring that your engineering projects are supported with accurate data and analysis.
          </p>

          <div>
            <Link href="/services/laboratory-testing?section=laboratory">
              <button className="px-6 py-3 text-white bg-[#C8102E] hover:bg-[#A10D24] rounded-md shadow-md">
                Learn More
              </button>
            </Link>
          </div>
        </div>


               {/* Image Section */}
               <div className="lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128318/PHOTO-2024-12-20-16-03-27_rvvuti.jpg" // Replace with the actual image path or URL
            alt="Advanced laboratory setup"
            width={500}
            height={500}
            className="w-full rounded-md object-cover h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}

export default LaboratoryServices;
