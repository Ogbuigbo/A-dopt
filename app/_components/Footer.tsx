"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import Telephone from "../assets/Telephone"
import Email from "../assets/Email"
import Location from "../assets/Location"
import { CornerRightUp } from "lucide-react"

function Footer() {
	const [showButton, setShowButton] = useState(false)
	const footerRef = useRef(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollHeight = document.documentElement.scrollHeight
			const scrollTop =
				window.pageYOffset || document.documentElement.scrollTop
			const windowHeight = window.innerHeight
			// Calculate the height at which you want the button to appear
			const triggerHeight = scrollHeight * 0.05 // Adjust the percentage as needed

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
		<footer className="bg-[#00205B] pb-[10px]">
			<div
				className="lg:px-[62px] xl:px-[124px] space-y-8 px-4 py-6 sm:px-6 xl:space-y-16 xl:p-12"
				ref={footerRef}
			>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] md:text-justify text-center">
					<div>
						<h1 className="text-[#fff] xl:text-[24px] text-[16px]  flex gap-2 items-center text-center md:justify-start justify-center">
							<span>ADIS</span>
							<span>LIMITED</span>
							<span></span>{" "}
						</h1>
						<p className="mt-2 text-justify text-white text-[12px] xl:text-[16px] xl:min-w-[471px] font-medium lg:min-w-[390px] w-full">
            At ADIS, we are dedicated to providing top-notch services with a commitment to quality, precision, and innovation. Explore our offerings and let us help you achieve your goals.
</p>

					</div>

					<div className="md:ml-[150px]">
						<p className="font-bold text-white text-[16px] leading-[33px] xl:text-[24px]">
							Useful Links
						</p>

						<ul className="mt-2 space-y-4 text-sm text-white flex flex-col gap-2 text-[12px] font-medium xl:text-[20px]">
							<Link
								href="/"
								className=" transition hover:opacity-75"
							>
								Home
							</Link>

							<Link
								href="/about"
								className="transition hover:opacity-75"
							>
								About Us
							</Link>

							<Link
								href="/services"
								className="transition hover:opacity-75"
							>
								Services
							</Link>

							<Link
								href="/contact"
								className="t transition hover:opacity-75"
							>
								Contact Us
							</Link>
						</ul>
					</div>

					<div className="lg:ml-[50px] text-center">
						<div className="flex md:gap-10 md:items-center justify-start flex-col md:flex-row">
							<p className="font-medium text-[#fff] text-[24px] leading-[33px]">
								Contact Us
							</p>
						</div>

						<ul className="mt-6 space-y-4 text-sm md:items-start flex text-left justify-center  text-white w-full items-center">
							<div className="flex flex-col md:items-start  gap-4 lg:gap-8 md:ml-[10px] ml-[45px] xl:text-[16px] text-[12px]  lg:ml-0">
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
									<span>Info@adislimited.com, adoptinterservenigltd@yahoo.ccom</span>
								</p>
							</div>
						</ul>
 

            {/* Scroll-to-Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed xl:bottom-[270px] lg:bottom-[270px] md:bottom-[80px] bottom-[50px] xl:right-[100px] lg:right-[50px] md:right-[20px] bg-[#C8102E] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#A10D24] transition-all duration-300 shadow-lg"
          aria-label="Scroll to Top"
        >
          <CornerRightUp className="text-white" />
        </button>
      )}
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer