"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/data';
import { motion } from 'framer-motion';

type NavLink = {
  href: string;
  label: string;
  key: string | number;
};

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false); // State to track if the user has scrolled
  const router = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (router === '/') {
      setActiveLink('/');
    } else {
      setActiveLink(router);
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Apply effect after scrolling down 50px
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLinkClick = (link: NavLink) => {
    setActiveLink(link.href);
    setNav(false);
  };

  return (
    <header
      className={`w-full h-screen px-6 lg:px-12 flex flex-col justify-between text-white bg-cover bg-center transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-md' : 'shadow-md'}`}
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733822074/tenweb_media_vIACnr6S_lahn5i.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10" />

      {/* Logo and Navigation on the same line */}
      <div className="flex justify-between items-center w-full pt-12 z-20 relative">
        <Link href="/" className="flex">
          <img
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733821748/logo_zjx7DJya_wc3coy.webp"
            width={250}
            height={100}
            alt="logo"
            className={`object-cover w-[100px] ${isScrolled ? 'sm:w-[250px] w-[200px] h-[100px]' : 'sm:w-[250px] w-[200px] h-[100px]'}`}
          />
        </Link>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex space-x-8 z-20">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              href={link.href}
              key={link.key}
              className={`text-[15px] font-medium transition-all duration-300 ease-in-out px-2 py-1 rounded-md ${
                activeLink === link.href
                  ? 'border-b-2 border-white'
                  : 'hover:text-gray-200 hover:border-b-2 hover:border-gray-200'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact Us Button */}
        <Link href="/contact" className="hidden lg:block">
          <button className='py-3 px-6 rounded-[4px] text-white bg-[#1f3863] font-medium transition-all duration-300 ease-in-out shadow-lg'>
            Contact Us
          </button>
        </Link>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          {!nav ? (
            <Menu onClick={handleClick} className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
          ) : (
            <X onClick={handleClick} className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-white'}`} />
          )}
        </div>
      </div>

      {/* Hero Text Section */}
      <motion.div
        className="flex flex-col items-center justify-center h-full text-center text-white bg-opacity-60 px-6 md:px-12 z-20 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Empowering Engineering Excellence
        </h1>
        <p className="text-lg md:text-xl mb-8 w-[800px]">
          At A-Dopt International Services, we specialize in Industrial Automation, Electromechanical, and Instrumental Engineering. Our mission is to deliver innovative solutions that drive success for our clients worldwide.
        </p>

        {/* Zig-Zag Line Under Hero Text */}
        <div className="relative z-20 mb-8 w-full">
          <svg
            className="w-full h-12"
            viewBox="0 0 100 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0 L10 5 L20 0 L30 5 L40 0 L50 5 L60 0 L70 5 L80 0 L90 5 L100 0"
              stroke="white"
              strokeWidth="2"
              fill="none"
              className="path-animate"
            />
          </svg>
        </div>

        <Link href="/contact">
          <button className="py-3 px-6 rounded-lg bg-[#1f3863] text-white font-medium transition-all duration-300 ease-in-out shadow-lg hover:bg-[#5f1928]">
            Get Started
          </button>
        </Link>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[120px] left-0 w-full bg-white bg-opacity-50 shadow-md transform z-50 ${
          !nav ? 'opacity-0 pointer-events-none translate-y-full' : 'opacity-100 pointer-events-auto translate-y-0'
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="py-3 flex flex-col items-center gap-2">
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              href={link.href}
              key={link.key}
              className={`regular-16 text-black text-center hover:text-[#5f1928] border-b-[#5f1928] hover:border-b-2 bg-white cursor-pointer transition-all hover:font-bold w-full py-2 active:text-[#5f1928] ${
                activeLink === link.href
                  ? 'text-[#5f1928] border-b border-b-[#5f1928] font-bold text-[16px]'
                  : 'hover:text-[#5f1928] hover:border-b hover:border-b-[#5f1928] text-[14px]'
              }`}
              onClick={() => {
                handleLinkClick(link);
                handleClick(); // Close the mobile menu when a link is clicked
              }}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
