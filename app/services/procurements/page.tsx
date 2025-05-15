import Header from '@/app/_components/Header'
import React from 'react'
import Section from './Section'

function page({ searchParams }: { searchParams: { [key: string]: string } }) {
    return (
      <div>
      
          <Header/>
          <Section/>
    </div>
  )
}

export default page
