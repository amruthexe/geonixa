import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import DataScienceModuleTimeline from '@/components/layout/sections/DataScienceModuleTimeline'
import { DataSciencePricingSection } from '@/components/layout/sections/DataSciencePricingSection'
import DataSciencePromo from '@/components/layout/sections/DataSciencePromo'
import DataScienceSyllabus from '@/components/layout/sections/DataScienceSyllabus'
import DataScienceTools from '@/components/layout/sections/DataScienceTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
        <DataSciencePromo/>
        <DataScienceSyllabus/>
        <DataScienceTools/>
        {/* <DataScienceModuleTimeline/> */}
        {/* <DataSciencePricingSection/> */}
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
