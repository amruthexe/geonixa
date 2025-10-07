import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import { Programs } from '@/components/layout/sections/Programs'
import { VideoHero } from '@/components/layout/sections/Videohero'
import React from 'react'

const page = () => {
  return (
    <div>
        <VideoHero/>
        <FeatureHighlightGrid/>
       
        <ProgramContactForm/>
      
        <Programs/>
        <CourseListComponent/>
        <Collaborations/>
        <Footer/>

      
    </div>
  )
}

export default page
