import Header from '@/app/_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import LaboratoryServices from '@/app/_components/LaboratoryServices'

function page() {
  return (
    <div>
      <Header/>
      <Hero />
      <LaboratoryServices />
      <Section />
    </div>
  )
}

export default page
