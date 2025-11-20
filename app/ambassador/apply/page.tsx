
import Footer from '@/components/layout/sections/footer'
import StudentAmbassadorDark from '@/components/layout/sections/StudentAmbassadorProgram'
import StudentAmbassadorSection from '@/components/layout/sections/StudentAmbassadorSection'
import React from 'react'

const page = () => {
  return (
    <div>
     <StudentAmbassadorSection/>
     <StudentAmbassadorDark/>
     <Footer/>
    </div>
  )
}

export default page
