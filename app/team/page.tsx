import { TeamSection } from '@/components/layout/sections/team'
import Footer from '@/components/layout/sections/footer'
import React from 'react'
import Winners from '@/components/layout/sections/Winners'

const page = () => {
  return (
    <div>
      <Winners/>
      
        <TeamSection/>
        <Footer/>
        
      
    </div>
  )
}

export default page
