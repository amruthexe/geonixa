import BIMCourseSyllabus from '@/components/layout/sections/BIMCourseSyllabus'
import { BIMPricingSection } from '@/components/layout/sections/BIMPricingSection'
import BIMPromo from '@/components/layout/sections/BIMPromo'
import BIMTools from '@/components/layout/sections/BIMTools'
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
       <BIMPromo/>
       <BIMCourseSyllabus/>
       <BIMTools/>
       {/* <BIMPricingSection/> */}
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
