import Collaborations from '@/components/layout/sections/Collaborations'
import { ContactSection } from '@/components/layout/sections/contact'
import FAQSection from '@/components/layout/sections/FAQSection'
import Footer from '@/components/layout/sections/footer'
import GetCertified from '@/components/layout/sections/GetCertified'
import Reviews from '@/components/layout/sections/Reviews'
import { RoboticsPricingSection } from '@/components/layout/sections/RoboticsPricingSection'
import RoboticsPromo from '@/components/layout/sections/RoboticsPromo'
import RoboticsSyllabus from '@/components/layout/sections/RoboticsSyllabus'
import RoboticsTools from '@/components/layout/sections/RoboticsTools'

const page = () => {
  return (
    <div>
       <RoboticsPromo/>
       <RoboticsSyllabus/>
       <RoboticsTools/>
       {/* <RoboticsPricingSection/> */}
       <Reviews/>
    <Collaborations/>
    <GetCertified/>
    <FAQSection/>
    <ContactSection/>
    <Footer/>
      
    </div>
  )
}

export default page
