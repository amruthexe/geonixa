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
    title: "AutoCAD Essentials",
    popular: PopularPlan.NO,
    price: 4999,
    description: "Perfect for beginners to get started with basic AutoCAD drawing and design.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to AutoCAD Interface",
      "Basic 2D Drawing Techniques",
      "Layer Management",
      "Dimensioning and Annotation",
      "Certificate of Completion",
    ],
  },
  {
    title: "SolidWorks Pro",
    popular: PopularPlan.YES,
    price: 9999,
    description: "Comprehensive course covering advanced SolidWorks modeling, assemblies, and simulations.",
    buttonText: "Enroll Now",
    benefitList: [
      "3D Part Modeling",
      "Assemblies and Motion Studies",
      "Simulation and Stress Analysis",
      "Real-world Projects",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "CAD Mastery",
    popular: PopularPlan.NO,
    price: 14999,
    description: "Master both AutoCAD and SolidWorks with hands-on projects, cloud integration, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Advanced CAD Techniques",
      "Cloud-based CAD Integration",
      "Design for Manufacturing",
      "Capstone Project & Mentorship",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const CADPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        CAD Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your CAD Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Whether you're just getting started or aiming for advanced design skills, we have the right plan for you.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20AutoCAD%20and%20SolidWorks%20course%20plans."
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
