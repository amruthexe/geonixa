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
    title: "ANSYS Essentials for FEA & CFD",
    popular: PopularPlan.NO,
    price: 7999,
    description: "Perfect for beginners to get introduced to FEA & CFD simulations using ANSYS.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to FEA & CFD",
      "Basic ANSYS Interface & Tools",
      "Simple Structural and Fluid Simulations",
      "Basic Simulation Setup and Results Interpretation",
      "Certificate of Completion",
    ],
  },
  {
    title: "ANSYS Advanced FEA & CFD",
    popular: PopularPlan.YES,
    price: 14999,
    description: "Advanced course for mastering FEA & CFD simulations, including complex simulations.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced FEA & CFD Simulation Techniques",
      "Fluid-Structure Interaction",
      "Transient Analysis and Nonlinear Modeling",
      "Optimization and Sensitivity Analysis",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "ANSYS Mastery & Career Track",
    popular: PopularPlan.NO,
    price: 21999,
    description: "Master ANSYS simulations with real-world projects, mentorship, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Comprehensive ANSYS Simulation Training",
      "Real-World Capstone Project",
      "Industry-Standard Workflow for FEA & CFD",
      "1:1 Mentorship & Career Support",
      "Job Assistance and Placement Guarantee*",
    ],
  },
];

export const ANSYSPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        ANSYS for FEA & CFD Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your ANSYS Learning Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Whether you're a beginner or aiming to master FEA & CFD, we have the right plan for you.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20ANSYS%20for%20FEA%20%26%20CFD%20course%20plans."
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
