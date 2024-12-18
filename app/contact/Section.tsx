import React from 'react';
import ContactUsForm from '../_components/form';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';


function Section() {
  return (
    <section className="bg-[#f2f4f6] py-6 px-6 md:px-10 xl:px-[150px] mt-[100px] lg:px-10">


        

    <div className="xl:max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mt-6">

      {/* Contact Information */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
        Contact A-DOPT International Services
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-10">
          Reach out to us for tailored solutions.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col gap-6 text-sm lg:text-base text-gray-700">
         

          {/* Phone Number */}
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 " />
            <span>+234 8037 464 341, +234 0703 204 2223</span>
          </div>

          {/* Email Address */}
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 " />
            <span>Info@adislimited.com, adoptinterservenigltd@yahoo.ccom</span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id='contact' className='xl:ml-[50px]'>
        <ContactUsForm />
      </div>

    </div>


    <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mt-[50px]">
  {/* Left Section */}
  <div className="max-w-lg">
    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
      Our Location
    </h1>
    <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
      Visit A-DOPT International Services Nigeria Limited for expert engineering, 
      procurement, and environmental consultancy solutions tailored to your needs.
    </p>

    {/* Address */}
    <div className="flex items-start gap-4 mb-6 ">
      <MapPin className="w-6 h-6 text-gray-700 mt-1" />
      <div>
        <p className="font-medium text-gray-900">
          No 2, OKURU ROAD OFF JDP ROUND ABOUT
        </p>
        <p className="text-gray-700">
          PETER ODILI ROAD, TRANS AMADI, PORT HARCOURT. <br />
          Rivers State.
        </p>
      </div>
    </div>

    {/* Hours */}
    <div className="flex items-center gap-3">
      <p className="text-xl font-semibold text-gray-900">Hours</p>
      <span className="text-lg text-gray-700">8 AM - 5 PM</span>
    </div>
  </div>

  {/* Right Section (Map) */}
  <div className="w-full lg:w-[500px] h-[300px]">
    <iframe
      className="w-full h-full rounded-md shadow-md"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093546!2d-122.41941548468127!3d37.77492927975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzMwLjciTiAxMjLCsDI1JzA3LjQiVw!5e0!3m2!1sen!2sus!4v1617186804000!5m2!1sen!2sus"
      loading="lazy"
      title="Our Location Map"
    ></iframe>
  </div>
</div>

   
  </section>
  )
}

export default Section
