import React from 'react'
import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import Reviews from '@/components/layout/sections/Reviews'
import MLPromo from '@/components/layout/sections/MLPromo'
import MLSyllabus from '@/components/layout/sections/MLSyllabus'
import MLTools from '@/components/layout/sections/MLTools'

const page = () => {
  return (
    <div>
        <MLPromo/>
        <MLSyllabus/>
        <MLTools/>
        <Reviews/>
        <Collaborations/>
        {/* <FAQSection/> */}
        <ContactSection/>
        <Footer/>
    </div>
  )
}

export default page
