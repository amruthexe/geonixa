import { BusinessAnalyticsPricingSection } from '@/components/layout/sections/BusinessAnalyticsPricingSection'
import BusinessAnalyticsPromo from '@/components/layout/sections/BusinessAnalyticsPromo'
import BusinessAnalyticsSyllabus from '@/components/layout/sections/BusinessAnalyticsSyllabus'
import BusinessAnalyticsTools from '@/components/layout/sections/BusinessAnalyticsTools'
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
    <BusinessAnalyticsPromo/>
  
    <BusinessAnalyticsSyllabus/>
    <BusinessAnalyticsTools/>
    {/* <BusinessAnalyticsPricingSection/> */}
    
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
