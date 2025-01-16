import React from 'react'
import Header from './Header'
import AboutHero from './Hero'
import Section from './Section'
import SectionGrid from './SectionGrid'

function page() {
  return (
    <div>
      <Header/>
      <AboutHero/>
      <Section />
      <SectionGrid/>
    </div>
  )
}

export default page
