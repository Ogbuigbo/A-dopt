import React from 'react';
import { FlaskConical, Microscope, Globe, Droplet, AirVent, Wheat, Factory } from 'lucide-react';

function Section() {
  const services = [
    {
      title: 'Chemical Analysis',
      description: 'Advanced chemical testing for a wide variety of samples, including pharmaceuticals, materials, and industrial products.',
      icon: <FlaskConical className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Microbiology & Biochemistry',
      description: 'Microbial and biochemical testing services for food safety, pharmaceuticals, and water quality.',
      icon: <Microscope className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Geotechnical & Geophysics',
      description: 'Soil, rock, and geotechnical testing to support construction, mining, and environmental assessments.',
      icon: <Globe className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Petroleum Testing',
      description: 'Specialized testing for petroleum products, including fuel quality, viscosity, and composition analysis.',
      icon: <Factory className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Food Testing',
      description: 'Comprehensive food testing for nutritional content, contaminants, and compliance with industry standards.',
      icon: <Wheat className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Water Quality Testing',
      description: 'Testing services for water quality, ensuring safety and compliance for drinking, industrial, and wastewater.',
      icon: <Droplet className="text-[#C8102E]" size={48} />,
    },
    {
      title: 'Air Quality Monitoring',
      description: 'Air quality assessment for environmental compliance, safety, and public health standards.',
      icon: <AirVent className="text-[#C8102E]" size={48} />,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 md:pt-6 md:pb-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Laboratory Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
