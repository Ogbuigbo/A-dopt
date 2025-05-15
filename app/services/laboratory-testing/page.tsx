import Header from '../../_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import LaboratoryServices from '../../_components/LaboratoryServices'
import AboutScrollHandler from '../../_components/aboutUsScrollHandler'
import SectionOne from './SectionOne'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "A-Dopt International Services Limited",
  description:
      "A-Dopt International Services Limited is a leading engineering consultancy firm, delivering cutting-edge solutions that drive sustainable growth. Since 2009, we have set industry standards with high-quality, timely services aligned with our clients' strategic goals, expanding into global markets.",
}

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div>
        <AboutScrollHandler section={searchParams?.section} />
      <Header/>
      <Hero />
      <LaboratoryServices />
      <SectionOne/>
      <Section />
    </div>
  )
}

export default page
