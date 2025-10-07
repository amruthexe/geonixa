import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import { DigitalMarketingPricingSection } from '@/components/layout/sections/DigitalMarketingPricingSection'
import DigitalMarketingPromo from '@/components/layout/sections/DigitalMarketingPromo'
import DigitalMarketingSyllabus from '@/components/layout/sections/DigitalMarketingSyllabus'
import DigitalMarketingTools from '@/components/layout/sections/DigitalMarketingTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <DigitalMarketingPromo/>
       <DigitalMarketingSyllabus/>
       <DigitalMarketingTools/>
       {/* <DigitalMarketingPricingSection/> */}
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
