import React from 'react';

function Section() {
  const services = [
    {
      title: 'Custom Engineering Design',
      description:
        'We specialize in delivering custom engineering designs that meet the specific needs of your projects. From concept to final design, our solutions are tailored for performance, efficiency, and sustainability.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736695381/african-american-developer-setting-up-gears-model-manufacturing-software-developing-engine-product-technical-industry-innovation-creating-turbine-design-with-industrial-cad-science_wnsztn.jpg',
      icon: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1679371533/icons/design_icon.svg', // Replace with your icon path
    },
    {
      title: 'Process Optimization',
      description:
        'Maximize efficiency and reduce operational costs with our process optimization solutions. We analyze existing workflows and identify areas for improvement, implementing strategies that increase productivity and minimize waste.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736695190/optimization_hrcdmx.png',
      icon: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1679371533/icons/optimization_icon.svg', // Replace with your icon path
    },
    {
      title: 'Regulatory Compliance Engineering',
      description:
        'Our team ensures that your engineering projects meet all necessary regulatory standards. Whether it’s environmental compliance or safety certifications, we provide the expertise needed to navigate complex regulations.',
      image: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1737714128/PHOTO-2025-01-16-11-53-14_2_zagvup.jpg',
      icon: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1679371533/icons/compliance_icon.svg', // Replace with your icon path
    },
  ];

  return (
    <section className="py-[8px] md:px-10 px-6 xl:px-[150px] bg-[#f8f9fa]">
      <div className="mx-auto max-w-screen-xl space-y-16">
        {/* Title Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Engineering Services</h2>
          <p className="text-lg text-gray-600">Innovative solutions designed for your unique engineering needs.</p>
        </div>

        {/* Services Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300"
            >
              {/* Service Image */}
              <div className="relative w-full h-[250px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                {/* Optionally, add a button to learn more */}
                {/* <button className="px-6 py-2 text-white bg-[#C8102E] hover:bg-[#A50A26] rounded-md shadow-md transition-all duration-300">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;