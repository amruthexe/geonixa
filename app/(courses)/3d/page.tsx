import React from 'react'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import Reviews from '@/components/layout/sections/Reviews'
import ThreeDLearnPromo from '@/components/layout/sections/ThreeDLearnPromo'
import ThreeDLearnSyllabus from '@/components/layout/sections/ThreeDLearnSyllabus'
import ThreeDLearnTools from '@/components/layout/sections/ThreeDLearnTools'

const page = () => {
  return (
    <div>
        <ThreeDLearnPromo/>
        <ThreeDLearnSyllabus/>
        <ThreeDLearnTools/>
        <Reviews/>
        <Collaborations/>
        {/* <FAQSection/> */}
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default page
