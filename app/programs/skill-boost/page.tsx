import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import { Programs } from '@/components/layout/sections/Programs'
import { SkillBoostFeatureHighligh } from '@/components/layout/sections/SkillBoostFeatureHighligh'
import { SkillBoostHero } from '@/components/layout/sections/SkillBoostHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <SkillBoostHero/>
       <SkillBoostFeatureHighligh/>
       
        <ProgramContactForm/>
      
        <Programs/>
        <CourseListComponent/>
        <Collaborations/>
        <Footer/>

      
    </div>
  )
}

export default page
