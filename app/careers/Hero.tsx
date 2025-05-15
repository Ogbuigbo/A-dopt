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
      <div className="relative z-10 flex flex-col items-start justify-center lg:pl-10 pl-5 h-full ">
        {/* Breadcrumb */}
        <div className="text-sm text-white/90 uppercase tracking-wide mb-4">
          <a href="/" className="hover:text-white transition text-xl">Home</a> | <span className="text-xl">Careers</span>
        </div>

        {/* Heading */}
        <p className="lg:w-[500px] text-white">
        We believe our employees are the foundation of our success. That’s why we are committed to fostering a culture of growth, innovation, and opportunity. From day one, we provide comprehensive training programs, mentorship opportunities, and access to cutting-edge technology to equip our team members with the skills they need to thrive.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
