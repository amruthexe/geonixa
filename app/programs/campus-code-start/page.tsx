import AppCareerOutcomes from '@/components/layout/sections/AppCareerOutcomes'
import AppDevCourse from '@/components/layout/sections/AppDevCourse'
import AppDevFormulaOverview from '@/components/layout/sections/AppDevFormulaOverview'
import AppInvestmentPaymentStructure from '@/components/layout/sections/AppInvestmentPaymentStructure'
import { CampusCodeStartFeatureGrid } from '@/components/layout/sections/CampusCodeStartFeatureGrid'
import { CampusCodeStartHero } from '@/components/layout/sections/CampusCodeStartHero'
import { CampusPlusFeatureGrid } from '@/components/layout/sections/CampusPlusFeatureGrid'
import { CampusPlusHero } from '@/components/layout/sections/CampusPlusHero'
import { CareerProFeatureGrid } from '@/components/layout/sections/CareerProFeatureGrid'
import { CareerProHero } from '@/components/layout/sections/CareerProHero'
import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { DualPackFeatureHighlightGrid } from '@/components/layout/sections/DualPackFeatureHighlightGrid'
import { DualPackHero } from '@/components/layout/sections/DualPackHero'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import MonthFivePlacementAppDev from '@/components/layout/sections/MonthFivePlacementAppDev'
import MonthOneTwoAppDev from '@/components/layout/sections/MonthOneTwoAppDev'
import MonthThreeFourAppDev from '@/components/layout/sections/MonthThreeFourAppDev'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import { Programs } from '@/components/layout/sections/Programs'
import ToolsTechnologiesAppDev from '@/components/layout/sections/ToolsTechnologiesAppDev'
import { VideoHero } from '@/components/layout/sections/Videohero'
import React from 'react'

const page = () => {
  return (
    <div>
        <AppDevCourse/>
        <AppDevFormulaOverview/>
       
        <MonthOneTwoAppDev/>
        <MonthThreeFourAppDev/>
        <MonthFivePlacementAppDev/>
        <ToolsTechnologiesAppDev/>
        <AppCareerOutcomes/>
        <AppInvestmentPaymentStructure/>
      
        <Programs/>

        <Collaborations/>
        <Footer/>

      
    </div>
  )
}

export default page
