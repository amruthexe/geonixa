import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import { EmbeddedSystemsPricingSection } from '@/components/layout/sections/EmbeddedSystemsPricingSection'
import EmbeddedSystemsPromo from '@/components/layout/sections/EmbeddedSystemsPromo'
import EmbeddedSystemsSyllabus from '@/components/layout/sections/EmbeddedSystemsSyllabus'
import EmbeddedSystemsTools from '@/components/layout/sections/EmbeddedSystemsTools'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <EmbeddedSystemsPromo/>
       <EmbeddedSystemsSyllabus/>
       <EmbeddedSystemsTools/>
       {/* <EmbeddedSystemsPricingSection/> */}
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
