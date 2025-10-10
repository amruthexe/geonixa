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
    title: "Digital Marketing Essentials",
    popular: PopularPlan.NO,
    price: 4999,
    description:
      "Perfect for beginners looking to get started with SEO, SEM, SMM, Email, and Content Marketing.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to SEO, SEM, SMM",
      "Basic Social Media Strategies",
      "Email Campaign Basics",
      "Content Marketing Fundamentals",
      "Certificate Included",
    ],
  },
  {
    title: "Digital Marketing Pro Pack",
    popular: PopularPlan.YES,
    price: 999,
    description:
      "Comprehensive training on advanced digital marketing techniques, including hands-on projects and real-world case studies.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced SEO & SEM Techniques",
      "Real-time Projects & Case Studies",
      "Social Media Campaign Management",
      "Email Marketing Automation",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Digital Marketing Career Track",
    popular: PopularPlan.NO,
    price: 1999,
    description:
      "Become job-ready with capstone projects, career support, and mentorship from industry experts.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Advanced Campaign Management & Analytics",
      "1:1 Mentorship & Career Calls",
      "Capstone Project",
      "Job Portal Access",
      "Placement Assistance + Certification",
    ],
  },
];

export const DigitalMarketingPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Digital Marketing Course Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Upskill with Digital Marketing. Lead with Expertise.
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that fits your learning journey from beginner to career-ready.
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
                    href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20Digital%20Marketing%20course%20plans."
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
