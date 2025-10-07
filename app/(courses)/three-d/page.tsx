import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { ThreeDPrintingPricingSection } from '@/components/layout/sections/ThreeDPrintingPricingSection'
import ThreeDPrintingPromo from '@/components/layout/sections/ThreeDPrintingPromo'
import ThreeDPrintingSyllabus from '@/components/layout/sections/ThreeDPrintingSyllabus'
import ThreeDPrintingTools from '@/components/layout/sections/ThreeDPrintingTools'
import React from 'react'

const page = () => {
  return (
    <div>
       <ThreeDPrintingPromo/>
       <ThreeDPrintingSyllabus/>
       <ThreeDPrintingTools/>
       
       {/* <ThreeDPrintingPricingSection/> */}
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
