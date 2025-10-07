import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { StockMarketPricingSection } from '@/components/layout/sections/StockMarketPricingSection'
import StockMarketPromo from '@/components/layout/sections/StockMarketPromo'
import StockMarketSyllabus from '@/components/layout/sections/StockMarketSyllabus'
import StockMarketTools from '@/components/layout/sections/StockMarketTools'
import React from 'react'

const page = () => {
  return (
    <div>
       <StockMarketPromo/>
       <StockMarketSyllabus/>
       <StockMarketTools/>
       {/* <StockMarketPricingSection/> */}
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
