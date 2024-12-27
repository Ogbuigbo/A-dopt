import Header from '@/app/_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import EngineeringServices from './EngineeringServices'

function page() {
  return (
    <div>
      <Header />
      <Hero />
      <EngineeringServices />
      <Section />
    </div>
  )
}

export default page
