import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section 
      className="relative h-[60vh] bg-cover bg-center mt-[80px]" 
      style={{ backgroundImage: 'url("https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736446409/elctro_fkh76z.png")' }}  // Replace this URL with your image URL
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Breadcrumb */}
        <div className="text-sm text-white/90 uppercase tracking-wide mb-4">
          <a href="/" className="hover:text-white transition">Home</a> &gt; <span>Contact Us</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
      </div>
    </section>
  );
};

export default AboutHero;