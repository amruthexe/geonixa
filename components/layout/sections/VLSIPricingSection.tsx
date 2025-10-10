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
    title: "VLSI Essentials",
    popular: PopularPlan.NO,
    price: 1999,
    description: "Perfect for beginners to learn the basics of VLSI, microcontrollers, and digital design.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to VLSI Design",
      "Basic Digital Logic Design",
      "CMOS Technology Overview",
      "Introduction to Microcontrollers",
      "Certificate of Completion",
    ],
  },
  {
    title: "VLSI Pro",
    popular: PopularPlan.YES,
    price: 3999,
    description: "Comprehensive course covering advanced VLSI design, digital logic, and FPGA programming.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Digital Circuit Design",
      "VLSI Design Flow",
      "FPGA Programming",
      "Project-Based Learning",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "VLSI Mastery",
    popular: PopularPlan.NO,
    price: 5999,
    description: "Become an expert with advanced VLSI topics, IoT integration, and real-world project experience.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "IoT Integration with Embedded Systems",
      "Advanced CMOS and VLSI Design",
      "VLSI Testing & Debugging",
      "Capstone Project with Industry Collaboration",
      "1:1 Mentorship + Job Assistance",
    ],
  },
];

export const VLSIPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        VLSI Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose Your VLSI Learning Path
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to expert, pick a plan that fits your VLSI journey.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20VLSI%20course%20plans."
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
