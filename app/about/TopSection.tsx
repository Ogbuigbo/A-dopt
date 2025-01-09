import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function TopSection() {
  return (
    <>
     

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
      <Link href='/services/engineering-consultation'>
      <button className=" md:w-auto px-8 py-3 border border-gray-800 rounded-full bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        View
      </button>
      </Link>
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
      <Link href='/services/laboratory-testing'>
      <button className="w-full md:w-auto px-8 py-3 border border-gray-800 rounded-full bg-white text-gray-800 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
        Learn More
      </button>
      </Link>
    </div>
  </div>
</section>



    </>
  );
}

export default TopSection;
