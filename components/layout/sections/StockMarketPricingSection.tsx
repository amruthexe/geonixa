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
    title: "Stock Market Basics",
    popular: PopularPlan.NO,
    price: 999,
    description:
      "Learn the basics of the stock market, investing, and how to analyze stocks for better decisions.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Stock Market",
      "Understanding Stocks & Bonds",
      "Basic Chart Reading & Technical Analysis",
      "Getting Started with Trading",
      "Certificate of Completion",
    ],
  },
  {
    title: "Stock Market Pro",
    popular: PopularPlan.YES,
    price: 1999,
    description:
      "Comprehensive course with advanced techniques, portfolio management, and trading strategies.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Technical & Fundamental Analysis",
      "Portfolio Management & Risk Strategies",
      "Stock Market Simulation",
      "Personalized Mentorship",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Stock Market Mastery",
    popular: PopularPlan.NO,
    price: 3999,
    description:
      "Become a professional stock trader with real-world projects, live sessions, and job assistance.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Comprehensive Stock Market Strategies",
      "Live Trading Sessions & Real-World Projects",
      "Job Assistance & Placement Support",
      "1:1 Mentorship with Experts",
      "Access to Premium Tools & Resources",
    ],
  },
];

export const StockMarketPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Stock Market Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your Stock Market Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Start with the basics and work your way to mastering stock trading.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Stock%20Market%20course%20plans."
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
