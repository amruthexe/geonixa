import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import { DevOpsPricingSection } from '@/components/layout/sections/DevOpsPricingSection'
import DevOpsPromo from '@/components/layout/sections/DevOpsPromo'
import DevOpsSyllabus from '@/components/layout/sections/DevOpsSyllabus'
import DevOpsTools from '@/components/layout/sections/DevOpsTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <DevOpsPromo/>
       <DevOpsSyllabus/>
       <DevOpsTools/>
       {/* <DevOpsPricingSection/> */}
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
