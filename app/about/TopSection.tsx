import React from 'react';
import Image from 'next/image';

function TopSection() {
  return (
    <>
      {/* Top Section */}
      <section className="pb-16 px-4 md:px-8 xl:px-[120px] mt-[150px] md:mt-[100px]">
        {/* Title Section */}
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-10 md:mt-20 flex flex-col items-center justify-center gap-2">
            About Our Expertise
            <hr className="w-[80px] md:w-[100px] bg-slate-500 p-[1px] flex justify-center items-center mt-2" />
          </h1>
          <p className="mt-4 md:mt-6 w-full md:w-[600px] text-base md:text-lg text-gray-700">
            A-Dopt International Services Limited excels in industrial automation and environmental management. Our commitment to quality and sustainability sets us apart in the industry.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 mt-12 md:mt-16">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left px-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-justify text-gray-700 leading-relaxed">
              A-Dopt International Services Nigeria Limited was founded in 2009 with a vision to provide top-tier engineering consultancy services. Our mission is to deliver high-quality solutions that not only meet client needs but also promote sustainable practices. We pride ourselves on our core values: Integrity, Excellence, Innovation, and Sustainability. These principles guide our operations and ensure that we maintain the highest standards in every project we undertake, fostering a culture of continuous improvement and environmental stewardship.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734688528/lab_5_n3xzpo.png"
              alt="about-img"
              width={800}
              height={400}
              className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>

          {/* Projects Section */}
{/* Projects Section */}
<section className="py-12 px-4 md:px-8 bg-[#f2f4f6] lg:px-[250px] text-center">
  {/* Title */}
  <div className="mb-8 md:mb-10">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
      Our Projects
    </h1>
    <p className="mt-2 md:mt-4 text-gray-600 text-base md:text-lg">
      Explore our diverse projects in engineering and environmental services.
    </p>
  </div>

  {/* Images Section 1 */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
    {/* Image 1 */}
    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734512732/freepik-export-20241218090432gocp_lep3fo.png"
        alt="Automation Solutions"
        width={500}
        height={350}
        className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
      />
    </div>

    {/* Image 2 */}
    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734511037/freepik-export-20241218083619fTKO_jkq1pb.png"
        alt="Environmental Project"
        width={500}
        height={350}
        className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Text and Button */}
  <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 text-left">
    <div className="w-full md:w-3/4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
       Engineering Solutions
      </h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        Delivering advanced industrial automation for various sectors.
      </p>
    </div>

    {/* Button */}
    <div className="w-full md:w-auto">
      <button className=" md:w-auto px-8 py-3 border border-gray-800 rounded-full bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        View
      </button>
    </div>
  </div>

  {/* Images Section 2 */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-12 md:mt-16">
    {/* Image 1 */}
    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734350227/laboratory_cu9e9e.png"
        alt="Laboratory Solutions"
        width={500}
        height={350}
        className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
      />
    </div>

    {/* Image 2 */}
    <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516193/freepik-export-20241218100006QWJ0_c9zabr.png"
        alt="Environmental Project"
        width={500}
        height={350}
        className="rounded-lg w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover transform transition duration-500 hover:scale-105"
      />
    </div>
  </div>

  {/* Text and Button */}
  <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 text-left">
    <div className="w-full md:w-3/4">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Laboratory Testing Solutions
      </h2>
      <p className="text-gray-600 mt-2 text-sm md:text-base">
        Delivering advanced industrial automation for various sectors.
      </p>
    </div>

    {/* Button */}
    <div className=" md:w-auto ">
      <button className="w-full md:w-auto px-8 py-3 border border-gray-800 rounded-full bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        Learn More
      </button>
    </div>
  </div>
</section>



    </>
  );
}

export default TopSection;
