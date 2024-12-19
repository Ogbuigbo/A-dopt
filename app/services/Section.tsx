import React from 'react';

function Section() {
  const services = [
    {
      title: 'Industrial Automation Solutions',
      description:
        'Our cutting-edge automation solutions are designed to optimize industrial operations. By integrating advanced technologies, we help businesses achieve unparalleled efficiency and productivity. From robotics to process control systems, our solutions are tailored to meet the unique demands of each client.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734598882/tenweb_media_jaPrDqlM_jztsvb.webp',
    },
    {
      title: 'Electromechanical Engineering',
      description:
        'We specialize in providing end-to-end electromechanical engineering services. Our expertise ensures seamless integration of mechanical and electrical systems, delivering solutions that guarantee operational reliability, safety, and enhanced performance for industrial environments.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734598882/tenweb_media_nlVHtYte_ra2ofi.webp',
    },
    {
      title: 'State-of-the-Art Laboratory Services',
      description:
        'Equipped with the latest technology, our laboratory offers a comprehensive range of testing services. We ensure all products and systems meet strict quality, safety, and compliance standards, giving our clients the confidence they need to innovate and grow.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734598882/tenweb_media_QtxKomEP_havjtq.webp',
    },
    {
      title: 'Efficient Procurement and Logistics',
      description:
        'Our streamlined procurement and logistics services are designed to deliver projects on time and within budget. From sourcing high-quality materials to coordinating deliveries, we ensure smooth execution at every stage of the supply chain.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734598882/tenweb_media_GKqfPJPi_qwusft.webp',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 my-12 py-12 ${
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
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section;
