"use client";

import React, { useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string; // Updated to use images instead of icons
}

const EnvironmentalServices = () => {
  const services: Service[] = [
    {
      title: "Environmental Baseline Studies",
      description:
        "At ADISL, we carry out environment baseline studies (EBS) which involves the collection and analysis of data to establish the current state of the environment in a specific area. As EBS is a prerequisite before any major project, development, or activity to assess potential environmental impacts and inform decision-making.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714205/PHOTO-2025-01-16-11-53-16_ruhta8.jpg",
    },
    {
      title: "Environmental Impact Assessment",
      description:
        "Our team uses (EIA) systematic process to evaluate the potential environmental effects of a proposed project or development before it begins. It aims to identify, predict, and mitigate adverse impacts on the environment, ensuring sustainable development while balancing economic and social benefits.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714140/PHOTO-2025-01-16-11-53-01_gwnzbc.jpg",
    },
    {
      title: "Post Impact Assessment",
      description:
        "We utilize Post-impact assessment as a critical process undertaken to evaluate the consequences of a specific event, project, or intervention in order to provide a comprehensive analysis of the outcomes—both intended and unintended—and determines the extent to which objectives were achieved.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714151/PHOTO-2025-01-16-11-53-15_w5oyov.jpg",
    },
    {
      title: "Environmental Database Management",
      description:
        "At ADISL, our Environmental database management involves the collection, organization, storage, and analysis of environmental data to support sustainable decision-making and resource management.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714139/PHOTO-2025-01-16-11-52-58_d4lj90.jpg",
    },
    {
      title: "Pollution Control and Oil Spill Cleanup",
      description:
        "Pollution, particularly from oil spills, poses a severe threat to marine ecosystems and coastal environments. At ADISL, we utilize methods like containment and skimming, chemical dispersants, and bioremediation.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736696912/spill_tcvb7p.png",
    },
    {
      title: "Environmental (Bio) Remediation",
      description:
        "Bioremediation is a natural process that uses microorganisms, plants, fungi, or enzymes to break down and neutralize pollutants in the environment, particularly in soil, water, and air.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714132/PHOTO-2025-01-16-11-52-57_2_va9pyw.jpg",
    },
    {
      title: "Waste Management",
      description:
        "Our team ensures proper waste management through the process of collecting, transporting, processing, recycling, and disposing of waste materials in an efficient and environmentally responsible manner.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714140/PHOTO-2025-01-16-11-53-02_ahwziw.jpg",
    },
    {
      title: "Fumigation and Pest Control",
      description:
        "Fumigation and pest control are essential methods used to manage and eliminate unwanted pests in residential, commercial, and industrial spaces.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714119/PHOTO-2025-01-16-11-53-03_pmbdvz.jpg",
    },
    {
      title: "Industrial Cleaning Services",
      description:
        "Our professionals use advanced equipment and techniques to ensure thorough cleaning while adhering to strict safety and environmental standards.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714137/PHOTO-2025-01-16-11-53-00_2_iej3gs.jpg",
    },
    {
      title: "Air Quality Studies",
      description:
        "We focus on assessing and understanding the composition, sources, and impacts of pollutants in the atmosphere. Findings guide the development of air quality standards and urban planning strategies.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714120/PHOTO-2025-01-16-11-53-04_2_n4bjot.jpg",
    },
    {
      title: "Water Borehole Drilling and Reticulation",
      description:
        "At ADISL, we utilize processes such as site survey, drilling, casing, and water quality testing to ensure safe groundwater access.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734509360/project1_qbhjoz.png",
    },
    {
      title: "Dredging and Reclamation",
      description:
        "Our professionals execute dredging and reclamation processes to deepen or widen channels, improve water flow, and create new land for urban development.",
      image: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128319/PHOTO-2024-12-20-16-05-19_jrkuwo.jpg",
    },
  ];

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the boolean value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-8">
      {/* Header Section */}
   

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 text-center">
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">
                {service.description
                  ? expanded[index]
                    ? service.description
                    : `${service.description.slice(0, 100)}...`
                  : "Description not available."}
                {service.description && (
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-blue-500 ml-2"
                  >
                    {expanded[index] ? "Read Less" : "Read More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalServices;