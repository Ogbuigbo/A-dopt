"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

function Training() {
  return (
    <section className="py-6 md:py-4 md:px-10 bg-[#f8f9fa] px-6 xl:px-[150px] lg:px-[50px] mb-10">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center gap-16">
          {/* Image Section */}
          <div className="lg:w-1/2">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1743597571/study-group-african-people_uztigt.jpg"
            alt="IT training and professional development"
            width={500}
            height={500}
            className="w-full rounded-md object-cover"
          />
        </div>
        {/* Text Section */}
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Leading the Way in IT Training Excellence
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            At A-Dopt International Services, we are committed to developing top-tier IT professionals. Our comprehensive training programs equip individuals with cutting-edge skills and industry-recognized certifications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Statistics Section */}
            <div>
              <h2 className="lg:text-5xl text-3xl font-bold text-gray-900">
                <CountUp start={0} end={98} duration={2.5} suffix="%" />
              </h2>
              <p className="text-gray-600">
                Graduate placement rate in tech industry positions.
              </p>
               <div className="mt-2">
                <Link href="/services/it-training">
                <button className="px-6 py-3 text-white bg-[#C8102E] hover:bg-[#A10D24] rounded-md shadow-md">
                 Learn More
                </button>
                </Link>
                </div>
            </div>
            <div>
              <h2 className="lg:text-5xl text-3xl font-bold text-gray-900">
                <CountUp start={0} end={500} duration={2.5} />
                {" graduates"}
              </h2>
              <p className="text-gray-600">
                Professionals trained and certified through our programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Training;