import Wrapper from "@/components/global/wrapper";
import { Analytics } from "@vercel/analytics/react"
import FeaturesSectionDemo from "@/components/layout/sections/Afeatures";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import Companies from "@/components/layout/sections/Companies";
import { ContactSection } from "@/components/layout/sections/contact";
import CTA from "@/components/layout/sections/cta";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { HeroSection } from "@/components/layout/sections/hero";
import  Container from "@/components/global/container";
import { Programs } from "@/components/layout/sections/Programs";
import VerticalsSection from "@/components/layout/sections/VerticalsSection";
import VisitCenterSection from "@/components/layout/sections/VisitCenterSection";
import Reviews from "@/components/layout/sections/Reviews";
import Footer from "@/components/layout/sections/footer";
import NewPricing from "@/components/layout/sections/Newpricing";
import ExplorePrograms from "@/components/layout/sections/sideprograms";
import CommunityStats from "@/components/layout/sections/CommunityStats";
import Collaborations from "@/components/layout/sections/Collaborations";
import BrainBattleChampionship from "@/components/layout/sections/BrainBattleChampionship";
import BrainBattleWinners from "@/components/layout/sections/BrainBattleWinners";
import JobTrainingComponent from "@/components/layout/sections/JobTrainingComponent";
import { CardHoverEffectDemo } from "@/components/layout/sections/CardHoverEffectDemo";
import JobReady from "@/components/layout/sections/JobReady";
import Journey from "@/components/layout/sections/Journey";
import WhyJoinGeoNixa from "@/components/layout/sections/WhyJoinGeoNixa";
import ProgrammingGlobeSection from "@/components/layout/sections/ProgrammingGlobeSection";
import { CourseOfferings } from "@/components/layout/sections/DataEntryServices";
export const metadata = {
  title: "GeoNixa | Online Learning Platform for Skill Development",
  description:
    "GeoNixa is an edtech startup offering affordable, industry-relevant online courses in web development, coding, and job-ready skills. Learn anywhere, anytime with GeoNixa E-Learning.",
  openGraph: {
    type: "website",
    url: "https://www.talenttrekelearning.info/", // Update to your actual domain
    title: "GeoNixa | E-Learning Platform for Future Skills",
    description:
      "Join GeoNixa E-Learning – a modern education startup helping students and professionals master web development, coding, and career-boosting skills.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: "GeoNixa - Online Learning for Web Development and Career Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.talenttrekelearning.info/", // Replace with your domain
    title: "GeoNixa | Learn Web Development & Job-Ready Skills Online",
    description:
      "Master coding, web development, and career skills with GeoNixa's expert-led, affordable courses. Start learning today.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg", // Update if needed
    ],
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <Container >
                    <Companies />
                </Container>
                <Programs/>
                <VerticalsSection/>
               <ProgrammingGlobeSection/>
               
               
            
                {/* <ExplorePrograms/> */}
                {/* <FeaturesSectionDemo/> */}
                <BrainBattleWinners/>
                <CourseOfferings/>
             
             <WhyJoinGeoNixa/>

            

              
 
      <FeaturesSection />
      <CommunityStats/>
     
     
  
      {/* <NewPricing/> */}
      <Collaborations/>
   
    <Journey />
      

     <Reviews/>
      <ContactSection />
      <FAQSection />
     
     
      {/* <CommunitySection /> */}
      <BenefitsSection />
      <VisitCenterSection/>

    
      <Footer/>
      <Analytics/>
     
    </>
  );
}
