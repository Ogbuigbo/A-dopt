"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITEMS } from '../utils/data';

type ReadMoreProps = {
  text: string; // Explicitly define the type for 'text'
};

function ImageScroll() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000, 
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative mb-16">
      <Slider {...settings} className="flex items-center justify-center mt-8">
        {ITEMS.map((item, index) => (
          <div key={index} className={`flex flex-col items-center justify-center p-2 2xl:p-8 `}>
            <div className={`shadow-md transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden ${index >= ITEMS.length - 2 ? 'pb-8' : ''} `}>
              <Image 
                src={item.icons} 
                width={400} 
                height={400} 
                alt='splash' 
                className="object-cover md:h-[250px] h-[200px] 2xl:w-full"  
              />
              <div className="text-center mt-2 p-4 2xl:p-8">
                <h1 className="text-xl font-semibold text-gray-900 transition-colors ">{item.title}</h1>
                <ReadMore text={item.description} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function ReadMore({ text }: ReadMoreProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const MAX_LENGTH = 100; // Set the max length for the truncated text
  const shouldTruncate = text.length > MAX_LENGTH;

  return (
    <div>
      <p className="text-gray-600">
        {shouldTruncate && !isExpanded
          ? `${text.slice(0, MAX_LENGTH)}...`
          : text}
      </p>
      {shouldTruncate && (
        <button 
          onClick={toggleReadMore} 
          className="text-[#C8102E] font-semibold mt-2 focus:outline-none"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default ImageScroll;