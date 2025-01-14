import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-6 lg:px-[120px] mt-[120px] py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
      </header>

      <section className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736886886/licensed-serviceman-starting-routine-condenser-maintenance-using-manifold-meters-read-pressure-external-air-conditioner-while-seasoned-wireman-writes-hvac-system-checkup-report-clipboard_rvmtdu.jpg" // Replace with your image path
            alt="Engineering Consultation"
            width={500}
            height={600}
            className="rounded-lg shadow-lg object-cover h-[600px]"
          />
        </div>

        {/* Text Content Section */}
        <div className="lg:w-1/2">
          <h4 className="text-sm text-[#00205B] uppercase mb-2">
            Welcome to ADISLimited
          </h4>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            About A-Dopt International Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            A-Dopt International Services Limited has been a leader in
            engineering consultancy since 2009, committed to delivering
            innovative solutions while prioritizing sustainability and
            excellence in every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Mission Section */}
            <div
              
            >
              <h2 className="text-3xl font-bold text-gray-900">Mission</h2>
              <p className="text-gray-600 mt-4">
                To ensure efficient and prompt service delivery in concurrence
                with clients’ strategic objectives and policies while ensuring
                that optimal standards are maintained.
              </p>
            </div>

            {/* Vision Section */}
            <div
            >
              <h2 className="text-3xl font-bold text-gray-900">Vision</h2>
              <p className="text-gray-600 mt-4">
                To be the most preferred indigenous EEPC company providing
                valuable solutions to our clients in Nigeria and around the
                globe, and to become the foremost Engineering and Environmental
                Consulting Firm in Nigeria and West Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section
      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 mt-[100px] items-start">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Mission & Vision
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            <strong>Mission:</strong> To ensure efficient and prompt service delivery
            in concurrence with clients' strategic objectives and policies while
            ensuring that optimal standards are maintained.
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            <strong>Vision:</strong> To be the most preferred indigenous EEPC company
            providing valuable solutions to our clients in Nigeria and around the
            globe, and to become the foremost Engineering and Environmental
            Consulting Firm in Nigeria and West Africa.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1736450825/5857034_av4vmi.jpg"
            alt="Mission and Vision"
            width={500}
            height={300}
            className="rounded-lg shadow-lg h-[400px] w-[400px]"
          />
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="mb-16 mt-[100px]">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Core Values
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start md:items-center">
            <p className="text-lg text-gray-700 text-left md:text-center mb-6">
              <strong>Our Staff, Our Strength:</strong> We maintain the highest
              standard. We believe in a safe work environment (IF NOT SAFE, DON’T
              WORK).
            </p>
            <div className="relative w-full md:w-[80%] bg-gray-200 h-4 rounded-full">
              <div
                className="absolute top-0 left-0 h-4 bg-red-600 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <p className="text-lg text-gray-700 text-left md:text-center mb-6">
              <strong>Highest Ethical Standards:</strong> We conduct our business
              with the highest ethical standards, standing true to our high values
              and systems.
            </p>
            <div className="relative w-full md:w-[80%] bg-gray-200 h-4 rounded-full">
              <div
                className="absolute top-0 left-0 h-4 bg-red-600 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-start md:items-center">
            <p className="text-lg text-gray-700 text-left md:text-center mb-6">
              <strong>Commitment to Excellence:</strong> We create an ethical work environment that attracts top talent dedicated to exceptional results.
            </p>
            <div className="relative w-full md:w-[80%] bg-gray-200 h-4  mt-[-20px] rounded-full">
              <div
                className="absolute top-0 left-0 h-4 bg-red-600 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
