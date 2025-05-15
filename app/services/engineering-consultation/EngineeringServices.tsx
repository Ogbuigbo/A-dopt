import Image from 'next/image';
import React from 'react';

function EngineeringServices() {
  return (
    <section className="py-24 px-6 lg:px-10 xl:px-[150px] bg-[#f8f9fa]">
      <div className="mx-auto max-w-screen-xl">
        {/* Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase text-sm font-semibold text-[#C8102E] tracking-wide mb-4">
              Engineering Excellence
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Tailored Engineering Solutions for Complex Challenges
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team delivers bespoke engineering solutions designed to meet the unique needs of your projects. Whether you're developing new technologies, improving infrastructure, or ensuring regulatory compliance, we provide the expertise and support to drive success.
            </p>
            <button className="px-6 py-3 text-white bg-[#C8102E] hover:bg-[#A50A26] rounded-md shadow-md transition duration-300 ease-in-out">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747339729/african-american-logistics-managers-team-dicussing-goods-distribution-warehouse-reception-post-office-men-woman-workers-planning-stock-supply-while-chatting-counter-desk_z80kef.jpg" 
              alt="Engineering solutions"
              width={800}
              height={450}
              className="w-full h-[450px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeringServices;