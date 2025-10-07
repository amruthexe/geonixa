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
    title: "DevOps Essentials",
    popular: PopularPlan.NO,
    price: 799,
    description:
      "Get started with DevOps basics, Linux commands, Git, and version control tools.",
    buttonText: "Start Now",
    benefitList: [
      "DevOps Fundamentals",
      "Linux & Command Line",
      "Git & GitHub Hands-on",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "DevOps Pro Track",
    popular: PopularPlan.YES,
    price: 1999,
    description:
      "Master CI/CD, Docker, Jenkins, and real-world pipelines with mentor guidance.",
    buttonText: "Enroll Now",
    benefitList: [
      "Docker, Jenkins, GitHub Actions",
      "Live Mentor Support",
      "Mini Projects & GitHub Showcase",
      "Internship Certificate",
      "Resume Review",
    ],
  },
  {
    title: "DevOps Career Boost",
    popular: PopularPlan.NO,
    price: 3999,
    description:
      "Full stack DevOps program covering cloud, Kubernetes, monitoring, and placement help.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "CI/CD + Kubernetes + Terraform",
      "Capstone Projects",
      "Prometheus, Grafana, ELK Stack",
      "Placement Support",
      "1:1 Career Counselling",
    ],
  },
];

export const DevOpsPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        DevOps Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn DevOps. Deploy Fast. Get Hired.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that suits your DevOps journey and career goals.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20DevOps%20course%20plans."
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
