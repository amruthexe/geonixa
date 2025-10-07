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
    title: "Submit Your Application",
    description:
      "Fill out the form with your details and upload your resume to apply for the job position.",
  },
  {
    number: "02",
    title: "Initial Screening",
    description:
      "Our recruitment team will review your application and shortlist candidates for the next round.",
  },
  {
    number: "03",
    title: "Interview Process",
    description:
      "Shortlisted candidates will be invited for an interview, either in-person or via video call.",
  },
  {
    number: "04",
    title: "Final Selection",
    description:
      "Our hiring managers will evaluate all candidates, and the final selection will be made based on the interview results.",
  },
  {
    number: "05",
    title: "Offer & Onboarding",
    description:
      "Once selected, you’ll receive a job offer. Upon acceptance, we’ll start the onboarding process to get you ready for your new role.",
  },
];

export const StepsSectionCareers = () => {
  return (
    <section id="steps" className="py-12 sm:py-24 bg-white dark:bg-background text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary tracking-wider mb-2">Our Hiring Process</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team and Make an Impact 🚀
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Follow these simple steps to apply and become a part of our dynamic team. We are excited to meet passionate professionals!
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
