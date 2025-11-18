"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Users",
    title: "40+ Hiring Partners",
    description: "Discover your dream job with personalized career support.",
  },
  {
    icon: "BookOpen",
    title: "50+ Courses",
    description: "Match your goals with the right course.",
  },
  {
    icon: "UserCheck",
    title: "20+ Industry Experts",
    description: "Boost your learning with engaging live classes.",
  },
  {
    icon: "UserPlus",
    title: "25+ Career Experts",
    description: "Get advice on picking the right course.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-16">
      <div className="grid lg:grid-cols-2 place-items-start lg:gap-20">

        {/* LEFT TEXT CONTENT */}
        <div>
          <span className="text-sm font-semibold text-[#eb4917] tracking-wide uppercase">
            Why Choose GeoNixa?
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-[#eb4917] leading-snug">
            What gives us an edge?
          </h2>

          <p className="text-gray-600 text-lg max-w-lg">
            Explore how we bring unmatched value with our diverse offerings that empower
            your learning journey, boost your skills, and help you launch your tech career.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid sm:grid-cols-2 gap-6 w-full">
          {benefitList.map(({ icon, title, description }) => {
            const LucideIcon = (LucideIcons as any)[icon];

            return (
              <Card
                key={title}
                className="rounded-3xl border border-orange-100 bg-white shadow-sm hover:shadow-xl hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 p-4"
              >
                <CardHeader className="flex items-center gap-4 p-0 pb-4">
                  
                  {/* Icon bubble */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-orange-100 text-[#eb4917]">
                    {LucideIcon && <LucideIcon size={22} strokeWidth={2.2} />}
                  </div>

                  <CardTitle className="text-lg font-bold text-gray-900">
                    {title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
