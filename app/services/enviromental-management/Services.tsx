"use client"

import React, { useState } from "react";
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

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const EnvironmentalServices = () => {
  const services: Service[] = [
    {
      title: "Environmental Baseline Studies",
      description: "At ADISL, we carry out environment baseline studies (EBS) which involves the collection and analysis of data to establish the current state of the environment in a specific area. As EBS is a prerequisite before any major project, development, or activity to assess potential environmental impacts and inform decision-making.",
      icon: <Globe className="text-yellow-400" size={32} />,
    },
    {
      title: "Environmental Impact Assessment",
      description: "Our team uses (EIA) systematic process to evaluate the potential environmental effects of a proposed project or development before it begins. It aims to identify, predict, and mitigate adverse impacts on the environment, ensuring sustainable development while balancing economic and social benefits. We adhere to steps like screening, scoping,mitigation, reporting,monitoring and follow up to endure that our EIA protects ecosystems and biodiversity, promotes sustainable resource management, reduces risk of environmental damage and costly future remediation, encourages public participation and transparency.",
      icon: <ShieldCheck className="text-green-400" size={32} />,
    },
    {
      title: "Post Impact Assessment",
      description: "We utilize Post-impact assessment as a critical process undertaken to evaluate the consequences of a specific event, project, or intervention in other to provides a comprehensive analysis of the outcomes—both intended and unintended—and determines the extent to which objectives were achieved. This evaluation is crucial for understanding the effectiveness of actions taken, identifying areas for improvement, and informing future strategies.",
      icon: <ShieldCheck className="text-blue-400" size={32} />,
    },
    {
      title: "Environmental Database Management",
      description: "At ADISL, our Environmental database management involves the collection, organization, storage, and analysis of environmental data to support sustainable decision-making and resource management. These databases store diverse types of information, such as air and water quality, soil composition, biodiversity, climate patterns, and pollution levels. Effective management ensures data integrity, accessibility, and usability for stakeholders, including researchers, policymakers, and conservationists.",
      icon: <Database className="text-purple-400" size={32} />,
    },
    {
      title: "Pollution Control and Oil Spill Cleanup",
      description: "Pollution, particularly from oil spills, poses a severe threat to marine ecosystems and coastal environments. Oil spills occur when petroleum is accidentally released into oceans or waterways during drilling, transportation, or storage. These spills can devastate marine life, harm ecosystems, and disrupt local economies reliant on fishing and tourism. At ADISL, we utilize methods like containment and skimming, chemical dispersants, bioremediation, manual cleanup and innovative technologies . This brings about Prevention and rapid response as they are critical in minimizing the environmental and economic damage caused by oil spills.",
      icon: <Trash2 className="text-red-400" size={32} />,
    },
    {
      title: "Environmental (Bio) Remediation",
      description: "Bioremediation is a natural process that uses microorganisms, plants, fungi, or enzymes to break down and neutralize pollutants in the environment, particularly in soil, water, and air. Our team indulges this eco-friendly technology as an efficient and cost-effective method for cleaning up contaminants such as oil spills, heavy metals, pesticides, and industrial waste.",
      icon: <Droplet className="text-blue-500" size={32} />,
    },
    {
      title: "Waste Management",
      description: " our team ensures proper Waste management through thr process of collecting, transporting, processing, recycling, and disposing of waste materials in an efficient and environmentally responsible manner. The goal of waste management is to reduce the negative impact of waste on human health and the environment.",
      icon: <Trash2 className="text-orange-500" size={32} />,
    },
    {
      title: "Fumigation and Pest Control",
      description: "Fumigation and pest control are essential methods used to manage and eliminate unwanted pests in residential, commercial, and industrial spaces. At ADISL ,Fumigation involves the use of chemical agents in the form of gas or vapor to eradicate pests that infest buildings, crops, or stored goods. It is particularly effective for termites, rodents, and insects, providing a comprehensive solution for hard-to-reach areas. On the other hand, pest control encompasses various strategies, such as traps, repellents, biological control, and chemical treatments, to prevent or reduce pest populations. Both methods aim to protect health, property, and the environment, as practiced by our professional expertise to ensure",
      icon: <SprayCan className="text-yellow-600" size={32} />,
    },
    {
      title: "Industrial Cleaning Services (Tanks, Vessels)",
      description: "our professionals in this field use advanced equipment and techniques to ensure thorough cleaning while adhering to strict safety and environmental standards. Industrial cleaning is crucial for maintaining operational efficiency, ensuring worker safety, prolonging the lifespan of equipment, and meeting regulatory compliance.",
      icon: <Package className="text-pink-500" size={32} />,
    },
    {
      title: "Air Quality Studies",
      description: "Because these studies are crucial for creating policies aimed at reducing emissions, improving public health, and mitigating climate change impacts. Findings often guide the development of air quality standards and urban planning strategies to ensure cleaner air for communities worldwide. Therefore we focus on assessing and understanding the composition, sources, and impacts of pollutants in the atmosphere. These studies examine both outdoor and indoor air quality, measuring pollutants such as particulate matter (PM2.5 and PM10), nitrogen oxides (NOx), sulfur dioxide (SO2), carbon monoxide (CO), volatile organic compounds (VOCs), and ozone (O3).",
      icon: <Wind className="text-green-500" size={32} />,
    },
    {
      title: "Water Borehole Drilling and Reticulation",
      description: "At ADISL, our professionals utilizes process such as site survey,drilling,casing and grouting, pump installation and water quality testing to ensure the safe creating of a deep, narrow well to access groundwater. It involves drilling into the Earth’s subsurface using specialized equipment to reach aquifers, which are underground layers of water-bearing rock. We also reticulate by distributing water from a central source to multiple locations. Borehole drilling and reticulation systems are essential for providing reliable water access in residential, agricultural, and industrial settings, particularly in areas with limited municipal water supply.",
      icon: <Droplet className="text-blue-600" size={32} />,
    },
    {
      title: "Dredging and Reclamation",
      description: "Dredging and reclamation are key processes in coastal and marine construction,Our professionals executes the process of dredging by excavation or removal of sediment and debris from the bottom of water bodies, such as rivers, lakes, and oceans. To deepen or widen navigation channels, improve water flow, or remove pollutants. Reclamation, on the other hand, is what we do through the process of creating new land from water bodies, often by filling them with dredged materials, sand, or other materials. This reclaimed land is commonly used for urban development, infrastructure, agriculture, and industrial purposes. The process helps combat land shortages and allows for expansion in densely populated coastal areas. Together, dredging and reclamation are instrumental in shaping the environment for economic and infrastructure development.",
      icon: <Globe className="text-teal-400" size={32} />,
    },
    {
      title: "Geotechnical Services",
      description: "Our Geotechnical services team ensures range of specialized engineering services focused on understanding the properties of soil and rock materials beneath the earth’s surface. These services are crucial for assessing the suitability of a site for construction and ensuring the stability and safety of structures. Geotechnical engineers conduct site investigations, collect soil samples, perform laboratory testing, and analyze the data to provide recommendations on foundation design, slope stability, soil compaction, and groundwater management. Our expertise is vital in preventing issues like soil erosion, foundation failure, and landslides, ensuring that building projects are safe, efficient, and durable.",
      icon: <MapPin className="text-gray-500" size={32} />,
    },
    {
      title: "Location Preparation",
      description: "our location preparation services for construction is a crucial step in ensuring a successful building project. It involves assessing and modifying the site to meet the specific requirements of the project. Some of our methods include, clearing and excavation, access roads, utilities and infrastructure, environmental considerations and safety measures.Proper locat",
      icon: <MapPin className="text-purple-500" size={32} />,
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
    <div className="max-w-6xl mx-auto px-6 pb-8">
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
        ))}
      </div>
    </div>
  );
};

export default EnvironmentalServices;