import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] bg-cover bg-center mt-[80px]" 
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736999867/monochrome-scene-depicting-life-workers-construction-industry-site_3_z29dta.jpg")' }}  // Replace this URL with your image URL
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center pl-10 h-full ">
        {/* Breadcrumb */}
        <div className="text-sm text-white/90 uppercase tracking-wide mb-4">
          <a href="/" className="hover:text-white transition text-xl">Home</a> | <span className="text-xl">Careers</span>
        </div>

        {/* Heading */}
        <p className="w-[500px] text-white">
        We are an equal opportunity employer, taking pride in personal and organisational achievement of every employee. We welcome talent across a wide range of disciplines while remaining committed to honing staff skills and interests. Take a look at what we offer to find out where you fit in. We will be happy to have you.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
