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
    title: "HR Essentials",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Perfect for beginners to get introduced to the basics of HR functions, recruitment, and employee relations.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to HR Management",
      "Recruitment & Talent Acquisition",
      "Employee Engagement Basics",
      "HR Tools Overview",
      "Certificate Included",
    ],
  },
  {
    title: "HR Pro Pack",
    popular: PopularPlan.YES,
    price: 999,
    description:
      "Comprehensive course with hands-on experience in HR management, legal compliance, and advanced HR functions.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced HR Management Techniques",
      "Performance Management Strategies",
      "Employee Relations & Conflict Resolution",
      "HR Software & Tools",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "HR Career Track",
    popular: PopularPlan.NO,
    price: 1999,
    description:
      "Prepare for a successful HR career with mentorship, capstone projects, job assistance, and more.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Capstone Projects (e.g., Employee Engagement Plan)",
      "1:1 Mentorship & Career Coaching",
      "Job Portal Access",
      "Placement Assistance + Certification",
      "Networking Opportunities",
    ],
  },
];

export const HRPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        HR Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Build a Strong Foundation for Your HR Career
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the plan that fits your HR learning journey.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20HR%20course%20plans."
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
