import Header from '@/app/_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import AboutScrollHandler from '@/app/_components/aboutUsScrollHandler'
import EnvironmentalServices from './Services'

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div>
      <AboutScrollHandler section={searchParams?.section} />
      <Header/>
      <Hero/>
      <Section />
      <EnvironmentalServices/>
    </div>
  )
}

export default page
