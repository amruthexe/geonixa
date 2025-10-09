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
    title: "AI Essentials",
    popular: PopularPlan.NO,
    price: 499,
    description:
      "Perfect for beginners to start exploring the basics of Artificial Intelligence and Data Science.",
    buttonText: "Get Started",
    benefitList: [
      "Python & Data Science Foundations",
      "Intro to AI & ML",
      "Mini Projects",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "AI Pro Pack",
    popular: PopularPlan.YES,
    price: 999,
    description:
      "Comprehensive course covering Machine Learning, Deep Learning, and deployment using real datasets.",
    buttonText: "Join Now",
    benefitList: [
      "Full ML + DL Curriculum",
      "Projects with TensorFlow & PyTorch",
      "NLP & Computer Vision Modules",
      "Resume + LinkedIn Review",
      "Live Mentorship Sessions",
    ],
  },
  {
    title: "AI Career Booster",
    popular: PopularPlan.NO,
    price: 2499,
    description:
      "For serious learners looking to enter the AI industry with end-to-end training, internships, and placement help.",
    buttonText: "Contact Now",
    benefitList: [
      "All Pro Pack Features",
      "Capstone AI Project",
      "Internship Certificate",
      "Placement Assistance",
      "1:1 Mock Interviews",
    ],
  },
];

export const AiPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        AI & ML Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your AI Journey
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to job-ready, we have a package for every level.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground"> /one-time</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20AI%20and%20ML%20course%20packages."
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
