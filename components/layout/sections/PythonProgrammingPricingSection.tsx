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
    title: "Python Basics Starter",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Perfect for beginners to learn Python fundamentals, syntax, and basic problem-solving.",
    buttonText: "Start Learning",
    benefitList: [
      "Intro to Python & Setup",
      "Variables, Data Types, Operators",
      "Control Flow & Loops",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "Python Pro Developer",
    popular: PopularPlan.YES,
    price: 1299,
    description:
      "Build real-world skills with OOP, data structures, file handling, and beginner projects.",
    buttonText: "Enroll Now",
    benefitList: [
      "OOP & File Handling",
      "Mini Projects & GitHub Showcase",
      "Data Structures & Functions",
      "Live Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "Python Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Master Python for data science, automation, and deployment with placement support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "NumPy, Pandas, Matplotlib",
      "APIs, Deployment & Git",
      "Capstone Project & Resume Review",
      "Placement Assistance",
      "1:1 Career Counselling",
    ],
  },
];

export const PythonProgrammingPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Python Programming Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Python. Build Projects. Get Hired.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that suits your learning journey and career vision.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Python%20Programming%20course%20plans."
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
