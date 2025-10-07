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
    title: "Starter Website Package",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "A great start for individuals or small businesses to showcase their online presence with a simple, clean design.",
    buttonText: "Get Started",
    benefitList: [
      "1–3 static pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form",
      "WhatsApp integration",
    ],
  },
  {
    title: "Full Stack Website Package",
    popular: PopularPlan.YES,
    price: 9999,
    description:
      "Dynamic website with admin panel, ideal for startups and small enterprises looking for full control.",
    buttonText: "Start Project",
    benefitList: [
      "Frontend + Backend",
      "Admin dashboard",
      "User login/signup",
      "Blog or CMS setup",
      "API integration",
    ],
  },
  {
    title: "E-Commerce Web Package",
    popular: PopularPlan.NO,
    price: 24999,
    description:
      "Complete online store with integrated payment gateways, product management, and secure user flows.",
    buttonText: "Contact Now",
    benefitList: [
      "Product catalog",
      "Cart & checkout flow",
      "Payment integration",
      "Order & inventory panel",
      "Customer login panel",
    ],
  },
];

export const WebPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Web Development Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Transparent Plans for Every Website Need
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the right package to bring your website idea to life.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Web%20Development%20packages."
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
