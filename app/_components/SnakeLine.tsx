'use client';

import React, { useEffect, useRef, useState } from 'react';

function SnakeLine() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      // Trigger the animation after the component mounts
      setTimeout(() => {
        setIsLoaded(true); // Set animation to complete
      }, 0); // Start the animation immediately
    }
  }, []);

  return (
    <div
      ref={lineRef}
      className={`snake-line bg-[#fff] h-[4px] mx-auto`}
      style={{
        width: isLoaded ? '50%' : '0%', // Start at 0%, animate to 50%
        transition: 'width 2s ease-in-out', // Smooth animation
      }}
    ></div>
  );
}

export default SnakeLine;


// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Hamburger and Close icon
// import { usePathname } from "next/navigation";

// // Mock Navigation Links
// const NAV_LINKS = [
//   { href: "/about", label: "About Us", key: 1 },
//   { href: "/services", label: "Services", key: 2 },
//   { href: "/projects", label: "Projects", key: 3 },
//   { href: "/contact", label: "Contact", key: 4 },
// ];

// const Header = () => {
//   const [nav, setNav] = useState(false); // Mobile menu open/close state
//   const [activeLink, setActiveLink] = useState("/"); // Track active link
//   const [isScrolled, setIsScrolled] = useState(false); // Scroll detection for header effect
//   const pathname = usePathname();

//   useEffect(() => {
//     // Track if menu is open or closed
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setNav(false); // Close menu on resize to desktop
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setActiveLink(pathname); // Update active link on route change
//   }, [pathname]);

//   useEffect(() => {
//     // Detect scroll position
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // If scrolled down more than 50px
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleClick = () => {
//     setNav(!nav); // Toggle mobile menu open/close
//   };

//   return (
//     <header
//       className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
//         isScrolled ? "shadow-lg" : ""
//       }`}
//     >
//       <div className="flex justify-between items-center px-6 py-4 lg:px-20">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733995842/Picture_1_1_aqrddc.png"
//             alt="ADIS Logo"
//             width={100}
//             height={50}
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex space-x-8 text-lg font-medium text-[#00205B]">
//           {NAV_LINKS.map((link) => (
//             <Link
//               key={link.key}
//               href={link.href}
//               className={`hover:text-[#C8102E] transition ${
//                 activeLink === link.href ? "text-[#C8102E]" : ""
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <div className="hidden lg:block">
//           <Link
//             href="/get-started"
//             className="bg-[#C8102E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A10D24] transition"
//           >
//             Get Started
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button onClick={handleClick}>
//             {!nav ? (
//               <Menu
//                 className={`w-8 h-8 cursor-pointer text-[#00205B] ${
//                   isScrolled ? "text-[#C8102E]" : ""
//                 }`}
//               />
//             ) : (
//               <X
//                 className={`w-8 h-8 cursor-pointer text-[#C8102E]`}
//               />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`lg:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md transition-transform duration-500 ease-in-out ${
//           nav ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center py-6 space-y-4">
//           {NAV_LINKS.map((link) => (
//             <li key={link.key}>
//               <Link
//                 href={link.href}
//                 className={`text-lg font-medium text-black hover:text-[#C8102E] ${
//                   activeLink === link.href ? "text-[#C8102E]" : ""
//                 }`}
//                 onClick={() => setNav(false)} // Close the menu when a link is clicked
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
