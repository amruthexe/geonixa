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
    title: "CNC Programming Essentials",
    popular: PopularPlan.NO,
    price: 6999,
    description: "Learn the basics of CNC programming, from G-codes to machine setup.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to CNC Programming",
      "Basic G-Codes and M-Codes",
      "Simple Machining Operations",
      "Machine Setup and Calibration",
      "Certificate of Completion",
    ],
  },
  {
    title: "CNC Advanced Programming",
    popular: PopularPlan.YES,
    price: 12999,
    description: "In-depth course with advanced CNC programming techniques for precision machining.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced G-Codes and M-Codes",
      "Multi-Axis Machining Programming",
      "Tool Path Optimization",
      "Troubleshooting CNC Programs",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "CNC Mastery & Career Track",
    popular: PopularPlan.NO,
    price: 17999,
    description: "Become a CNC expert with real-world projects, mentorship, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "End-to-End CNC Project Management",
      "Complex Part Programming and Optimization",
      "Industry Standards and Best Practices",
      "Capstone Project + Mentorship",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const CNCPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        CNC Programming Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your CNC Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Whether you're just getting started or looking to advance, we have a course for you.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20CNC%20Programming%20course%20plans."
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
