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
    title: "Starter App Package",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Perfect for individuals or startups looking to launch a basic mobile app with core features.",
    buttonText: "Get Started",
    benefitList: [
      "Single platform (Android)",
      "Basic UI design",
      "Splash screen",
      "Form submission feature",
      "Email support",
    ],
  },
  {
    title: "Professional App Package",
    popular: PopularPlan.YES,
    price: 10000,
    description:
      "Best suited for growing businesses. Cross-platform app with essential user features and integrations.",
    buttonText: "Start Your Project",
    benefitList: [
      "Android + iOS (Flutter)",
      "Custom UI design",
      "User login/signup",
      "Push notifications",
      "Basic admin panel",
    ],
  },
  {
    title: "Enterprise App Package",
    popular: PopularPlan.NO,
    price: 25000,
    description:
      "Advanced mobile app solution with full-stack integration, analytics, and scalable infrastructure.",
    buttonText: "Contact Us",
    benefitList: [
      "Custom backend (Firebase/API)",
      "Real-time database",
      "Admin dashboard",
      "Analytics & crash reports",
      "Payment gateway integration",
    ],
  },
];

export const AppPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        App Development Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Transparent and Affordable Plans
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a package that suits your app vision and scale.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20App%20Development%20packages."
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
