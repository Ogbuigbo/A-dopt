import React from 'react';

function Section() {
  return (
    <section className="py-12 px-6 lg:px-[300px]">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Career Development
        </h1>
        <div className="w-16 h-1 bg-red-600 mt-2"></div>
      </div>

      {/* Content */}
      <div className="text-gray-700  leading-relaxed space-y-6">
        <p>
          Working with AOS Orwell is more than just a job. It is an opportunity for driven, ambitious people with a pioneering spirit that share a passion for our industry, to build a career with a successful, fast-growing global business.
        </p>
        <p>
          As a learning organization, we believe and foster continuous learning and development of our employees. We seek out trainings or on-the-job opportunities for developing skills and talents, having identified the learning gaps through our robust Competency assessment system.
        </p>
        <p>
          We recognize that every individual has a deep yearning for growth, thus we operate a structured process in a highly organized environment, to ensure that every single individual is not just given the freedom to aspire and to grow, but to take practical steps in moving towards their preferred future.
        </p>
        <p>
          We hone your skills until you hit the apex of your capabilities, aligning your personal goals to the business goals. Once you understand the bigger picture, you are then able to seek new innovative ways of contributing to the overall success of the organization and inevitably, yours as well.
        </p>
        <p>
          Developing our employees’ skills begins with assessing which skills are important for each desired career path. See if your talents and attributes match:
        </p>
      </div>
    </section>
  );
}

export default Section;
