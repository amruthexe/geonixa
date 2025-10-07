import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { VLSIPricingSection } from '@/components/layout/sections/VLSIPricingSection'
import VLSIPromo from '@/components/layout/sections/VLSIPromo'
import VLSISyllabus from '@/components/layout/sections/VLSISyllabus'
import VLSITools from '@/components/layout/sections/VLSITools'
import React from 'react'

const page = () => {
  return (
    <div>
       <VLSIPromo/>
       <VLSISyllabus/>
       <VLSITools/>
       
       {/* <VLSIPricingSection/> */}
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
