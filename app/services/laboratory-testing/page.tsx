import Header from '@/app/_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import LaboratoryServices from '@/app/_components/LaboratoryServices'
import AboutScrollHandler from '@/app/_components/aboutUsScrollHandler'
import SectionOne from './SectionOne'

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
