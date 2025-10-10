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
    title: "IoT Essentials",
    popular: PopularPlan.NO,
    price: 2499,
    description: "Perfect for beginners to get started with IoT concepts, sensors, and microcontroller programming.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to IoT & Sensors",
      "Basic Microcontroller Programming",
      "IoT Communication Protocols",
      "Basic Cloud Integration",
      "Certificate of Completion",
    ],
  },
  {
    title: "IoT Pro",
    popular: PopularPlan.YES,
    price: 4999,
    description: "Comprehensive course on advanced IoT systems, including smart devices and cloud-based applications.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced IoT System Design",
      "Cloud Integration (AWS, Azure)",
      "Real-Time Data Analytics",
      "IoT Security Fundamentals",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "IoT Mastery",
    popular: PopularPlan.NO,
    price: 7999,
    description: "Master IoT by building real-world projects, advanced data analytics, and full-stack IoT solutions.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "End-to-End IoT System Design",
      "Advanced Data Analytics with IoT",
      "Real-World IoT Projects",
      "Capstone Project & Mentorship",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const IOTPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        IoT Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your IoT Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to career-ready, select the plan that fits your IoT learning goals.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20IoT%20course%20plans."
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
