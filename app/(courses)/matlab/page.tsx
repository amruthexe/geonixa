import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import { JavaProgrammingPricingSection } from '@/components/layout/sections/JavaProgrammingPricingSection'
import JavaProgrammingSyllabus from '@/components/layout/sections/JavaProgrammingSyllabus'
import JavaProgrammingTools from '@/components/layout/sections/JavaProgrammingTools'
import JavaPromo from '@/components/layout/sections/JavaPromo'
import MATLABPromo from '@/components/layout/sections/MATLABPromo'
import MATLABSyllabus from '@/components/layout/sections/MATLABSyllabus'
import MATLABTools from '@/components/layout/sections/MATLABTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <MATLABPromo/>
       <MATLABSyllabus/>
       <MATLABTools/>
       {/* <JavaProgrammingPricingSection/> */}
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
