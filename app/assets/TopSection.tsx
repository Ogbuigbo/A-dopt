import React from 'react'
import Image from 'next/image';

function TopSection() {
  return (
    <section className='pb-16 px-8 xl:px-[120px] lg:px-10 '>
    <div className='flex flex-col justify-center items-center px-6 w-full'>
      <h1 className='text-6xl font-bold text-gray-900 mt-20 flex flex-col gap-2 justify-center items-center'>
      About Our Expertise
        <hr className='w-[100px] bg-slate-500 p-[1px] mt-4' />
      </h1>
      <p className='mt-6 w-full lg:w-[600px] text-center text-gray-700'>
      A-Dopt International Services Limited excels in industrial automation and environmental management. Our commitment to quality and sustainability sets us apart in the industry.
      </p>
    </div>

    <div className='mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-center  gap-20 mt-16'>
      {/* Image Section */}
      <div className='flex-shrink-0'>
      <h1 className='text-6xl font-bold text-gray-900 mt-20 flex flex-col gap-2  justify-center items-center w-[600px]'>
      Our Commitment to Excellence
      </h1>
      </div>
      
      {/* Text Section */}
      <div className='xl:max-w-[500px] flex items-center space-y-8'>
        <p>
        A-Dopt International Services Nigeria Limited was founded in 2009 with a vision to provide top-tier engineering consultancy services. Our mission is to deliver high-quality solutions that not only meet client needs but also promote sustainable practices. We pride ourselves on our core values: Integrity, Excellence, Innovation, and Sustainability. These principles guide our operations and ensure that we maintain the highest standards in every project we undertake, fostering a culture of continuous improvement and environmental stewardship.
        </p>
        </div>
    </div>
  </section>
  )
}

export default TopSection
