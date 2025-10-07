import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { SQLPricingSection } from '@/components/layout/sections/SQLPricingSection'
import SQLPromo from '@/components/layout/sections/SQLPromo'
import SQLSyllabus from '@/components/layout/sections/SQLSyllabus'
import SQLTools from '@/components/layout/sections/SQLTools'
import React from 'react'

const page = () => {
  return (
    <div>
       <SQLPromo/>
       <SQLSyllabus/>
       <SQLTools/>
       {/* <SQLPricingSection/> */}
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
