"use client";

import React from "react";
import Image from "next/image";

const Logo = () => {
  const logos = [
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339915/lng_rr47ni.png",
      alt: "LNG Logo",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339795/TotalEnergies_logo_b1vcjm.svg",
      alt: "Total energies",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339796/sellyfak_logo_vertical-3h82sto3ylsrt9sarhi9z4_vzybwx.jpg",
      alt: "Sellfak energy",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339795/images_3_gl41d2.png",
      alt: "AOS Orwell",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516906/V-P-EMB-D-00001_500_kzy6xk.jpg",
      alt: "V-P EMB",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734528446/unnamed_ekuw8k.jpg",
      alt: "Shell 2",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734528446/images_dl66nt.jpg",
      alt: "Shell 2",
    },
  ];

  return (
    <section className="text-center py-10 px-6 lg:px-[200px]">
      <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold mb-6">Our Clients</h2>
      <hr className='w-[100px] bg-slate-500 p-[1px] mt-2 mb-6' />
      </div> 
      <div className="flex items-center justify-center gap-16">
        {logos.slice(0, 4).map((logo, index) => (
          <div
            key={index}
            className="rounded-lg flex justify-center items-center p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain h-20 w-20 md:h-20 md:w-20"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 mt-6">
        {logos.slice(4).map((logo, index) => (
          <div
            key={index}
            className="rounded-lg flex justify-center items-center p-4  transition-shadow duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain h-20 w-20 md:h-20 md:w-20"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logo;
