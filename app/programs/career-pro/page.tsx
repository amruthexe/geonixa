import { CareerProFeatureGrid } from '@/components/layout/sections/CareerProFeatureGrid'
import { CareerProHero } from '@/components/layout/sections/CareerProHero'
import CertificationsBenefitsDays from '@/components/layout/sections/CertificationsBenefitsDays'
import Collaborations from '@/components/layout/sections/Collaborations'
import CourseListComponent from '@/components/layout/sections/CourseListComponent'
import { DualPackFeatureHighlightGrid } from '@/components/layout/sections/DualPackFeatureHighlightGrid'
import { DualPackHero } from '@/components/layout/sections/DualPackHero'
import { FeatureHighlightGrid } from '@/components/layout/sections/FeatureHighlightGrid'
import Footer from '@/components/layout/sections/footer'
import GeonixaHero from '@/components/layout/sections/GeonixaHero'
import PhaseOne from '@/components/layout/sections/PhaseOne'
import PhaseTwo from '@/components/layout/sections/PhaseTwo'
import ProgramContactForm from '@/components/layout/sections/ProgramContact'
import ProgramOverviewDays from '@/components/layout/sections/ProgramOverviewDays'
import { Programs } from '@/components/layout/sections/Programs'
import ProgramStructureDays from '@/components/layout/sections/ProgramStructureDays'
import ProgramSummary from '@/components/layout/sections/ProgramSummary'
import ToolsPlatform from '@/components/layout/sections/ToolsPlatform'
import { VideoHero } from '@/components/layout/sections/Videohero'
import WhyJoin from '@/components/layout/sections/WhyJoin'
import React from 'react'

const page = () => {
  return (
    <div>
        <GeonixaHero/>
        <ProgramOverviewDays/>
       
        <ProgramStructureDays/>
      
        <PhaseOne/>
        <PhaseTwo/>
        <CertificationsBenefitsDays/>
        <ToolsPlatform/>
        <ProgramSummary/>
        <WhyJoin/>
        <Footer/>

      
    </div>
  )
}

export default page
