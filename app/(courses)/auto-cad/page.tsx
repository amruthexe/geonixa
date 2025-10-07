import AutoCADSolidWorksPromo from '@/components/layout/sections/AutoCADSolidWorksPromo'
import AutoCADSolidWorksSyllabus from '@/components/layout/sections/AutoCADSolidWorksSyllabus'
import { CADPricingSection } from '@/components/layout/sections/CADPricingSection'
import CADTools from '@/components/layout/sections/CADTools'
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
       <AutoCADSolidWorksPromo/>
       <AutoCADSolidWorksSyllabus/>
       <CADTools/>
       {/* <CADPricingSection/> */}
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
