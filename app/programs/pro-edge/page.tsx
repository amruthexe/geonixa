import CertificationsBenefits from '@/components/layout/sections/CertificationsBenefits'
import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import Phase1CoreTraining from '@/components/layout/sections/Phase1CoreTraining'
import Phase2And3ProjectsSkills from '@/components/layout/sections/Phase2And3ProjectsSkills'
import Phase4MajorGroupProject from '@/components/layout/sections/Phase4MajorGroupProject'
import {ProedgeFeatures} from '@/components/layout/sections/ProEdgeFeatures'
import { ProEdgeHero } from '@/components/layout/sections/ProEdgeHero'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import ProgramHeroCourse from '@/components/layout/sections/ProgramHeroCourse'
import { Programs } from '@/components/layout/sections/Programs'
import ProgramStructureTwo from '@/components/layout/sections/ProgramStructureTwo'
import TwoMonthsProgramHeroSection from '@/components/layout/sections/TwoMonthsProgramHeroSection'
import TwoProgramOverview from '@/components/layout/sections/TwoProgramOverview'
import { VideoHero } from '@/components/layout/sections/Videohero'
import React from 'react'

const page = () => {
  return (
    <div className="overflow-x-hidden w-full">
        <ProgramHeroCourse/>
        <TwoProgramOverview/>
        <ProgramStructureTwo/>
        <Phase1CoreTraining/>
        <Phase2And3ProjectsSkills/>
        <Phase4MajorGroupProject/>
        <CertificationsBenefits/>
        <Programs/>
        <CourseListComponent/>
        <Collaborations/>
        <Footer/>
    </div>
  )
}

export default page
