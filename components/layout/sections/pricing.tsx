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
    title: "Basic Website",
    popular: 0,
    price: 7000,
    description:
      "Ideal for small businesses looking to establish a strong online presence with a simple, professional website.",
    buttonText: "Get Started",
    benefitList: [
      "1 page",
      "Basic design",
      "Responsive layout",
      "Basic SEO",
      "Email support",
    ],
  },
  {
    title: "Mobile App",
    popular: 1,
    price: 10000,
    description:
      "A feature-packed mobile app tailored to your business, designed for both Android and iOS platforms.",
    buttonText: "Start Your Project",
    benefitList: [
      "Custom app design",
      "Cross-platform compatibility",
      "User authentication",
      "Push notifications",
      "App analytics",
    ],
  },
  {
    title: "E-Commerce Website",
    popular: 0,
    price: 30000,
    description:
      "Fully functional online store with integrated payment systems, shopping cart, and product management features.",
    buttonText: "Contact Us",
    benefitList: [
      "Product catalog",
      "Integrated payment gateway",
      "Order management",
      "Customer accounts",
      "Advanced SEO",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Affordable and Transparent Pricing
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the plan that fits your business needs.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
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
                  variant={popular === PopularPlan?.YES ? "default" : "secondary"}
                  className="w-full"
                >
                   <Link
                  href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20digital%20services."
                  target="_blank"
                  rel="noopener noreferrer"
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
