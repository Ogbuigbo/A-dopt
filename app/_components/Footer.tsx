"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CornerRightUp } from "lucide-react";
import Linked from "../assets/linked";
import Facebook from "../assets/facebook";
import Twitter from "../assets/twitter";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const triggerHeight = window.innerHeight * 0.5;

      setShowButton(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#00205B] text-white">
      <div className="mx-auto xl:px-20 px-6 py-8 sm:px-8 lg:px-12">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <div className="p-2 bg-white rounded-md shadow-md">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733995842/Picture_1_1_aqrddc.png"
              width={140}
              height={50}
              alt="ADIS Logo"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <Link href="/services" className="hover:text-[#C8102E] transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/provider" className="hover:text-[#C8102E] transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#C8102E] transition">
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-[#C8102E] transition">
              Privacy Policy
            </Link>
          </li>
        </ul>

        {/* Social Media & Copyright */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm border-t border-gray-500 pt-4">
          <p className="text-center md:text-left">
            © 2024 ADIS. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-[#C8102E] transition"
            >
              <Linked className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-[#C8102E] transition"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
              className="hover:text-[#C8102E] transition"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#A10D24] transition-all duration-300 shadow-lg"
          aria-label="Scroll to Top"
        >
          <CornerRightUp size={20} />
        </button>
      )}
    </footer>
  );
}

export default Footer;
