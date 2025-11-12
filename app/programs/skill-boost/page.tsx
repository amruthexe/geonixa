import CareerOutcomes from '@/components/layout/sections/CareerOutcomes'
import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import InvestmentPaymentStructure from '@/components/layout/sections/InvestmentPaymentStructure'
import MonthFivePlacement from '@/components/layout/sections/MonthFivePlacement'
import MonthOneTwo from '@/components/layout/sections/MonthOneTwo'
import MonthThreeFour from '@/components/layout/sections/MonthThreeFour'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import { Programs } from '@/components/layout/sections/Programs'
import { SkillBoostFeatureHighligh } from '@/components/layout/sections/SkillBoostFeatureHighligh'
import { SkillBoostHero } from '@/components/layout/sections/SkillBoostHero'
import ToolsTechnologiesMastery from '@/components/layout/sections/ToolsTechnologiesMastery'
import WebDevFormulaOverview from '@/components/layout/sections/WebDevFormulaOverview'
import LearningJourneyTimeline from '@/components/layout/sections/WebLearningJourneyTimeline'
import WebDevCourse from '@/components/layout/sections/webv2'
import React from 'react'

const page = () => {
  return (
    <div>
        <WebDevCourse/>
       <WebDevFormulaOverview/>
      
       
        <MonthOneTwo/>
        <MonthThreeFour/>
        <MonthFivePlacement/>
      <ToolsTechnologiesMastery/>
       <LearningJourneyTimeline/>
       <CareerOutcomes/>
       <InvestmentPaymentStructure/>
        <Programs/>
       
        <Collaborations/>
        <Footer/>

      
    </div>
  )
}

export default page
