
import AppDevPromo from '@/components/layout/sections/AppDevPromo'
import { AppPricingSection } from '@/components/layout/sections/AppPricingSection'
import AppSyllabus from '@/components/layout/sections/AppSyallabus'
import AppTechPartners from '@/components/layout/sections/AppTechPartner'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import CurriculumTimeline from '@/components/layout/sections/CurriculumTimeline'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import TechPartners from '@/components/layout/sections/TechPartners'
import React from 'react'

const page = () => {
  return (
     <div>
    <AppDevPromo/>
  
    <AppSyllabus/>
    <AppTechPartners/>
    {/* <CurriculumTimeline/> */}
    {/* <AppPricingSection/> */}
    
    <Reviews/>
    <Collaborations/>
    <GetCertified/>
    {/* <FAQSection/> */}
    <ContactSection/>
    <Footer/>
    </div>
  )
}

export default page
