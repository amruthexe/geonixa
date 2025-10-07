import { ANSYSPricingSection } from '@/components/layout/sections/ANSYSPricingSection'
import ANSYSPromo from '@/components/layout/sections/ANSYSPromo'
import ANSYSSyllabus from '@/components/layout/sections/ANSYSSyllabus'
import ANSYSTools from '@/components/layout/sections/ANSYSTools'
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
       <ANSYSPromo/>
       <ANSYSSyllabus/>
       <ANSYSTools/>
       {/* <ANSYSPricingSection/> */}
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
