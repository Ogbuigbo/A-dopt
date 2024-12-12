"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../utils/data';
import { motion } from 'framer-motion';
import SnakeLine from './SnakeLine';

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
      className={`w-full px-6 lg:px-12 flex py-6 flex-col justify-between text-black bg-cover bg-center transition-all duration-300 ease-in-out `}
      // style={{
      //   backgroundImage: "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733822074/tenweb_media_vIACnr6S_lahn5i.webp')",
      // }}
    >
    

      {/* Logo and Navigation on the same line */}
      <div className="flex justify-between items-center w-full  z-20 relative">
        <Link href="/" className="flex">
          <img
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733995842/Picture_1_1_aqrddc.png"
            width={150}
            height={100}
            alt="logo"
            className={`object-cover w-[100px] `}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg font-medium text-[#00205B]">
           {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`hover:text-[#C8102E] transition ${
                activeLink === link.href ? "text-[#C8102E]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav> 

        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <Link
            href="/get-started"
            className="bg-[#C8102E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A10D24] transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden">
          {!nav ? (
            <Menu onClick={handleClick} className='w-8 h-8' />
          ) : (
            <X onClick={handleClick} className='w-8 h-8' />
          )}
        </div>
      </div>

      {/* Hero Text Section */}
 

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
