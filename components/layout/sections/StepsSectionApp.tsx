"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react"; // Using lucide-react for icons

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const steps: StepProps[] = [
  {
    number: "01",
    title: "Ideation",
    description: "Let us conduct product discovery and product research.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create an intuitive user interface and experience.",
  },
  {
    number: "03",
    title: "Development",
    description: "Build a robust and scalable solution for your business.",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description: "Ensure the product meets the highest quality standards.",
  },
  {
    number: "05",
    title: "Maintenance & Support",
    description: "We continue to support and maintain your product post-launch.",
  },
];

export const StepsSectionApp = () => {
  return (
    <section id="steps" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary tracking-wider mb-2">Our Proven Process</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leverage our App development process 🚀
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We’ve delivered over 2500 projects – we know what it takes to execute a seamless and optimized web-based software development process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map(({ number, title, description }, index) => (
            <Card
              key={number}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name="Target"
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    {number}
                  </span>
                </div>

                <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
