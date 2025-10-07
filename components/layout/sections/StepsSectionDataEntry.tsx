"use client";

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
    title: "Consultation & Requirement Gathering",
    description:
      "We begin by understanding your data entry requirements and the nature of the data that needs to be processed.",
  },
  {
    number: "02",
    title: "Data Entry & Input",
    description:
      "Accurate and timely data entry into your systems, ensuring the highest level of precision and efficiency.",
  },
  {
    number: "03",
    title: "Data Validation & Cleansing",
    description:
      "Our experts validate and clean the data to ensure that it is accurate, consistent, and free of errors.",
  },
  {
    number: "04",
    title: "Data Conversion",
    description:
      "We convert the data into the desired format (Excel, CSV, database), ensuring compatibility across platforms and systems.",
  },
  {
    number: "05",
    title: "Data Processing & Analysis",
    description:
      "Our data processing services enhance the usability of the data, making it ready for analysis and reporting.",
  },
  {
    number: "06",
    title: "Delivery & Integration",
    description:
      "We deliver the processed data in the desired format, ensuring seamless integration with your existing systems and workflows.",
  },
];

export const StepsSectionDataEntry = () => {
  return (
    <section id="steps" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary tracking-wider mb-2">Our Data Entry Process</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Streamline Your Data with Our Expert Process 🚀
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            With our data entry services, we ensure accurate, timely, and efficient data management to help your business run smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ number, title, description }) => (
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
