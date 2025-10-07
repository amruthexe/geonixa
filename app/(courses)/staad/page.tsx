import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { STAADPricingSection } from '@/components/layout/sections/STAADPricingSection'
import STAADProPromo from '@/components/layout/sections/STAADProPromo'
import STAADProSyllabus from '@/components/layout/sections/STAADProSyllabus'
import STAADProTools from '@/components/layout/sections/STAADProTools'
import React from 'react'

const page = () => {
  return (
    <div>
       <STAADProPromo/>
       <STAADProSyllabus/>
       <STAADProTools/>
       {/* <STAADPricingSection/> */}
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
