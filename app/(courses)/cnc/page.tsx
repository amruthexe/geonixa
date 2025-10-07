import { CNCPricingSection } from '@/components/layout/sections/CNCPricingSection'
import CNCProgrammingPromo from '@/components/layout/sections/CNCProgrammingPromo'
import CNCProgrammingSyllabus from '@/components/layout/sections/CNCProgrammingSyllabus'
import CNCTools from '@/components/layout/sections/CNCTools'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <CNCProgrammingPromo/>
       <CNCProgrammingSyllabus/>
       <CNCTools/>
       {/* <CNCPricingSection/> */}
       <Reviews/>
    <Collaborations/>
    <GetCertified/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
      
    </div>
  )
}

export default page
