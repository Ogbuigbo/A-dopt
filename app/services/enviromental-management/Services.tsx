import React from "react";
import Image from "next/image";
import { Globe, Database, ShieldCheck, Trash2, SprayCan, Package, Wind, Droplet, MapPin } from "lucide-react";

const EnvironmentalServices = () => {
  return (
    <div className="bg-white py-8 px-6 md:py-16 md:px-20 lg:px-[120px]">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 uppercase mb-4 md:mb-6 tracking-wide">
          Environmental Management <br /> & Consultancy Services
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Column: Images */}
        <div className="flex flex-col space-y-6 flex-1">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734512732/freepik-export-20241218090432gocp_lep3fo.png"
            alt="Baseline Studies"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128320/PHOTO-2024-12-20-16-05-18_yzhuct.jpg"
            alt="Excavation"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736696912/spill_tcvb7p.png"
            alt="Oil Spill Cleanup"
            width={500}
            height={200}
            className="rounded-lg shadow-lg h-[400px] object-cover"
          />
        </div>

        {/* Right Column: Services List */}
        <div className="flex-1">
          <div className="bg-blue-800 text-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-yellow-400" />
                <span>Environmental Baseline Studies</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                <span>Environmental Impact Assessment</span>
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
                <span>Post Impact Assessment</span>
              </li>
              <li className="flex items-center gap-3">
                <Database className="w-6 h-6 text-purple-400" />
                <span>Environmental Database Management</span>
              </li>
              <li className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-red-400" />
                <span>Pollution Control and Oil Spill Cleanup</span>
              </li>
              <li className="flex items-center gap-3">
                <Droplet className="w-6 h-6 text-blue-500" />
                <span>Environmental (Bio) Remediation</span>
              </li>
              <li className="flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-orange-500" />
                <span>Waste Management</span>
              </li>
              <li className="flex items-center gap-3">
                <SprayCan className="w-6 h-6 text-yellow-600" />
                <span>Fumigation and Pest Control</span>
              </li>
              <li className="flex items-center gap-3">
                <Package className="w-6 h-6 text-pink-500" />
                <span>Industrial Cleaning Services (Tanks, Vessels)</span>
              </li>
              <li className="flex items-center gap-3">
                <Wind className="w-6 h-6 text-green-500" />
                <span>Air Quality Studies</span>
              </li>
              <li className="flex items-center gap-3">
                <Droplet className="w-6 h-6 text-blue-600" />
                <span>Water Borehole Drilling and Reticulation</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-teal-400" />
                <span>Dredging and Reclamation</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-gray-500" />
                <span>Geotechnical Services</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-purple-500" />
                <span>Location Preparation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalServices;
