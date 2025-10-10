'use client';

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

const plans = [
  {
    title: "Frontend Foundations",
    popular: false,
    price: 599,
    description:
      "Start from zero and master HTML, CSS, and JavaScript to build responsive websites.",
    buttonText: "Start Learning",
    benefitList: [
      "HTML & CSS Crash Course",
      "JavaScript Basics",
      "Responsive Design Projects",
      "Certificate of Completion",
      "Email Support",
    ],
  },
  {
    title: "MERN Stack Developer",
    popular: true,
    price: 1499,
    description:
      "Become a full stack developer with React, Node.js, MongoDB & real-world apps.",
    buttonText: "Enroll Now",
    benefitList: [
      "React + Express.js + MongoDB",
      "REST APIs & Authentication",
      "Live Projects & GitHub Showcase",
      "Mentor Support",
      "Internship Certificate",
    ],
  },
  {
    title: "Career Accelerator Pack",
    popular: false,
    price: 3499,
    description:
      "Includes full stack training, deployment, mock interviews, and placement assistance.",
    buttonText: "Talk to Mentor",
    benefitList: [
      "Capstone Project & Hosting",
      "Resume & LinkedIn Review",
      "Placement Support",
      "Git & Version Control",
      "1:1 Career Counselling",
    ],
  },
];

export default function FullStackWebPricingSection() {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg font-bold text-primary text-center mb-2 tracking-wider">
        Full Stack Web Development Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Learn to Build. Launch Your Career.
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose a plan that matches your level and goal — from beginner to job-ready developer.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            className={
              plan.popular
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="pb-2">{plan.title}</CardTitle>
              <CardDescription className="pb-4">{plan.description}</CardDescription>
              <div>
                <span className="text-3xl font-bold">₹{plan.price}</span>
                <span className="text-muted-foreground"> /one-time</span>
              </div>
            </CardHeader>

            <CardContent className="flex">
              <div className="space-y-4">
                {plan.benefitList.map((benefit) => (
                  <span key={benefit} className="flex">
                    <Check className="text-primary mr-2" />
                    <h3>{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button
                variant={plan.popular ? "default" : "secondary"}
                className="w-full"
              >
                <Link
                  href="https://wa.me/+919663216581?text=I%20am%20interested%20in%20your%20Full%20Stack%20Web%20Development%20course%20plans."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full"
                >
                  {plan.buttonText}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
