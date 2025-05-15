import React from 'react';
import Image from 'next/image';
import { Wrench, Bolt, Settings, Cpu, Package, Hammer, PenTool, Factory } from 'lucide-react';

const Engine = () => {
  return (
    <div className="bg-white py-16 px-8">
    

      {/* New Section: Procurement and Installation */}
      <div className="mt-16">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-8">
          Procurement & Installation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="space-y-6">
            <div>
              <Image
                src="/mnt/data/Screenshot 2025-01-09 at 19.23.28.png"
                alt="Motors and Flanges"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-center text-lg font-semibold text-gray-800 mt-2">Motors</p>
            </div>
            <div>
              <Image
                src="/mnt/data/Screenshot 2025-01-09 at 19.23.28.png"
                alt="Valves"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <p className="text-center text-lg font-semibold text-gray-800 mt-2">Flanges</p>
            </div>
          </div>

          {/* Text and Icons Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Factory className="text-blue-500 w-6 h-6" />
                <p className="text-gray-700">Pumps</p>
              </div>
              <div className="flex items-center gap-4">
                <Settings className="text-yellow-500 w-6 h-6" />
                <p className="text-gray-700">Motors</p>
              </div>
              <div className="flex items-center gap-4">
                <Bolt className="text-red-500 w-6 h-6" />
                <p className="text-gray-700">Bolts</p>
              </div>
              <div className="flex items-center gap-4">
                <PenTool className="text-green-500 w-6 h-6" />
                <p className="text-gray-700">Xmas Trees</p>
              </div>
              <div className="flex items-center gap-4">
                <Hammer className="text-purple-500 w-6 h-6" />
                <p className="text-gray-700">Pipes, Elbows</p>
              </div>
              <div className="flex items-center gap-4">
                <Package className="text-teal-500 w-6 h-6" />
                <p className="text-gray-700">Oilfield & Gas Tools and Equipment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engine;
