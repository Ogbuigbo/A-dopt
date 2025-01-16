import React from 'react'

function Section() {
  return (
    <section className="bg-white pt-8  text-gray-800">
    <div className="container mx-auto px-4 py-8">
      {/* Top Section: Header and Description */}
      <div className="flex flex-col md:flex-row items-start  justify-between mb-8">
        {/* Header */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            Comprehensive <br /> Environmental <br /> Consultancy Services
          </h1>
        </div>

        {/* Description */}
        <div className="md:w-1/2 text-gray-700 text-base md:text-lg flex flex-col gap-10 leading-relaxed">
          <p>
            At A-Dopt International Services Limited, we offer expert
            environmental consultancy services to help businesses implement
            sustainable practices. Our team provides tailored solutions to
            ensure compliance with environmental regulations and promote
            stewardship.
          </p>
               {/* Bottom Section: Assessments and Strategies */}
      <div className="flex flex-col md:flex-row justify-between gap-8" id='enviroment'>
        {/* Assessments */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-black mb-2">Assessments</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We conduct thorough environmental assessments to identify
            potential impacts and develop mitigation strategies.
          </p>
        </div>

        {/* Strategies */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold text-black mb-2">Strategies</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our experts design effective strategies to enhance sustainability
            and ensure regulatory compliance.
          </p>
        </div>
      </div>
        </div>
      </div>

 
    </div>
  </section>
  )
}

export default Section
