import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import { FinancePricingSection } from '@/components/layout/sections/FinancePricingSection'
import FinancePromo from '@/components/layout/sections/FinancePromo'
import FinanceSyllabus from '@/components/layout/sections/FinanceSyllabus'
import FinanceTools from '@/components/layout/sections/FinanceTools'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <FinancePromo/>
       <FinanceSyllabus/>
       <FinanceTools/>
       {/* <FinancePricingSection/> */}
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
