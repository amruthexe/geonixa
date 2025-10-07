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
    title: "Data Science Essentials",
    popular: PopularPlan.NO,
    price: 699,
    description: "Perfect for beginners to learn Python, data analysis, and visualizations.",
    buttonText: "Start Learning",
    benefitList: [
      "Python, Numpy, Pandas",
      "Matplotlib, Seaborn Basics",
      "Intro to ML",
      "Certificate Included",
      "Community Support",
    ],
  },
  {
    title: "Data Science Pro",
    popular: PopularPlan.YES,
    price: 1499,
    description: "Hands-on ML, real datasets, feature engineering, model deployment.",
    buttonText: "Enroll Now",
    benefitList: [
      "Machine Learning & Sklearn",
      "Real-time Projects",
      "GitHub Projects",
      "Resume + LinkedIn Review",
      "Internship Certificate",
    ],
  },
  {
    title: "Data Science Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description: "Become job-ready with capstone projects, job assistance, and advanced tools.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Advanced ML + Deep Learning",
      "Capstone + Mock Interviews",
      "1:1 Mentorship & Career Calls",
      "Job Portal Access",
      "Placement Guarantee*",
    ],
  },
];

export const DataSciencePricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Data Science Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Upskill with Data. Lead with Insight.
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that fits your journey from beginner to career-ready.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Data%20Science%20course%20plans."
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
