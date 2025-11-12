import { CampusPlusFeatureGrid } from '@/components/layout/sections/CampusPlusFeatureGrid'
import { CampusPlusHero } from '@/components/layout/sections/CampusPlusHero'
import { CampusProjectProFeatureGrid } from '@/components/layout/sections/CampusProjectProFeatureGrid'
import { CampusProjectProHero } from '@/components/layout/sections/CampusProjectProHero'
import { CareerProFeatureGrid } from '@/components/layout/sections/CareerProFeatureGrid'
import { CareerProHero } from '@/components/layout/sections/CareerProHero'
import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import DigitalCareerOutcomes from '@/components/layout/sections/DigitalCareerOutcomes'
import DigitalInvestmentPaymentStructure from '@/components/layout/sections/DigitalInvestmentPaymentStructure'
import DigitalMarketingCourse from '@/components/layout/sections/DigitalMarketingCourse'
import DigitalMarketingFormulaOverview from '@/components/layout/sections/DigitalMarketingFormulaOverview'
import { DualPackFeatureHighlightGrid } from '@/components/layout/sections/DualPackFeatureHighlightGrid'
import { DualPackHero } from '@/components/layout/sections/DualPackHero'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import MonthFivePlacementDigitalMarketing from '@/components/layout/sections/MonthFivePlacementDigitalMarketing'
import MonthOneTwoDigitalMarketing from '@/components/layout/sections/MonthOneTwoDigitalMarketing'
import MonthThreeFourDigitalMarketing from '@/components/layout/sections/MonthThreeFourDigitalMarketing'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import { Programs } from '@/components/layout/sections/Programs'
import ToolsTechnologiesDigitalMarketing from '@/components/layout/sections/ToolsTechnologiesDigitalMarketing'
import { VideoHero } from '@/components/layout/sections/Videohero'
import React from 'react'

const page = () => {
  return (
    <div>
        <DigitalMarketingCourse/>
        <DigitalMarketingFormulaOverview/>
       <MonthOneTwoDigitalMarketing/>
       <MonthThreeFourDigitalMarketing/>
       <MonthFivePlacementDigitalMarketing/>
       <ToolsTechnologiesDigitalMarketing/>
       <DigitalCareerOutcomes/>
       <DigitalInvestmentPaymentStructure/>
    
      
        <Programs/>
        
        <Collaborations/>
        <Footer/>

      
    </div>
  )
}

export default page
