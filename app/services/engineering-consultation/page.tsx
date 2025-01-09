import Header from '@/app/_components/Header'
import React from 'react'
import Hero from './Hero'
import Section from './Section'
import EngineeringServices from './EngineeringServices'
import Engineering from './Engineering'
import Engine from './Engine'

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
