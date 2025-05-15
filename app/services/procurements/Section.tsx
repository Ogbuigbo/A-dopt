import React from 'react';
import { Wrench, Sliders, FlaskConical, ShieldCheck, Waves } from 'lucide-react';

const Section = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747339449/top-view-arrangement-different-architectural-elements_y5tg6i.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">Engineering & Laboratory Procurement</h1>
          <p className="text-lg mb-6">
            Trusted provider of advanced tools and technical solutions to industries across Nigeria.
          </p>
          <a
            href="#download"
            className="py-3 px-6 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all"
          >
            Download Our eBook
          </a>
        </div>
      </section>

      {/* Engineering Tools */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747343885/african-american-people-looking-supplies-list-pc-working-with-computer-check-inventory-logistics-employees-organizing-merchandise-shelves-warehouse-space-handheld-shot_zvyebo.jpg"
            alt="Engineering Procurement"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-4xl font-bold text-gray-900">Engineering Tools Procurement</h2>
          {engineeringItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Laboratory Tools */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747343022/photovoltaics-facility-team-leader-supervising-work-done-by-technician_hvlgfz.jpg"
              alt="Lab Services"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">Laboratory Tools & Services</h2>
            {labItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* eBook Download */}
      <section id="download" className="py-20 text-center text-black bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Learn More About Our Services</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Download our company presentation to get full insights into our engineering procurement and environmental services.
          </p>
          <a
            href="https://drive.google.com/file/d/1CDkNloiGkeIhamdyN9Udi9n6iNG8oLp6/view?usp=drive_link"
            target='_blank'
            download
            className="bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all shadow-lg"
          >
            📄 Download eBook (PDF)
          </a>
        </div>
      </section>
    </div>
  );
};

const engineeringItems = [
  {
    title: 'Pumps & Motors',
    description: 'We supply and install reliable pumps, motors, and related rotating equipment.',
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: 'Instrumentation & Calibration',
    description: 'Precision tools for monitoring, calibration, and system automation.',
    icon: <Sliders className="w-6 h-6" />,
  },
  {
    title: 'Valves, Pipes & Fittings',
    description: 'Full range of industrial pipes, elbows, flanges, and valves.',
    icon: <Sliders className="w-6 h-6" />,
  },
];

const labItems = [
  {
    title: 'Chemical & Microbiological Testing',
    description: 'Accredited lab services for testing food, water, petroleum, and air quality.',
    icon: <FlaskConical className="w-6 h-6" />,
  },
  {
    title: 'Environmental Assessments',
    description: 'EIA, Post Impact Assessments, pollution remediation, and site monitoring.',
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    title: 'Air & Water Quality Monitoring',
    description: 'Top-tier analysis for industrial compliance and sustainability assurance.',
    icon: <Waves className="w-6 h-6" />,
  },
];

export default Section;
