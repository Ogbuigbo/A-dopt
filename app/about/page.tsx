import React from 'react'
import TopSection from './TopSection'
import Logo from '../_components/Logo'
import Gallery from './Gallery'
import AboutPage from './AboutPage'
import Header from './Header'

function page() {
  return (
    <div>
      <Header/>
      <AboutPage/>
      <TopSection/>
    
      <Logo />
      {/* <Gallery /> */}
    </div>
  )
}

export default page
