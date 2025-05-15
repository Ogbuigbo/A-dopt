import Image from 'next/image';
import React from 'react';

function ProcurementSolutions() {
  return (
    <section className="py-8 md:px-10 px-6 xl:px-[150px] lg:px-[50px]">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733920163/tenweb_media_txQWQhXJ_t9oj7r.webp" // Replace with actual image URL
            alt="Procurement and Logistics"
            width={600}
            height={400}
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Streamlined Procurement and Logistics Solutions for Your Projects
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At A-Dopt International Services, we specialize in optimizing procurement strategies and logistics management. 
            Our team ensures timely delivery of high-quality materials and equipment, reducing costs and meeting project deadlines efficiently.
          </p>

          {/* Bullet Points */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              {/* Placeholder for Truck Icon */}
              <span className="text-2xl">🚚</span>
              <p className="text-gray-600">
                Efficient management of procurement processes to reduce costs.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🚚</span>
              <p className="text-gray-600">
                Timely logistics support to ensure project deadlines are met.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">🚚</span>
              <p className="text-gray-600">
                Expertise in sourcing high-quality materials and equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcurementSolutions;
