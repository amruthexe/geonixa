import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import DataScienceModuleTimeline from '@/components/layout/sections/DataScienceModuleTimeline'
import { DataSciencePricingSection } from '@/components/layout/sections/DataSciencePricingSection'
import DataScienceTools from '@/components/layout/sections/DataScienceTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import FullStackMERNTools from '@/components/layout/sections/FullStackMERNTools'
import FullStackWebModuleTimeline from '@/components/layout/sections/FullStackWebModuleTimeline'
import FullStackWebPromo from '@/components/layout/sections/FullStackWebPromo'
import FullStackWebSyllabus from '@/components/layout/sections/FullStackWebSyllabus'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
        <FullStackWebPromo/>
        <FullStackWebSyllabus/>
        <FullStackMERNTools/>
        {/* <FullStackWebModuleTimeline/> */}

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
