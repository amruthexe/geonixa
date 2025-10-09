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
    title: "Robotics Essentials",
    popular: PopularPlan.NO,
    price: 3999,
    description: "Perfect for beginners to get started with basic robotics concepts and hands-on projects.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Robotics",
      "Basic Robot Components",
      "Arduino & Raspberry Pi Basics",
      "Sensor Integration",
      "Certificate of Completion",
    ],
  },
  {
    title: "Robotics Pro",
    popular: PopularPlan.YES,
    price: 7999,
    description: "A comprehensive course covering advanced robotics systems, sensor integration, and real-time control.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Robot Kinematics",
      "Sensor Fusion & Machine Learning",
      "Simulink for Robotics",
      "Real-Time Data Analytics",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Robotics Mastery",
    popular: PopularPlan.NO,
    price: 12999,
    description: "Master robotics with complex systems, machine learning, cloud integration, and capstone projects.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "End-to-End Robotics System Design",
      "Autonomous Robots and SLAM",
      "Cloud Integration (AWS, Azure)",
      "Capstone Project & Mentorship",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const RoboticsPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Robotics Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your Robotics Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Whether you're just getting started or aiming for advanced robotic systems, we have the right plan for you.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20Robotics%20course%20plans."
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
