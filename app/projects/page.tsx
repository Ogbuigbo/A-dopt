import React from 'react'
import Header from './Header'
import TopSection from './Project'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A-Dopt International Services Limited",
  description:
      "A-Dopt International Services Limited is a leading engineering consultancy firm, delivering cutting-edge solutions that drive sustainable growth. Since 2009, we have set industry standards with high-quality, timely services aligned with our clients' strategic goals, expanding into global markets.",
}

function page() {
  return (
    <div>
    <Header/>
    <TopSection/>
    </div>
  )
}

export default page
