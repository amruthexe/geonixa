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
    title: "Store Setup & Planning",
    description: "We work with you to understand your business needs and set up your e-commerce store to provide an optimal user experience.",
  },
  {
    number: "02",
    title: "Theme Customization",
    description: "Design a custom theme tailored to your brand identity, creating a visually appealing and functional online store.",
  },
  {
    number: "03",
    title: "Product Catalog Integration",
    description: "Add your products seamlessly, including their details, images, pricing, and inventory management to create a smooth shopping experience.",
  },
  {
    number: "04",
    title: "Payment Gateway Integration",
    description: "Set up secure payment gateways, offering various payment options to customers for a seamless checkout experience.",
  },
  {
    number: "05",
    title: "Launch & Marketing",
    description: "Once the store is live, we help you market it through various channels to attract customers and drive sales.",
  },
];

export const StepsSectionECommerce = () => {
  return (
    <section id="steps" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary tracking-wider mb-2">Our Proven E-commerce Process</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leverage our E-commerce Development Process 🚀
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            With over 2500 e-commerce projects delivered, we know what it takes to create seamless, scalable, and successful online stores.
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
