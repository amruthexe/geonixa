import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import HEVPromo from '@/components/layout/sections/HEVPromo'
import HEVSyllabus from '@/components/layout/sections/HEVSyllabus'
import HEVTools from '@/components/layout/sections/HEVTools'
import { HRPricingSection } from '@/components/layout/sections/HRPricingSection'
import HRPromo from '@/components/layout/sections/HRPromo'
import HRSyllabus from '@/components/layout/sections/HRSyllabus'
import HRTools from '@/components/layout/sections/HRTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <HEVPromo/>
       <HEVSyllabus/>
       <HEVTools/>
       {/* <HRPricingSection/> */}
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
