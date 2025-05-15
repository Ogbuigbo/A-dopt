import React from 'react'
import Section from './Section'
import Header from '@/app/_components/Header'
import AboutAdis from './About'
import AboutScrollHandler from '@/app/_components/aboutUsScrollHandler'

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
  return (
    <div>
       <AboutScrollHandler section={searchParams?.section} />
        <Header/>
     
      <Section/>

    </div>
  )
}

export default page
