import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { UIUXDesignPricing } from '@/components/layout/sections/UIUXDesignPricing'
import UIUXDesignTools from '@/components/layout/sections/UIUXDesignTools'
import UIUXPromo from '@/components/layout/sections/UIUXPromo'
import UIUXSyllabus from '@/components/layout/sections/UIUXSyllabus'
import React from 'react'

const page = () => {
  return (
    <div>
       <UIUXPromo/>
       <UIUXSyllabus/>
       <UIUXDesignTools/>
       
       {/* <UIUXDesignPricing/> */}
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
