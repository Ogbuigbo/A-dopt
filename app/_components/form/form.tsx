"use client";

import React, { useRef } from "react";
import { handleSubmit } from "./action";
import { toast } from "react-toastify";

function Form() {
  const ref = useRef<HTMLFormElement>(null);

  const _handleSuccess = () => {
    toast.dark("Your message has been received. We will get back to you shortly");
    ref.current?.reset();
  };
  
  const _handleError = () => {
    toast.dark("An error occurred while sending your message. Please try again later.");
  };

  const _handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevent the default form submission

    const formData = new FormData(ref.current!);  // Get form data from the form element
    const resp = await handleSubmit(formData);    // Submit form data

    if (resp) {
      _handleSuccess();
    } else {
      _handleError();
    }
  };

  return (
    <section className="py-12 ">
      <div className="max-w-3xl mx-auto p-6  border-gray-200">
        <form onSubmit={_handleSubmit} className="space-y-6" ref={ref}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Enter your first name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
              placeholder="Your first name here"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Provide your email address<span className="text-red-500">*</span>
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
              placeholder="Your email address here"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Type your message here<span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-500"
              placeholder="Your message content here"
              rows={6}
              id="message"
              name="message"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-start mt-4">
            <button
              type="submit"
              className="bg-[#C8102E] hover:bg-[#A10D24] text-white text-lg px-6 py-3 rounded-full transition-colors"
            >
              Submit your inquiry now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Form;
