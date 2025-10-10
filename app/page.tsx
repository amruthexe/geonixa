import { Analytics } from "@vercel/analytics/react";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import Companies from "@/components/layout/sections/Companies";
import { ContactSection } from "@/components/layout/sections/contact";

import Container from "@/components/global/container";
import Programs from "@/components/layout/sections/Programs"; // ✅ fixed import
import VerticalsSection from "@/components/layout/sections/VerticalsSection";

import Footer from "@/components/layout/sections/footer";
import CommunityStats from "@/components/layout/sections/CommunityStats";
import Collaborations from "@/components/layout/sections/Collaborations";
import Journey from "@/components/layout/sections/Journey";
import ProgrammingGlobeSection from "@/components/layout/sections/ProgrammingGlobeSection";
import UpskillSection from "@/components/layout/sections/UpskillSection";
import TeamPlatformSection from "@/components/layout/sections/TeamPlatformSection";
import SuccessStories from "@/components/layout/sections/SuccessStories";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "GeoNixa | Online Learning Platform for Skill Development",
  description:
    "GeoNixa is an edtech startup offering affordable, industry-relevant online courses in web development, coding, and job-ready skills. Learn anywhere, anytime with GeoNixa E-Learning.",
  openGraph: {
    type: "website",
    url: "https://www.geonixa.com",
    title: "GeoNixa | E-Learning Platform for Future Skills",
    description:
      "Join GeoNixa E-Learning – a modern education startup helping students and professionals master web development, coding, and career-boosting skills.",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "GeoNixa - Online Learning for Web Development and Career Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.talenttrekelearning.info/",
    title: "GeoNixa | Learn Web Development & Job-Ready Skills Online",
    description:
      "Master coding, web development, and career skills with GeoNixa's expert-led, affordable courses. Start learning today.",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <UpskillSection />

      <Container>
        <Companies />
      </Container>

      <Programs /> {/* ✅ fixed and responsive */}
      <VerticalsSection />
      <ProgrammingGlobeSection />
      <SuccessStories />
      <TeamPlatformSection />
      <CommunityStats />
      <Collaborations />
      <Journey />
      <TestimonialSection />
      <ContactSection />
      <BenefitsSection />
      <Footer />
      
      <Analytics />
    </>
  );
}
