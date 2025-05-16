import React from 'react';
import { Wrench, Sliders, FlaskConical, ShieldCheck, Waves, Building, Award, Users, Shield, CheckCircle } from 'lucide-react';
import Image from 'next/image';

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

      {/* Strategic Partnership Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver comprehensive solutions that meet the highest standards of quality and reliability.
            </p>
          </div>
          
          {/* Union Steel Partnership */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747343022/photovoltaics-facility-team-leader-supervising-work-done-by-technician_hvlgfz.jpg"
                alt="Union Steel Industry Partnership"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-600 p-3 rounded-full text-white">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Union Steel Industry</h3>
              </div>
              <p className="text-lg text-gray-600">
                Our trusted partnership with Union Steel Industry allows us to provide premium engineering solutions with industry-leading quality and reliability. Together, we deliver comprehensive procurement services that meet the most demanding industrial requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {unionSteelBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-blue-600 mt-1">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Tools */}
      <section className="container mx-auto px-6 py-2 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747343885/african-american-people-looking-supplies-list-pc-working-with-computer-check-inventory-logistics-employees-organizing-merchandise-shelves-warehouse-space-handheld-shot_zvyebo.jpg"
            alt="Engineering Procurement"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 space-y-2">
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

      {/* Labdex Partnership Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747343022/photovoltaics-facility-team-leader-supervising-work-done-by-technician_hvlgfz.jpg"
                alt="Labdex Partnership"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-600 p-3 rounded-full text-white">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Labdex Ltd.</h3>
              </div>
              <p className="text-lg text-gray-600">
                We're proud to partner with Labdex Ltd., a premier provider of laboratory equipment serving life science, healthcare, biotechnology, and research sectors globally.
              </p>
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Premium Laboratory Equipment</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {labdexEquipment.map((item, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm text-center">
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-xl font-semibold mb-4">Certifications</h4>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-green-800 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Tools */}
      <section className="bg-white py-20 px-6">
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

      {/* Our Clients Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Trusted By Industry Leaders</h2>
          <div className="grid grid-cols-2  gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <div className="text-center">
                <Image src={client.icon} alt="amal" className="mx-auto mb-4" width={150} height={100} />
                  <h3 className="font-semibold text-gray-800">{client.name}</h3>
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
            target="_blank"
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

const unionSteelBenefits = [
  'Access to premium quality industrial materials',
  'Integrated supply chain solutions',
  'Industry-leading quality assurance',
  'Custom engineering specifications',
  'Rapid procurement timelines',
  'Competitive pricing structures'
];

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

const labdexEquipment = [
  'Autoclaves', 'Analyzers', 'Colony Counter', 'Cabinets', 'Chillers',
  'Freezers', 'Flame Photometer', 'Fume Hood', 'Freeze Dryers', 'Homogenizers', 
  'Lab Balances', 'Lab Ovens', 'Microscopes'
];

const certifications = [
  'ISO 13485', 'CE', 'ASTM', 'GMP'
];

const clientLogos = [
  {
    name: 'Labdex Ltd.',
    icon: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747390644/download_kp4mu7.png',
  },
  {
    name: 'Union Steel',
    icon: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1747390609/download_1_eenegy.png',
  },
 
];

export default Section;