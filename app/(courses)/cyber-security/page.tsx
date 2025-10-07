
import AiModuleTimeline from '@/components/layout/sections/AiModuleTimeline'
import { AiPricingSection } from '@/components/layout/sections/AiPricingSection'
import AiPromo from '@/components/layout/sections/AiPromo'
import AiSyllabus from '@/components/layout/sections/AiSyllabus'
import AiToolsCovered from '@/components/layout/sections/AiToolsCovered'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import CyberSecurityModuleTimeline from '@/components/layout/sections/CyberSecurityModuleTimeline'
import { CyberSecurityPricingSection } from '@/components/layout/sections/CyberSecurityPricingSection'
import CyberSecurityPromo from '@/components/layout/sections/CyberSecurityPromo'
import CyberSecuritySyllabus from '@/components/layout/sections/CyberSecuritySyllabus'
import CyberSecurityTools from '@/components/layout/sections/CyberSecurityTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
     <div>
    <CyberSecurityPromo/>
  
    <CyberSecuritySyllabus/>
    <CyberSecurityTools/>
    {/* <CyberSecurityModuleTimeline/> */}
    {/* <CyberSecurityPricingSection/> */}
    
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
