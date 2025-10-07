import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import PythonProgrammingModuleTimeline from '@/components/layout/sections/PythonProgrammingModuleTimeline'
import { PythonProgrammingPricingSection } from '@/components/layout/sections/PythonProgrammingPricingSection'
import PythonProgrammingPromo from '@/components/layout/sections/PythonProgrammingPromo'
import PythonProgrammingSyllabus from '@/components/layout/sections/PythonProgrammingSyllabus'
import PythonProgrammingTools from '@/components/layout/sections/PythonProgrammingTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <PythonProgrammingPromo/>
       <PythonProgrammingSyllabus/>
       <PythonProgrammingTools/>
       {/* <PythonProgrammingModuleTimeline/>
       <PythonProgrammingPricingSection/> */}
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
