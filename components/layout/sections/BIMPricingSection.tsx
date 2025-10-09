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
    title: "BIM Essentials",
    popular: PopularPlan.NO,
    price: 5999,
    description: "Learn the fundamentals of Building Information Modeling using industry-leading tools.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to BIM and its benefits",
      "Revit Basics for 3D Modeling",
      "BIM Software Overview (AutoCAD, Navisworks)",
      "Understanding Building Design Workflows",
      "Certificate of Completion",
    ],
  },
  {
    title: "BIM Pro",
    popular: PopularPlan.YES,
    price: 12999,
    description: "A comprehensive course that covers advanced BIM techniques and project management integration.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Revit and BIM 360 Techniques",
      "Project Coordination and Collaboration",
      "Clash Detection and Resolution with Navisworks",
      "Cloud-Based BIM Collaboration",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "BIM Mastery",
    popular: PopularPlan.NO,
    price: 18999,
    description: "Master BIM and integrate it into real-world projects with career support and mentorship.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "End-to-End BIM Project Lifecycle Management",
      "Advanced Clash Detection & Resolution",
      "Cloud BIM Tools (BIM 360, Azure, AWS IoT)",
      "Capstone Project + Mentorship",
      "1:1 Career Support & Placement Assistance",
    ],
  },
];

export const BIMPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        BIM Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your BIM Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to expert, we have a course that fits your learning needs.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20BIM%20course%20plans."
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
