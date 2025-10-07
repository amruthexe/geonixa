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
    title: "Graphic Design Essentials",
    popular: PopularPlan.NO,
    price: 799,
    description:
      "Perfect for beginners to learn the basics of Canva, graphic design, and visual marketing.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to Canva & Graphic Design",
      "Basic Design Principles",
      "Social Media Post Design",
      "Email Marketing Design",
      "Certification Included",
    ],
  },
  {
    title: "Graphic Design Pro",
    popular: PopularPlan.YES,
    price: 1499,
    description:
      "Comprehensive course with real-world projects, advanced design techniques, and marketing materials creation.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Canva Tools & Techniques",
      "Social Media Ads & Banners",
      "Professional Email Templates",
      "Personalized Branding & Identity",
      "Resume + LinkedIn Review",
    ],
  },
  {
    title: "Graphic Design Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Prepare for a career in graphic design with mentorship, portfolio creation, and job assistance.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Advanced Design Projects (Brochures, Flyers)",
      "Portfolio Creation & Review",
      "1:1 Mentorship & Career Coaching",
      "Job Portal Access",
      "Placement Assistance + Certification",
    ],
  },
];

export const GraphicDesignPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Canva & Graphic Design for Marketing Pricing
      </h2>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Choose the Right Plan for Your Design Journey
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        From beginner to job-ready, we have a plan that suits your needs.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20your%20Canva%20and%20Graphic%20Design%20course%20plans."
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
