import React from "react";

const AboutAdis = () => {
  return (
    <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1740425865/group-afro-americans-working-together_owzuyl.jpg"
          alt="IT Training at Adis"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
        <h5 className="text-blue-600 uppercase font-semibold text-sm">
          Welcome to Adis
        </h5>
        <h2 className="text-4xl font-bold text-gray-900 my-4">
          About Adis IT Training
        </h2>
        <p className="text-gray-700 mb-4">
          Adis IT Training empowers individuals with cutting-edge technical
          skills, ensuring they excel in today's fast-paced digital world.
          Since our inception, we have committed to delivering high-quality,
          industry-relevant programs designed by experts.
        </p>
        <p className="text-gray-700">
          Whether you're starting your tech career or upgrading your skills, our
          courses in web development, cybersecurity, mobile app development, and
          more provide a hands-on learning experience to help you succeed.
        </p>
      </div>
    </section>
  );
};

export default AboutAdis;
