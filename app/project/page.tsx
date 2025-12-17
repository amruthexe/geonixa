import React from 'react'
import ProjectHero from '@/components/layout/sections/ProjectHero'
import ProjectServices from '@/components/layout/sections/ProjectServices'
import ProjectWorkflow from '@/components/layout/sections/ProjectWorkflow'
import ProjectForm from '@/components/layout/sections/ProjectForm'
import Footer from '@/components/layout/sections/footer'
import { ContactSection } from '@/components/layout/sections/contact'
import Collaborations from '@/components/layout/sections/Collaborations'
import ProjectFeatures from '@/components/layout/sections/ProjectFeatures'
import ProjectFAQ from '@/components/layout/sections/ProjectFAQ'
import ProjectStats from '@/components/layout/sections/ProjectStats'
import ProjectTestimonials from '@/components/layout/sections/ProjectTestimonials'

const page = () => {
  return (
    <div className="bg-white">
        <ProjectHero />
        <ProjectStats />
        <ProjectFeatures />
        <ProjectServices />
        <ProjectWorkflow />
        <ProjectTestimonials />
        <ProjectFAQ />
        <ProjectForm />
        <Collaborations/>
        <ContactSection/>
        <Footer />
    </div>
  )
}

export default page
