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

const plans: PlanProps[] = [
  {
    title: "Construction Planning Essentials",
    popular: PopularPlan.NO,
    price: 4999,
    description: "Learn the fundamental tools for effective construction planning, scheduling, and budgeting.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Construction Planning",
      "Basic Project Scheduling",
      "Time Management Tools",
      "Cost Estimation Techniques",
      "Certificate of Completion",
    ],
  },
  {
    title: "Construction Planning Pro",
    popular: PopularPlan.YES,
    price: 9999,
    description: "Comprehensive course covering advanced techniques in project scheduling, resource management, and risk assessment.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Project Scheduling",
      "Resource Allocation Techniques",
      "Risk Management Strategies",
      "Use of Primavera and MS Project",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Construction Planning Mastery",
    popular: PopularPlan.NO,
    price: 14999,
    description: "Master construction planning with hands-on projects, leadership skills, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Complete Project Lifecycle Management",
      "Advanced Resource and Risk Management",
      "Hands-on Capstone Project",
      "1:1 Mentorship & Career Support",
      "Placement Assistance + Certification",
    ],
  },
];

export const ConstructionPlanningPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Construction Planning Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your Construction Planning Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to expert, we have a course that fits your learning needs.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex items-center">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={popular === PopularPlan.YES ? "default" : "secondary"}
                  className="w-full"
                >
                  <Link
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Construction%20Planning%20course%20plans."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full"
                  >
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
