'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

// Slug mapping for each course
const courseOptions = [
  { name: 'Fast Track 45 (Recorded)', slug: 'fast-track' },
  { name: 'Skill Boost 2 (Live + Recorded)', slug: 'skill-boost' },
  { name: 'Pro Edge 3 (Live + Recorded)', slug: 'pro-edge' },
  { name: 'Dual Path 5 (Live + Recorded)', slug: 'dual-pack' },
  { name: 'Career Pro 6 (Live + Recorded)', slug: 'career-pro' },
  { name: 'Campus+ LearnTrack', slug: 'campus-plus' },
  { name: 'Campus+ ProjectPro', slug: 'campus-project-pro' },
  { name: 'Campus+ CodeStart', slug: 'campus-code-start' },
];

// Helper function to get slug by course name
const getSlugFromTitle = (title: string): string | undefined => {
  const course = courseOptions.find((c) => c.name === title);
  return course?.slug;
};

const programCategories: { category: string; plans: PlanProps[] }[] = [
  {
    category: "Career Accelerator Programs",
    plans: [
      {
        title: "Fast Track 45 (Recorded)",
        popular: PopularPlan.YES,
        price: 2999,
        description: "Tech Course + 1 project + Internship with certificates from AWS & soft skills training.",
        buttonText: "Get Started",
        benefitList: [
          "45 days Internship",
          "1 Month Course Training",
          "15 Days Project",
          "AWS Certificate + Soft Skills",
          "Internship Certificate",
        ],
      },
      {
        title: "Skill Boost 2 (Live + Recorded)",
        popular: PopularPlan.YES,
        price: 3999,
        description: "Live/Recorded sessions + Projects + Internship + Mentorship + LOR & AICTE Certificate.",
        buttonText: "Enroll Now",
        benefitList: [
          "2 Months Duration",
          "5 Projects (4 Minor + 1 Major)",
          "Internship from AWS",
          "Excellence Certificate from MNC Mentor",
          "LOR + AICTE Certificate",
        ],
      },
      {
        title: "Pro Edge 3 (Live + Recorded)",
        popular: PopularPlan.YES,
        price: 4999,
        description: "Complete training + internship + soft skills training with certification and LMS access.",
        buttonText: "Join Program",
        benefitList: [
          "3 Month Access",
          "Soft Skills (Aptitude + Resume + LinkedIn)",
          "Internship + AICTE Certificate",
          "MNC LOR + Brain Battle Exam",
          "LMS + Community Support",
        ],
      },
      {
        title: "Dual Path 5 (Live + Recorded)",
        popular: PopularPlan.YES,
        price: 5999,
        description: "Two-course dual program with full-stack internship, 10 projects, and career support.",
        buttonText: "Explore Now",
        benefitList: [
          "5 Month Dual Course",
          "8 Minor + 2 Major Projects",
          "2 Internships + Soft Skills",
          "MNC Mentor Certification + LOR",
          "LMS + Growth Community",
        ],
      },
      {
        title: "Career Pro 6 (Live + Recorded)",
        popular: PopularPlan.YES,
        price: 30000,
        description: "Complete career transformation package including domain expertise and placement support.",
        buttonText: "Talk to Mentor",
        benefitList: [
          "6 Months Course Access",
          "12 Projects (10 Minor + 2 Major)",
          "Full Career Guidance",
          "Placement Assistance",
          "All Certificates + LMS",
        ],
      },
      {
        title: "AI & Data Career Track",
        popular: PopularPlan.YES,
        price: 9999,
        description: "Specialized path for AI, Data Science, and ML aspirants with project-based learning and expert mentorship.",
        buttonText: "Apply Now",
        benefitList: [
          "Expert-led Live Classes",
          "Real Industry Data Projects",
          "Capstone Project with MNC Review",
          "LMS + Job Readiness Program",
          "Certification + Placement Support",
        ],
      },
    ],
  },
  {
    category: "Campus+ Academic Programs",
    plans: [
      {
        title: "Campus+ LearnTrack",
        popular: PopularPlan.YES,
        price: 5999,
        description: "Academic subject support for degree students with backlogs, assignments, and more.",
        buttonText: "Start Learning",
        benefitList: [
          "Academic + Supplementary Support",
          "Notes + Summary + Assignments",
          "2 Doubt Sessions / Month",
          "B.Tech, BBA, B.Com & More",
          "Exam & Internal Prep Help",
        ],
      },
      {
        title: "Campus+ ProjectPro",
        popular: PopularPlan.YES,
        price: 15000,
        description: "Final year project creation from scratch with report, presentation, and mentorship.",
        buttonText: "Book Project",
        benefitList: [
          "IEEE/NAAC Standard Projects",
          "Report + PPT Ready to Submit",
          "Live Mentorship + Viva Prep",
          "3-5 Days Express Delivery (₹2000 Extra)",
          "Streams: B.Tech, MBA, B.Com, etc.",
        ],
      },
      {
        title: "Campus+ CodeStart",
        popular: PopularPlan.YES,
        price: 1999,
        description: "Coding foundation for students from Class 6–12 with HTML, Python, JS & Scratch.",
        buttonText: "Enroll Student",
        benefitList: [
          "Live Weekend Batches (3 Months)",
          "HTML, Python, JS, Scratch",
          "Mini Projects + Games",
          "Mentor Guidance + Doubts",
          "Certificate + English Coaching",
        ],
      },
    ],
  },
];

export const SpecialProgramsPricingSection = () => {
  return (
    <section className="container py-12 sm:py-12">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider uppercase">
        GeoNixa Specials
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose a Program That Matches Your Goals
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Smart learning paths designed for beginners to career-focused learners.
      </h3>

      {programCategories.map(({ category, plans }) => (
        <div key={category} className="mb-16">
          <h4 className="text-2xl font-semibold mb-6 text-center text-primary">
            {category}
          </h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6">
            {plans.map(
              ({ title, popular, price, description, buttonText, benefitList }) => {
                const slug = getSlugFromTitle(title);

                return (
                  <Card
                    key={title}
                    className={`transition duration-300 hover:shadow-xl rounded-xl border ${
                      popular === PopularPlan.YES
                        ? "border-black shadow-md scale-[1.05] m-4"
                        : "border-black shadow-md scale-[1.05] m-4"
                    }`}
                  >
                    <CardHeader>
                      <CardTitle className="pb-2 text-xl font-semibold">
                        {title}
                      </CardTitle>
                      <CardDescription className="pb-4">
                        {description}
                      </CardDescription>
                      <div>
                        <span className="text-3xl font-bold text-foreground">₹{price}</span>
                        <span className="text-muted-foreground"> /one-time</span>
                      </div>
                    </CardHeader>

                    <CardContent className="flex">
                      <div className="space-y-3">
                        {benefitList.map((benefit) => (
                          <span key={benefit} className="flex items-start gap-2">
                            <Check className="text-primary mt-1" />
                            <h3 className="text-sm font-medium text-muted-foreground">
                              {benefit}
                            </h3>
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-2">
                      <Link
                        href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20special%20programs."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button
                          className={`w-full ${
                            popular === PopularPlan.YES
                              ? "bg-black text-white hover:bg-gray-800"
                              : "bg-black text-white hover:bg-gray-600"
                          }`}
                        >
                          {buttonText}
                        </Button>
                      </Link>

                      {slug && (
                        <Link href={`programs/${slug}`} className="w-full">
                          <Button
                            variant="outline"
                            className="w-full border-black text-black hover:bg-muted"
                          >
                            View Program
                          </Button>
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                );
              }
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
