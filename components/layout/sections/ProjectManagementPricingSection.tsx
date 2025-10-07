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
    title: "Project Management Essentials",
    popular: PopularPlan.NO,
    price: 799,
    description:
      "Perfect for beginners to learn the basics of project planning, scheduling, and execution.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Project Management",
      "Planning & Scheduling Techniques",
      "Time Management Strategies",
      "Project Execution & Monitoring",
      "Certification Included",
    ],
  },
  {
    title: "Project Management Pro",
    popular: PopularPlan.YES,
    price: 1499,
    description:
      "Comprehensive course with real-world projects, risk management, and advanced project management techniques.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Project Management Strategies",
      "Risk & Quality Management",
      "Resource & Budget Allocation",
      "Agile & Scrum Methodologies",
      "Resume & LinkedIn Review",
    ],
  },
  {
    title: "Project Management Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Prepare for a career in project management with mentorship, capstone projects, and job assistance.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Capstone Project (Real-world Application)",
      "1:1 Mentorship & Career Coaching",
      "Job Portal Access",
      "Placement Assistance + Certification",
      "Industry Networking Opportunities",
    ],
  },
];

export const ProjectManagementPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Project Management Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your Project Management Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to career-ready, we have a package for every level.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Project%20Management%20course%20plans."
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
