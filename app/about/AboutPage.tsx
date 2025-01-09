import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 lg:px-[120px] py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-lg text-gray-600 mt-4">Our Mission, Vision, and Core Values</p>
      </header>

      {/* Mission and Vision Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 pr-6">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission & Vision</h2>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Mission:</strong> To ensure efficient and prompt service delivery in concurrence with clients' strategic objectives and policies while ensuring that optimal standards are maintained.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Vision:</strong> To be the most preferred indigenous EEPC company providing valuable solutions to our clients in Nigeria and around the globe, and to become the foremost Engineering and Environmental Consulting Firm in Nigeria and West Africa.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736450825/5857034_av4vmi.jpg" // Replace with the appropriate image path
            alt="Mission and Vision"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mb-16 flex flex-col md:flex-row mt-16 items-center">
        <div className="w-full md:w-1/3 mt-16 mb-8 md:mb-0 md:mr-6">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736454226/e132c223-ebaf-4b3a-8fdb-19c1e834ffdb_wzukzr.jpg" // Replace with the appropriate image path
            alt="Core Values"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 text-center md:text-left">Our Core Values</h2>
          <div className="mt-6 space-y-6">
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Our Staff, Our Strength:</strong> We maintain the highest standard. We believe in a safe work environment (IF NOT SAFE, DON’T WORK).
              </p>
              <div className="relative w-full bg-gray-200 h-4 rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-red-600 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Highest Ethical Standards:</strong> We conduct our business with the highest ethical standards, standing true to our high values and systems.
              </p>
              <div className="relative w-full bg-gray-200 h-4 rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-red-600 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 mb-2">
                <strong>Commitment to Excellence:</strong> Our close-knit structure, work environment, culture, and ethics help us keep and maintain the best-skilled and most talented professionals who are dedicated and committed to bringing the best in every project we undertake.
              </p>
              <div className="relative w-full bg-gray-200 h-4 rounded-full">
                <div className="absolute top-0 left-0 h-4 bg-red-600 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
