import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import { ProjectManagementPricingSection } from '@/components/layout/sections/ProjectManagementPricingSection'
import ProjectManagementPromo from '@/components/layout/sections/ProjectManagementPromo'
import ProjectManagementSyllabus from '@/components/layout/sections/ProjectManagementSyllabus'
import ProjectManagementTools from '@/components/layout/sections/ProjectManagementTools'
import Reviews from '@/components/layout/sections/Reviews'
import React from 'react'

const page = () => {
  return (
    <div>
       <ProjectManagementPromo/>
       <ProjectManagementSyllabus/>
       <ProjectManagementTools/>
       {/* <ProjectManagementPricingSection/> */}
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
