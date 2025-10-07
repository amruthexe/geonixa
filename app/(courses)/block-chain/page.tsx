import BlockchainDevelopmentPricingSection from '@/components/layout/sections/BlockchainDevelopmentPricingSection'
import BlockchainDevelopmentPromo from '@/components/layout/sections/BlockchainDevelopmentPromo'
import BlockchainDevelopmentSyllabus from '@/components/layout/sections/BlockchainDevelopmentSyllabus'
import BlockchainTools from '@/components/layout/sections/BlockchainTools'
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
       <BlockchainDevelopmentPromo/>
       <BlockchainDevelopmentSyllabus/>
       <BlockchainTools/>
       {/* <BlockchainDevelopmentPricingSection/> */}
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
