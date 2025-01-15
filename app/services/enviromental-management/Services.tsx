import React from "react";
import {
  Globe,
  Database,
  ShieldCheck,
  Trash2,
  SprayCan,
  Package,
  Wind,
  Droplet,
  MapPin,
} from "lucide-react";

const EnvironmentalServices = () => {
  const services = [
    {
      title: "Environmental Baseline Studies",
      icon: <Globe className="text-yellow-400" size={32} />,
    },
    {
      title: "Environmental Impact Assessment",
      icon: <ShieldCheck className="text-green-400" size={32} />,
    },
    {
      title: "Post Impact Assessment",
      icon: <ShieldCheck className="text-blue-400" size={32} />,
    },
    {
      title: "Environmental Database Management",
      icon: <Database className="text-purple-400" size={32} />,
    },
    {
      title: "Pollution Control and Oil Spill Cleanup",
      icon: <Trash2 className="text-red-400" size={32} />,
    },
    {
      title: "Environmental (Bio) Remediation",
      icon: <Droplet className="text-blue-500" size={32} />,
    },
    {
      title: "Waste Management",
      icon: <Trash2 className="text-orange-500" size={32} />,
    },
    {
      title: "Fumigation and Pest Control",
      icon: <SprayCan className="text-yellow-600" size={32} />,
    },
    {
      title: "Industrial Cleaning Services (Tanks, Vessels)",
      icon: <Package className="text-pink-500" size={32} />,
    },
    {
      title: "Air Quality Studies",
      icon: <Wind className="text-green-500" size={32} />,
    },
    {
      title: "Water Borehole Drilling and Reticulation",
      icon: <Droplet className="text-blue-600" size={32} />,
    },
    {
      title: "Dredging and Reclamation",
      icon: <Globe className="text-teal-400" size={32} />,
    },
    {
      title: "Geotechnical Services",
      icon: <MapPin className="text-gray-500" size={32} />,
    },
    {
      title: "Location Preparation",
      icon: <MapPin className="text-purple-500" size={32} />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:py-12">
      {/* Header Section */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 uppercase tracking-wide">
        Environmental Management & Consultancy Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalServices;
