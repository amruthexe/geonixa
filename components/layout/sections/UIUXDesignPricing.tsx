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
    title: "UI/UX Starter",
    popular: PopularPlan.NO,
    price: 499,
    description: "Perfect for beginners to learn design thinking and Figma basics.",
    buttonText: "Start Learning",
    benefitList: [
      "UI/UX Fundamentals",
      "Figma Hands-on Practice",
      "Wireframes & Prototypes",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "UI/UX Pro Designer",
    popular: PopularPlan.YES,
    price: 1299,
    description: "Intermediate learners can level up with live projects and portfolio creation.",
    buttonText: "Enroll Now",
    benefitList: [
      "Live Project Reviews",
      "Interactive Prototyping",
      "Design System Building",
      "Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "UI/UX Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description: "Master UI/UX end-to-end — from research to handoff, with placement help.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Full Portfolio + Dribbble Setup",
      "Capstone Project & Feedback",
      "Career Counseling + Resume Review",
      "Placement Assistance",
      "1:1 Design Mentorship",
    ],
  },
];

export const UIUXDesignPricing = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        UI/UX Design Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn to Design. Build Real Portfolios.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Pick the plan that suits your creative journey and career goals.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(({ title, popular, price, description, buttonText, benefitList }) => (
          <Card
            key={title}
            className={
              popular === PopularPlan.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{title}</CardTitle>
              <CardDescription className="pb-4">{description}</CardDescription>
              <div>
                <span className="text-3xl font-bold">₹{price}</span>
                <span className="text-muted-foreground"> / one-time</span>
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
                  href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20UI%2FUX%20Design%20course%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  {buttonText}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
