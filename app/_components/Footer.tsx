"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Telephone from "../assets/Telephone"
import Email from "../assets/Email"
import Location from "../assets/Location"
import { CornerRightUp } from "lucide-react"

// Import Material UI Icons
import FacebookIcon from "@mui/icons-material/Facebook"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import InstagramIcon from "@mui/icons-material/Instagram"

function Footer() {
  const [showButton, setShowButton] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const triggerHeight = scrollHeight * 0.05

      setShowButton(scrollTop > triggerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-[#00205B]">
      <div
        className="lg:px-[62px] xl:px-[124px] space-y-8 px-4 py-6 sm:px-6 xl:space-y-10 xl:p-"
        ref={footerRef}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] md:text-justify text-center">
          <div>
            <h1 className="text-[#fff] xl:text-[24px] text-[16px]  flex gap-2 items-center text-center md:justify-start justify-center">
              <span>ADIS</span>
              <span>LIMITED</span>
            </h1>
            <p className="mt-2 lg:text-justify text-white text-[12px] xl:text-[16px] xl:min-w-[471px] font-medium lg:min-w-[390px] w-full text-center">
              At ADIS, we are dedicated to providing top-notch services with a commitment to quality, precision, and innovation. Explore our offerings and let us help you achieve your goals.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center items-center md:justify-start md:items-start  gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61566386114347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#C8102E] transition-all"
              >
                <FacebookIcon fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/adislimited-adisl-95349a342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#0A66C2] transition-all"
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com/adislimited/profilecard/?igsh=MW4wMjduejdxNjVxZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E4405F] transition-all"
              >
                <InstagramIcon fontSize="large" />
              </a>
            </div>
          </div>

          <div className="md:ml-[150px]">
            <p className="font-bold text-white text-[16px] leading-[33px] xl:text-[24px]">
              Useful Links
            </p>

            <ul className="mt-2 space-y-4 text-sm text-white flex flex-col gap-2 text-[12px] font-medium xl:text-[20px]">
              <Link href="/" className="transition hover:opacity-75">
                Home
              </Link>
              <Link href="/about" className="transition hover:opacity-75">
                About Us
              </Link>
              <Link href="/services" className="transition hover:opacity-75">
                Services
              </Link>
              <Link href="/contact" className="t transition hover:opacity-75">
                Contact Us
              </Link>
              <Link href="/policy" className="t transition hover:opacity-75">
                Policy
              </Link>
              <Link href="/careers" className="t transition hover:opacity-75">
                Careers
              </Link>
            </ul>
          </div>

          <div className="lg:ml-[50px] text-center">
            <div className="flex md:gap-10 md:items-center justify-start flex-col md:flex-row">
              <p className="font-medium text-[#fff] text-[24px] leading-[33px]">
                Contact Us
              </p>
            </div>

            <ul className="mt-6 space-y-4 text-sm md:items-start flex text-left justify-center text-white w-full items-center">
              <div className="flex flex-col md:items-start gap-4 lg:gap-8 md:ml-[10px] ml-[45px] xl:text-[16px] text-[12px] lg:ml-0">
                <p className="transition hover:opacity-75 flex items-center gap-4">
                  <Location />
                  <span>
                    No 2, OKURU ROAD OFF JDP ROUND ABOUT{" "}
                    <span className="block">
                      PETER ODILI ROAD, TRANS AMADI,<br /> PORT HARCOURT.
                      Rivers State.
                    </span>
                  </span>
                </p>

                <p className="transition hover:opacity-75 flex items-center gap-4">
                  <Telephone />
                  <span>+234 8037 464 341, <br /> +234 0703 204 2223</span>
                </p>

                <p className="transition hover:opacity-75 flex items-center gap-4">
                  <Email />
                  <span>Info@adislimited.com, adoptinterservenigltd@yahoo.com</span>
                </p>
              </div>
            </ul>


            {/* Scroll-to-Top Button */}
            {showButton && (
								<div
									className="mt-[80px] ml-[10px] fixed xl:bottom-[270px] lg:bottom-[270px] md:bottom-[80px] bottom-[50px] xl:right-[100px] lg:right-[50px] xs:right-[20px] xxxs:right-[10px] md:right-[20px]  bg-[#C8102E] hover:bg-[#A10D24] w-10 h-10 rounded-full flex items-center justify-center z-50 cursor-pointer"
									onClick={scrollToTop}
								>
                                    <CornerRightUp className="text-white" />
                                </div>
							
						)}
          </div>
        </div>
      </div>
	   {/* Copyright Section */}
	   <div className="text-white text-sm mt-8 border-t w-full flex justify-end py-2 pr-4">
              <p>&copy; 2025 ADIS Limited. All Rights Reserved.</p>
            </div>
    </footer>
  )
}

export default Footer
