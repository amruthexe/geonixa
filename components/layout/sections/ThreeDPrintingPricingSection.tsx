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
    title: "3D Printing Essentials",
    popular: PopularPlan.NO,
    price: 5999,
    description: "Learn the basics of 3D printing, materials, and software for entry-level projects.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to 3D Printing",
      "Types of 3D Printers and Materials",
      "Basic 3D Modeling for Printing",
      "Understanding G-code",
      "Certificate of Completion",
    ],
  },
  {
    title: "3D Printing Pro",
    popular: PopularPlan.YES,
    price: 12999,
    description: "A deeper dive into 3D printing techniques, including advanced modeling and post-processing.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced 3D Printing Techniques",
      "Detailed Modeling in CAD Software",
      "Material Science for 3D Printing",
      "Post-Processing Methods",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "3D Printing Mastery & Career Track",
    popular: PopularPlan.NO,
    price: 19999,
    description: "Master 3D printing with real-world projects, mentorship, and job placement support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Comprehensive 3D Printing Knowledge",
      "Capstone Project (Create a 3D Printed Object)",
      "Advanced Post-Processing",
      "Industry-Standard Software Tools",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const ThreeDPrintingPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        3D Printing Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your 3D Printing Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Whether you're just starting or looking to master 3D printing, we have a course for you.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%203D%20Printing%20course%20plans."
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
