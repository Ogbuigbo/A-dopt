"use client";

import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

function Leading() {
  return (
    <section className="py-6 md:py-4 md:px-10 bg-[#f8f9fa] px-6 xl:px-[150px] lg:px-[50px]">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center gap-16">
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Leading the Way in Environmental Stewardship
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At A-Dopt International Services, we are committed to helping our clients implement sustainable practices. Our environmental consultancy services ensure compliance with regulations and promote environmental responsibility.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Statistics Section */}
            <div>
              <h2 className="lg:text-5xl text-3xl font-bold text-gray-900">
                <CountUp start={0} end={95} duration={2.5} suffix="%" />
              </h2>
              <p className="text-gray-600">
                Client satisfaction rate in environmental projects.
              </p>
            </div>
            <div>
              <h2 className="lg:text-5xl text-3xl font-bold text-gray-900">
                <CountUp start={0} end={150} duration={2.5} />
                {" projects"}
              </h2>
              <p className="text-gray-600">
                Successful environmental projects completed.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734422971/465690926_1033945058505385_631866673145992697_n.webp_txueai.jpg"
            alt="Environmental efforts and sustainability"
            width={500}
            height={500}
            className="w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Leading;
