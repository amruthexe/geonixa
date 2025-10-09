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
    title: "Cloud Basics",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Perfect for beginners to understand cloud concepts and architectures using real-world examples.",
    buttonText: "Start Learning",
    benefitList: [
      "IaaS / PaaS / SaaS Explained",
      "Virtualization & Containers",
      "Hands-on with AWS Free Tier",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "Cloud Pro Pack",
    popular: PopularPlan.YES,
    price: 1499,
    description:
      "Master core cloud platforms (AWS, Azure, GCP) with guided labs, DevOps tools, and real use-cases.",
    buttonText: "Enroll Now",
    benefitList: [
      "AWS, Azure & GCP Hands-on",
      "Docker, CI/CD, IaC Projects",
      "GitHub Portfolio Setup",
      "Live Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "Cloud Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Complete job-ready program with 1:1 mentorship, deployment projects, mock interviews, and placement help.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Full DevOps + Monitoring Tools",
      "Kubernetes, Terraform",
      "Capstone App Deployment",
      "Placement Assistance",
      "1:1 Career Guidance",
    ],
  },
];

export const CloudComputingPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Cloud Computing Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Cloud Skills. Build a Scalable Career.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that suits your learning level and professional goals.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={`transition-transform duration-300 ${
                popular === PopularPlan.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : "hover:-translate-y-1"
              }`}
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>
                <CardDescription className="pb-4">
                  {description}
                </CardDescription>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">₹{price}</span>
                  <span className="text-muted-foreground text-sm">/one-time</span>
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20Cloud%20Computing%20course%20plans."
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
