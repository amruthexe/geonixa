

import Footer from '@/components/layout/sections/footer'
import JobApplicationForm from '@/components/layout/sections/JobApplicationForm'
import JobsPage from '@/components/layout/sections/jobOpenings'
import WhyJoinUs from '@/components/layout/sections/WhyJoinUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <WhyJoinUs/>
        <JobsPage/>
      
        <JobApplicationForm/>

        <Footer/>
      
      
    </div>
  )
}

export default page
