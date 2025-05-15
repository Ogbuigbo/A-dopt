"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../utils/data";

type NavLink = {
  href: string;
  label: string;
  key: string | number;
  children?: { label: string; href: string }[];
};

function Header() {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const router = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setActiveLink(router);
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  const toggleDropdown = (key: string | null) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleMobileDropdown = (key: string | null) => {
    setMobileDropdown((prev) => (prev === key ? null : key));
  };


  const handleLinkClick = (link: NavLink) => {
    setActiveLink(link.href);
    setNav(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full px-6 lg:px-12 flex flex-col justify-between z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white text-black py-4" : "bg-transparent text-white py-6"
      }`}
    >
      {/* Logo and Navigation */}
      <div className="flex justify-between items-center w-full relative">
        {/* Logo */}
        <Link href="/" className="flex">
          <div className={`p-2 rounded-md ${isScrolled ? "bg-white" : "bg-white"}`}>
            <img
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733995842/Picture_1_1_aqrddc.png"
              width={150}
              height={100}
              alt="logo"
              className="object-cover w-[100px]"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg font-medium">
          {NAV_LINKS.map((link) => (
            <div
              key={link.key}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(link.key.toString())}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer group-hover:text-[#C8102E]">
                <Link
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`pb-1 transition-all ${
                    activeLink === link.href
                      ? "text-[#C8102E] border-b-2 border-[#C8102E]"
                      : "hover:text-[#C8102E]"
                  }`}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ChevronDown
                    className={`w-5 h-5 ${
                      isScrolled ? "text-black" : "text-white"
                    } group-hover:text-[#C8102E] transition-transform ${
                      openDropdown === link.key.toString() ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown Menu */}
              {link.children && (
                <div
                  className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${
                    openDropdown === link.key.toString()
                      ? "opacity-100 visible"
                      : ""
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b last:border-none transition-all hover:text-[#C8102E]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={`px-6 py-3 rounded-md font-semibold transition ${
              isScrolled ? "bg-[#C8102E] text-white" : "bg-[#C8102E] text-white"
            } hover:bg-[#A10D24]`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          {!nav ? (
            <Menu onClick={handleClick} className="w-8 h-8 cursor-pointer" />
          ) : (
            <X onClick={handleClick} className="w-8 h-8 cursor-pointer" />
          )}
        </div>

           {/* Mobile Navigation Menu */}
      <div
        className={`absolute top-[120px] left-0 w-full bg-white bg-opacity-50 shadow-md text-white transform z-50 ${
          !nav
            ? 'opacity-0 pointer-events-none translate-y-full'
            : 'opacity-100 pointer-events-auto translate-y-0'
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
      </div>
    </header>
  );
}

export default Header;
