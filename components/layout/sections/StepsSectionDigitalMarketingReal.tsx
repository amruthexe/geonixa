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
    title: "Consultation & Planning",
    description:
      "We begin by understanding your business goals and crafting a tailored digital marketing strategy that aligns with your brand’s objectives.",
  },
  {
    number: "02",
    title: "SEO Strategy",
    description:
      "Our SEO experts optimize your website and content to ensure higher visibility on search engines and drive organic traffic to your site.",
  },
  {
    number: "03",
    title: "Content Creation",
    description:
      "We create high-quality, engaging content designed to attract, educate, and convert your audience, building trust and authority for your brand.",
  },
  {
    number: "04",
    title: "Paid Campaigns & Advertising",
    description:
      "Our team runs targeted paid campaigns across various platforms like Google Ads and Facebook to drive high-quality traffic and maximize ROI.",
  },
  {
    number: "05",
    title: "Social Media Engagement",
    description:
      "We build your presence on social platforms like Facebook, Instagram, and LinkedIn, engaging with your audience and increasing brand awareness.",
  },
  {
    number: "06",
    title: "Analytics & Reporting",
    description:
      "We track campaign performance using analytics tools, providing detailed reports and optimizing strategies for continuous improvement.",
  },
];

export const StepsSectionDigitalMarketing = () => {
  return (
    <section id="steps" className="py-12 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-primary tracking-wider mb-2">Our Proven Digital Marketing Process</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Leverage our Digital Marketing Process 🚀
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            With over 2500 successful campaigns, we know what it takes to drive results and boost your online presence. Let us help you grow!
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
