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
    title: "Embedded Systems Essentials",
    popular: PopularPlan.NO,
    price: 1499,
    description:
      "Perfect for beginners to get started with embedded systems, microcontrollers, and IoT basics.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Embedded Systems",
      "Arduino & Raspberry Pi",
      "Basic Embedded C Programming",
      "Project-Based Learning",
      "Certificate of Completion",
    ],
  },
  {
    title: "Embedded Systems Pro",
    popular: PopularPlan.YES,
    price: 2999,
    description:
      "Comprehensive course for learning advanced embedded systems concepts and hands-on experience with real projects.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Embedded Systems Design",
      "Real-Time Operating Systems (RTOS)",
      "Microcontroller Programming (ARM, AVR)",
      "Embedded Linux Systems",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Embedded Systems Mastery",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Master embedded systems with advanced topics, IoT development, and industry-grade project experience.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "IoT Integration with Embedded Systems",
      "Embedded Linux & Device Drivers",
      "Advanced RTOS & Multitasking",
      "Capstone Projects & Industry Collaboration",
      "1:1 Mentorship + Job Assistance",
    ],
  },
];

export const EmbeddedSystemsPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Embedded Systems Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Plan That Fits Your Embedded Systems Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to expert, select the right plan to unlock your embedded systems skills.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20Embedded%20Systems%20course%20plans."
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
