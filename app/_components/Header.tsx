import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 py-4 lg:px-20">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1733995842/Picture_1_1_aqrddc.png" // Replace with your actual logo path
              alt="ADIS Logo"
              width={100}
              height={100}
            />
            
          </div>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="hidden lg:flex space-x-8 text-lg font-medium text-[#00205B]">
            <li>
              <Link href="/about" className="hover:text-[#C8102E] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#C8102E] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#C8102E] transition">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#C8102E] transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div>
          <Link
            href="/get-started"
            className="hidden lg:block bg-[#C8102E] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#A10D24] transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            className="text-[#00205B] focus:outline-none"
            aria-label="Open Menu"
          >
            {/* Simple Mobile Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
