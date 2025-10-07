
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import CurriculumTimeline from '@/components/layout/sections/CurriculumTimeline'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import Syllabus from '@/components/layout/sections/Syllabus'
import TechPartners from '@/components/layout/sections/TechPartners'
import WebDevPromo from '@/components/layout/sections/WebDevPromo'
import { WebPricingSection } from '@/components/layout/sections/WebPricingSection'
import React from 'react'

const page = () => {
  return (
     <div>
    <WebDevPromo/>
  
    <Syllabus/>
    <TechPartners/>
    {/* <CurriculumTimeline/> */}
    {/* <WebPricingSection/>
     */}
    <Reviews/>
    <Collaborations/><GetCertified/>
    {/* <FAQSection/> */}
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default page
