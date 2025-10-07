"use client";

import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="Custom Development"
        description="Our custom development service builds websites and applications uniquely tailored to meet specific business goals. We create responsive, scalable, and efficient solutions designed to provide a competitive edge with features."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="API Development"
        description="We specialize in developing secure, well-documented APIs that facilitate seamless data integration across multiple platforms and applications. Our API solutions enable robust connectivity between services."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="UI/UX Design"
        description="Our UI/UX design team focuses on crafting user experiences that are visually appealing, intuitive, and engaging. We prioritize usability and aesthetic appeal to deliver interfaces that keep users coming back and streamline customer journeys."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="ChatBot"
        description="Our chatbot solutions provide instant customer support and enhance user interaction on your website. From answering frequently asked questions to assisting with sales, our custom chatbots are designed to improve engagement, increase conversion rates, and save valuable time."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-6 w-6 text-black dark:text-neutral-400" />}
        title="Cloud Integration"
        description="We help businesses leverage cloud technology for scalability, security, and flexibility. Our cloud services allow you to manage your data and operations from anywhere, improving efficiency and reducing infrastructure costs by offering streamlined, cloud-based solutions."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <>
    
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
     
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-400">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] md:text-base/[1.375rem] text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li></>
  );
};


