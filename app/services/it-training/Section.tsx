import React from 'react';
import AboutAdis from './About';
import Link from 'next/link';

function Section() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1739775061/medium-shot-students-working-with-laptop_e59x0t.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-6xl font-extrabold mb-4">IT Training Programs</h1>
          <p className="text-lg mb-6">
            Master the skills you need to excel in the tech industry with our expert-led courses.
          </p>

          <div className='flex gap-4 justify-center items-center'>
          <Link href="/services/it-training?section=programs">
          <button className="py-2 px-4 sm:py-3 sm:px-6 rounded-lg border-2 border-white text-white font-medium shadow-lg transition-all duration-300 hover:bg-white hover:text-black">
            Explore Programs
          </button>
          </Link>
          <a href="https://adislimited.com/training/register">
          <button className="py-2 px-4 sm:py-3 sm:px-6 rounded-lg border-2 border-white text-white font-medium shadow-lg transition-all duration-300 hover:bg-white hover:text-black">
             Get Started
            </button>
          </a>
          </div>
        </div>
      </section>

      <AboutAdis />

      {/* Programs Section */}
      <section id="programs" className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                {program.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8">Join our IT training programs today and take the first step toward a successful career in tech.</p>
          <a
            href="https://adislimited.com/training/register"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

const programs = [
  { title: 'Frontend Development', description: 'Learn to build interactive user interfaces with React, Next.js, and Tailwind CSS.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  { title: 'Backend Development', description: 'Master server-side programming with Node.js, Express, and databases.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg> },
  { title: 'UI/UX Design', description: 'Learn design principles and tools like Figma and Adobe XD.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
  { title: 'Digital Marketing', description: 'Master SEO, social media, and paid advertising strategies.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 0l8 8-8 8m8-8H4" /></svg> },
  { title: 'Data Analysis', description: 'Analyze and visualize data using Python, SQL, and Power BI.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m7 18V9m4 12V7" /></svg> },
  { title: 'Cybersecurity', description: 'Learn how to secure networks, detect threats, and implement security measures.', icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v6m8-10a8 8 0 11-16 0V5a8 8 0 0116 0z" /></svg> }
];

export default Section;