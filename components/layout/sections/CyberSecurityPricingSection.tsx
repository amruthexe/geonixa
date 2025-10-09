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
    title: "Cyber Security Essentials",
    popular: PopularPlan.NO,
    price: 599,
    description:
      "Great for absolute beginners looking to explore the fundamentals of cyber security.",
    buttonText: "Get Started",
    benefitList: [
      "Core Concepts & CIA Triad",
      "Common Threats & Attacks",
      "Linux Basics + Labs",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "Cyber Security Pro Pack",
    popular: PopularPlan.YES,
    price: 1299,
    description:
      "Comprehensive practical training in network security, ethical hacking tools, and web app vulnerabilities.",
    buttonText: "Enroll Now",
    benefitList: [
      "Wireshark, Metasploit, Burp Suite",
      "Live Projects & Vulnerability Scans",
      "Resume & LinkedIn Review",
      "Live Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "Cyber Security Career Track",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Industry-ready program with job assistance, 1:1 mentoring, and SOC/SIEM tool training.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "SOC & SIEM Tools (Splunk/ELK)",
      "Mock Interviews + Soft Skills",
      "Capstone Project & GitHub Showcase",
      "Placement Assistance",
      "1:1 Career Counselling",
    ],
  },
];

export const CyberSecurityPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Cyber Security Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn Securely. Train Professionally.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Select a plan that aligns with your career goals.
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
                    href="https://wa.me/+919999999999?text=I%20am%20interested%20in%20your%20Cyber%20Security%20course%20plans."
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
