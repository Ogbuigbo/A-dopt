import React from 'react';
import Image from 'next/image'; // If you're using Next.js

const Logo = () => {
  const logos = [
    {
      src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339943/npdc_tbomak.png',
      alt: 'NPDC logo',
    },
    {
      src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339915/lng_rr47ni.png',
      alt: 'LNG Logo',
    },
    {
      src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339795/TotalEnergies_logo_b1vcjm.svg',
      alt: 'Total energies',
    },
    {
        src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339796/sellyfak_logo_vertical-3h82sto3ylsrt9sarhi9z4_vzybwx.jpg',
        alt: 'sellfak energy',
      },
      {
        src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339795/images_3_gl41d2.png',
        alt: 'AOs Orwell',
      },
      {
        src: 'https://res.cloudinary.com/dpkn1ppzj/image/upload/v1734339795/images_4_ufsgo2.png',
        alt: 'Shell',
      },
  ];

  return (
    <section className="text-center  xl:px-[150px] lg:px-[60px] md:px-10  py-10 px-6">
      <h2 className='text-4xl font-bold mb-6'>Our Clients</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-center lg:gap-16 gap-10 gap-y-4 items-center">
        {logos.map((logo, index) => (
          <div className="logo-item flex flex-wrap  items-center" key={index}>
            <Image 
              src={logo.src} 
              alt={logo.alt} 
              width={150} // Adjust based on the size you need
              height={80} 
              className='h-16 w-16  md:h-20 md:w-20  object-contain transition-transform duration-300 hover:scale-11'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logo;
