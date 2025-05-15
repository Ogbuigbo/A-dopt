import Header from '../../_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import EngineeringServices from './EngineeringServices'
import Engineering from './Engineering'
import Engine from './Engine'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A-Dopt International Services Limited",
  description:
      "A-Dopt International Services Limited is a leading engineering consultancy firm, delivering cutting-edge solutions that drive sustainable growth. Since 2009, we have set industry standards with high-quality, timely services aligned with our clients' strategic goals, expanding into global markets.",
}

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <EngineeringServices />
      <Section />
      <Engineering/>
      {/* <Engine /> */}
    </div>
  )
}

export default page
