import Link from 'next/link';
import React from 'react';

function Section() {
  const services = [
    {
      title: 'Engineering Solutions',
      description:
        'Our cutting-edge automation solutions are designed to optimize industrial operations. By integrating advanced technologies, we help businesses achieve unparalleled efficiency and productivity. From robotics to process control systems, our solutions are tailored to meet the unique demands of each client.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128318/PHOTO-2024-12-20-16-05-14_d21g80.jpg',
      link: '/services/engineering-consultation'
    },
    {
      title: 'Enviromental Management',
      description:
        'We specialize in providing end-to-end electromechanical engineering services. Our expertise ensures seamless integration of mechanical and electrical systems, delivering solutions that guarantee operational reliability, safety, and enhanced performance for industrial environments.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1735128319/PHOTO-2024-12-20-16-05-19_jrkuwo.jpg',
      link: '/services/enviromental-management'
    },
    {
      title: 'Laboratory Services',
      description:
        'Equipped with the latest technology, our laboratory offers a comprehensive range of testing services. We ensure all products and systems meet strict quality, safety, and compliance standards, giving our clients the confidence they need to innovate and grow.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png',
      link: '/services/laboratory-testing'
    },
    {
      title: 'Efficient Procurement and Logistics',
      description:
        'Our streamlined procurement and logistics services are designed to deliver projects on time and within budget. From sourcing high-quality materials to coordinating deliveries, we ensure smooth execution at every stage of the supply chain.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733920163/tenweb_media_txQWQhXJ_t9oj7r.webp',
      link: '/services/engineering-consultation'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 my-12 py-6 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image Section */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full md:w-1/2 h-[350px] object-cover rounded-lg shadow-lg"
          />
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            <Link href={service.link}>
            <button className="px-6 py-2 bg-[#C8102E] text-white rounded  transition">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;

