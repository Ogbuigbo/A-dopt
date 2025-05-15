import React from 'react';

function SectionOne() {
  const services = [
    {
      title: 'Laboratory Testing Services',
      description:
        'Our laboratory offers a wide range of testing services, utilizing cutting-edge technology to ensure the highest accuracy and reliability. From material testing to chemical analysis, we cater to a variety of industries, providing detailed insights that support product development, quality assurance, and regulatory compliance.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516193/freepik-export-20241218100006QWJ0_c9zabr.png',
    },
    {
      title: 'Environmental Testing',
      description:
        'We offer comprehensive environmental testing services, including air quality assessments, water testing, and soil analysis. Our services help businesses and organizations ensure they meet environmental regulations, contributing to sustainability and safe operational practices.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734688528/lab_5_n3xzpo.png', // Update with a relevant image
    },
    {
      title: 'Safety and Compliance Testing',
      description:
        'Our laboratory ensures that your products meet all necessary safety and compliance standards. We offer testing for electrical safety, product durability, and other critical factors that affect product performance and safety in real-world environments.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734688280/lab_4_c3ffiw.png', // Update with a relevant image
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 ">
      {services.map((service, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 my-6 md:py-4 ${
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
          <div className="flex-1 text-center md:text-left" id='laboratory'>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-justify">{service.description}</p>
            {/* <button className="px-6 py-2 border-2 border-[#C8102E] text-[#C8102E] rounded hover:bg-[#C8102E] hover:text-white transition">
              Learn More
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionOne;