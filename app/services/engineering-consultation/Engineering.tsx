import React from 'react';
import Image from 'next/image';
import { Wrench, Bolt, Settings, Cpu, Package, Hammer } from 'lucide-react';

const Engineering = () => {
  return (
    <div className="bg-white py-16 px-[120px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 uppercase mb-6 tracking-wide leading-snug">
          Electromechanical <br /> and <br /> Instrumentation Engineering Services
        </h1>
      </div>

      {/* First Row: Header Text and Image */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
        {/* Header Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Electromechanical Solutions
          </h2>
          <p className="text-gray-600">
            We specialize in providing top-notch engineering services in mechanical,
            electrical, and automation systems, ensuring reliability and excellence.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736446409/elctro_fkh76z.png"
            alt="Control Panel"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Second Row: Image and Expertise/Services */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736446409/pac_d04tqr.png"
            alt="Engineer Working"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Expertise and Services */}
        <div className="flex-1 flex items-center gap-8">
            <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Expertise</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Settings className="text-blue-500 w-6 h-6" />
              <p className="text-gray-700 font-medium">Mechanical Engineering</p>
            </div>
            <div className="flex items-center gap-4">
              <Bolt className="text-yellow-500 w-6 h-6" />
              <p className="text-gray-700 font-medium">Electrical Engineering</p>
            </div>
            <div className="flex items-center gap-4">
              <Cpu className="text-green-500 w-6 h-6" />
              <p className="text-gray-700 font-medium">Industrial Systems Automation</p>
            </div>
            </div>
         
          </div>

        <div>
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-6">Services We Provide</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Package className="text-purple-500 w-6 h-6" />
              <p className="text-gray-700">Procurement</p>
            </div>
            <div className="flex items-center gap-4">
              <Hammer className="text-red-500 w-6 h-6" />
              <p className="text-gray-700">Fabrication</p>
            </div>
            <div className="flex items-center gap-4">
              <Wrench className="text-orange-500 w-6 h-6" />
              <p className="text-gray-700">Installation</p>
            </div>
            <div className="flex items-center gap-4">
              <Settings className="text-teal-500 w-6 h-6" />
              <p className="text-gray-700">Calibration</p>
            </div>
          </div>
        </div>
         
        </div>
      </div>

      
    </div>
  );
};

export default Engineering;
