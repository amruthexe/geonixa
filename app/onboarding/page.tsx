// app/onboarding/page.tsx

export const metadata = {
  title: "Student Onboarding | GeoNixa — Welcome to Your Learning Journey",
  description:
    "Thanks for enrolling at GeoNixa! Complete your onboarding to receive your welcome email, course access, and next steps for your learning journey.",
  keywords: [
    "GeoNixa onboarding",
    "student onboarding",
    "course enrollment",
    "geonixa courses",
    "full stack training onboarding",
    "ai training",
    "ui ux training",
    "student admission geonixa",
    "bootcamp onboarding"
  ],
  openGraph: {
    title: "GeoNixa Student Onboarding",
    description:
      "Complete your onboarding to unlock course access, support, and next steps.",
    url: "https://www.geonixa.com/onboarding",
    siteName: "GeoNixa",
    images: [
      {
        url: "https://www.geonixa.com/og/geonixa-banner.png",
        width: 1200,
        height: 630,
        alt: "GeoNixa Student Onboarding",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GeoNixa Student Onboarding",
    description:
      "Welcome to GeoNixa! Complete onboarding to access your course materials and next steps.",
    images: ["https://www.geonixa.com/og/geonixa-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.geonixa.com/onboarding",
  },
};




import Footer from '@/components/layout/sections/footer';
import StudentOnboarding from '@/components/layout/sections/StudentOnboarding'
import React from 'react'

const page = () => {
  return (
    <div>
      <StudentOnboarding/>
      <Footer/>
    </div>
  )
}

export default page
