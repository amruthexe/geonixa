import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import { DataVisualizationPricingSection } from '@/components/layout/sections/DataVisualizationPricingSection'
import DataVisualizationPromo from '@/components/layout/sections/DataVisualizationPromo'
import DataVisualizationSyllabus from '@/components/layout/sections/DataVisualizationSyllabus'
import DataVisualizationTools from '@/components/layout/sections/DataVisualizationTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
          <DataVisualizationPromo/>
      
       <DataVisualizationSyllabus/>
     
       <DataVisualizationTools/>
       {/* <DataVisualizationPricingSection/> */}
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
