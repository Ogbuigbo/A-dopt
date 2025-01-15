import React from 'react'
import TopSection from './TopSection'
import Logo from '../_components/Logo'
import Gallery from './Gallery'
import AboutPage from './AboutPage'
import Header from './Header'
import Hero from './Hero'

function page() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutPage/>
      <TopSection/>
    
      <Logo />
      {/* <Gallery /> */}
    </div>
  )
}

export default page
