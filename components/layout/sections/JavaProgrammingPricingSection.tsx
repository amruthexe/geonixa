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
    title: "Java Fundamentals",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Get started with core Java, syntax, variables, and basic problem-solving techniques.",
    buttonText: "Start Learning",
    benefitList: [
      "Java Setup & Basics",
      "Data Types, Operators",
      "Loops & Conditionals",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "Java Pro Developer",
    popular: PopularPlan.YES,
    price: 1299,
    description:
      "Master Java with OOP, data structures, and build real-world mini-projects.",
    buttonText: "Enroll Now",
    benefitList: [
      "OOP in Java",
      "Mini Projects & GitHub",
      "Collections & Exception Handling",
      "Live Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "Java Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Go full stack with Spring Boot, REST APIs, and deployment. Includes placement support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Spring Boot + MySQL",
      "REST API & Deployment",
      "Capstone Project & Resume Review",
      "Placement Assistance",
      "1:1 Career Counselling",
    ],
  },
];

export const JavaProgrammingPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Java Programming Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Java. Build Apps. Get Hired.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the plan that matches your career goal and experience level.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>
                <CardDescription className="pb-4">
                  {description}
                </CardDescription>
                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20Java%20Programming%20course%20plans."
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
