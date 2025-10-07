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
    title: "STAAD Pro Essentials",
    popular: PopularPlan.NO,
    price: 7999,
    description: "Perfect for beginners to get started with STAAD Pro and structural design basics.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to STAAD Pro Interface",
      "Basic Structural Modeling",
      "Creating and Modifying Structural Elements",
      "Basic Load Analysis",
      "Certificate of Completion",
    ],
  },
  {
    title: "STAAD Pro Advanced",
    popular: PopularPlan.YES,
    price: 14999,
    description: "Comprehensive course covering advanced STAAD Pro techniques for real-world structural projects.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Structural Analysis",
      "Working with Complex Structures (Steel, Concrete)",
      "Designing Structural Components (Beams, Columns, Slabs)",
      "Clash Detection with Navisworks",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "STAAD Pro Mastery",
    popular: PopularPlan.NO,
    price: 19999,
    description: "Master STAAD Pro with real-world projects, mentorship, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "End-to-End Project Lifecycle Management",
      "Advanced Project Coordination and Collaboration",
      "Capstone Project + Mentorship",
      "BIM Tools Integration (Revit, BIM 360)",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const STAADPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        STAAD Pro Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your STAAD Pro Learning Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From foundational knowledge to advanced project handling, we have a plan that suits your needs.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20STAAD%20Pro%20course%20plans."
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
