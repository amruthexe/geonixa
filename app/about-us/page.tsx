import AboutUs from '@/components/layout/sections/AboutUs'
import { ContactSection } from '@/components/layout/sections/contact'
import Footer from '@/components/layout/sections/footer'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutUs/>
        <ContactSection/>
        <Footer/>
      
    </div>
  )
}

export default page
