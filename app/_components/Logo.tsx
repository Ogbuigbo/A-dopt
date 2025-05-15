"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Logo = () => {
  const logos = [
    // {
    //   src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339943/npdc_tbomak.png",
    //   alt: "NPDC logo",
    // },
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
    // {
    //   src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516905/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-04-29_%D0%B2_23.42.01_xx6wxe.png",
    //   alt: "Shell",
    // },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516906/V-P-EMB-D-00001_500_kzy6xk.jpg",
      alt: "V-P EMB",
    },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734528446/unnamed_ekuw8k.jpg",
      alt: "Shell 2",
    },
    // {
    //   src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734516906/V-P-EMB-D-00001_500_kzy6xk.jpg",
    //   alt: "V-P EMB",
    // },
    {
      src: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734528446/images_dl66nt.jpg",
      alt: "Shell 2",
    },
  ];

  // React Slick slider settings
  const settings = {
    dots: false, // Set to true if you want navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust for the number of logos visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Mobile Devices
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <section className="text-center xl:px-[150px] lg:px-[60px] md:px-10 py-10 px-6">
      <h2 className="text-4xl font-bold mb-6">Our Clients</h2>
      <div>
        <>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150} // Adjust based on the size you need
                height={80}
                className="object-contain h-20 w-20 md:h-28 md:w-28 transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
        </>
      </div>
    </section>
  );
};

export default Logo;