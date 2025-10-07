"use client";

import { Mail, Smartphone, Search, BarChart, Layout } from "lucide-react"; // Using lucide-react for icons
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function DigitalMarketingServices() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Mail className="h-6 w-6 text-red-500" />}
        title="SEO Optimization"
        description="Our SEO services are designed to increase visibility and drive organic traffic to your website through well-researched strategies and optimized content."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Smartphone className="h-6 w-6 text-green-500" />}
        title="Social Media Marketing"
        description="Our social media marketing service builds a strong online presence on platforms like Facebook, Instagram, and LinkedIn to enhance your brand’s reach and customer engagement."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Search className="h-6 w-6 text-blue-500" />}
        title="Email Marketing"
        description="Reach your audience directly through personalized email campaigns designed to increase conversions and build customer loyalty."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<BarChart className="h-6 w-6 text-yellow-500" />}
        title="Paid Advertising"
        description="Our paid advertising services create targeted ad campaigns on platforms like Google Ads to drive high-quality traffic and maximize ROI."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Layout className="h-6 w-6 text-purple-500" />}
        title="Content Marketing"
        description="We create high-quality, engaging content that attracts, informs, and retains your audience, helping you build a credible online brand presence."
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
    </li>
  );
};
