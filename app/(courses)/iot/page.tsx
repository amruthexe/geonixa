import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import { IOTPricingSection } from '@/components/layout/sections/IOTPricingSection'
import IOTPromo from '@/components/layout/sections/IOTPromo'
import IOTSyllabus from '@/components/layout/sections/IOTSyllabus'
import IOTTools from '@/components/layout/sections/IOTTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <IOTPromo/>
       <IOTSyllabus/>
       <IOTTools/>
       {/* <IOTPricingSection/> */}
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
