import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import RevitArchitecturePromo from '@/components/layout/sections/RevitArchitecturePromo'
import { RevitPricingSection } from '@/components/layout/sections/RevitPricingSection'
import RevitSyllabus from '@/components/layout/sections/RevitSyllabus'
import RevitTools from '@/components/layout/sections/RevitTools'
import React from 'react'

const page = () => {
  return (
    <div>
       <RevitArchitecturePromo/>
       <RevitSyllabus/>
       <RevitTools/>
       {/* <RevitPricingSection/> */}
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
