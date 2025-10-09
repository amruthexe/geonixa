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
    title: "Power BI Essentials",
    popular: PopularPlan.NO,
    price: 599,
    description: "Perfect for beginners to start learning Power BI for data visualization.",
    buttonText: "Start Learning",
    benefitList: [
      "Power BI Basics",
      "Creating Simple Visuals",
      "Data Import & Transformation",
      "Interactive Dashboards",
      "Certificate Included",
    ],
  },
  {
    title: "Tableau Pro Pack",
    popular: PopularPlan.YES,
    price: 1199,
    description: "Advanced learning for creating complex visualizations, dashboards, and reports.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Tableau Visuals",
      "Calculated Fields & Parameters",
      "Interactive Dashboards",
      "Live Project Work",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Data Visualization Career Track",
    popular: PopularPlan.NO,
    price: 2499,
    description: "Become job-ready with capstone projects, mentorship, and career support.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Advanced Power BI & Tableau Techniques",
      "Capstone Projects",
      "1:1 Mentorship",
      "Job Assistance",
      "Placement Guarantee*",
    ],
  },
];

export const DataVisualizationPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Data Visualization Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Master Data Visualization with Power BI & Tableau
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that fits your learning path from beginner to career-ready.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20Data%20Visualization%20course%20plans."
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
