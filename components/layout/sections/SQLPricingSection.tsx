'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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
    title: "SQL Beginner",
    popular: PopularPlan.NO,
    price: 499,
    description:
      "Perfect for beginners who want to learn SQL basics and basic data retrieval techniques.",
    buttonText: "Start Learning",
    benefitList: [
      "Introduction to SQL & Syntax",
      "Basic Data Queries",
      "SELECT, WHERE, ORDER BY",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "SQL Advanced",
    popular: PopularPlan.YES,
    price: 1299,
    description:
      "Advance your SQL skills with complex queries, subqueries, and data manipulation techniques.",
    buttonText: "Enroll Now",
    benefitList: [
      "Advanced Data Queries & Joins",
      "Subqueries & Nested Queries",
      "Stored Procedures & Triggers",
      "GitHub Showcase & Mini Projects",
      "Live Mentor Support",
    ],
  },
  {
    title: "SQL Data Analyst",
    popular: PopularPlan.NO,
    price: 2999,
    description:
      "Master SQL with data analysis, optimization, and complex data manipulation for real-world applications.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Data Analysis with SQL",
      "Indexing & Query Optimization",
      "Normalization & Data Integrity",
      "Capstone Project & Resume Review",
      "Placement Assistance",
    ],
  },
];

export const SQLPricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        SQL Programming Course Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Master SQL. Analyze Data. Unlock Career Opportunities.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that fits your learning goals and career vision.
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
                    href="https://wa.me/+919606995925?text=I%20am%20interested%20in%20the%20SQL%20course%20plans."
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
}
