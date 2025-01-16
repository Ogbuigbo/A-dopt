import React from 'react';
import ImageScroll from './Slider';

const Services = () => {

    return (
        <section className='px-6 md:px-10 xl:px-[150px] lg:px-[50px]  bg-[#f8f9fa]  py-8 overflow-hidden'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl font-bold text-gray-900'>
                    Our  Services
                </h1>
                <hr className='w-[100px] bg-slate-500 p-[1px] mt-2 mb-6' />
                {/* <p className='lg:w-[600px] text-gray-700'>
                Delectus dolor doloribus anim, voluptas nisl, ea reiciendis ratione volutpat! Placeat laboriosam quisquam aspernatur ac pariatur. 
                </p> */}
            </div>


           <ImageScroll/>
           
        </section>
    );
};

export default Services;
