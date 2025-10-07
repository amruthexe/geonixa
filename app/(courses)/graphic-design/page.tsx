import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import { GraphicDesignPricingSection } from '@/components/layout/sections/GraphicDesignPricingSection'
import GraphicDesignPromo from '@/components/layout/sections/GraphicDesignPromo'
import GraphicDesignSyllabus from '@/components/layout/sections/GraphicDesignSyllabus'
import GraphicDesignTools from '@/components/layout/sections/GraphicDesignTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       
        <GraphicDesignPromo/>
       
        <GraphicDesignSyllabus/>
        <GraphicDesignTools/>
        {/* <GraphicDesignPricingSection/> */}
        

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
