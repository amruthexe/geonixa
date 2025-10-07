

import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import Footer from '@/components/layout/sections/footer'
import JobApplicationForm from '@/components/layout/sections/JobApplicationForm'
import JobsPage from '@/components/layout/sections/jobOpenings'
import { SpecialProgramsPricingSection } from '@/components/layout/sections/SpecialProgramsSection'
import WhyJoinUs from '@/components/layout/sections/WhySpecial'
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <WhyJoinUs/> */}
        <SpecialProgramsPricingSection/>
        <Collaborations/>
    <ContactSection/>
      
      


        <Footer/>
      
      
    </div>
  )
}

export default page
