import React from 'react';

function Section() {
  return (
    <section className="py-12 px-6 xl:px-[300px] lg:px-[150px]">
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
        At ADISL,we believe that our people are our greatest asset. We are committed to helping you grow, excel, and reach your full potential . We provide opportunities for professional growth, continuous learning, and skill development.
        </p>
        <p>
        Our comprehensive career development programs include:
        </p>
        <p>
        • Training & Certifications: Enhance your expertise with industry-leading training programs and certifications.
        </p>
        <p>
        • Mentorship Opportunities: Learn from experienced professionals who will guide and support your career journey.
        </p>
        <p>
        Career Progression: We offer clear pathways for advancement, ensuring your hard work and dedication are recognized and rewarded.
        </p>
        <p>
        • Safety & Technical Skills: Stay ahead with cutting-edge safety practices and technical training that prepare you for any challenge.
        </p>
      </div>
    </section>
  );
}

export default Section;
