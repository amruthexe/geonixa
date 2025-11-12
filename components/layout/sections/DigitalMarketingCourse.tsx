"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Megaphone,
  LineChart,
  MousePointerClick,
  Search,
  Globe,
  BarChart,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export default function DigitalMarketingCourse(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  return (
    <section
      ref={ref}
      className={`${poppins.className} min-h-screen bg-white flex items-center justify-center py-16 px-6`}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.header
          style={{ y: y1, opacity }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            The <span className="text-orange-700">Geonixa</span> Path
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600">
            Digital Marketing Accelerator Formula
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            From Beginner → <strong>Professional Digital Marketer in 5 Months</strong>
          </p>
          <div className="mx-auto mt-6 w-16 h-1.5 bg-orange-500 rounded-full"></div>
        </motion.header>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ModuleCard
            big="1"
            subtitle="SEO Mastery"
            description="Learn On-Page, Off-Page & Technical SEO to rank websites higher in search engines."
            icon={<Search className="text-orange-600 w-6 h-6" />}
            delay={0.15}
          />
          <ModuleCard
            big="2"
            subtitle="Social Media Marketing"
            description="Dominate Instagram, Facebook & LinkedIn ads. Grow brand awareness and engagement."
            icon={<Users className="text-orange-600 w-6 h-6" />}
            delay={0.25}
          />
          <ModuleCard
            big="3"
            subtitle="Google Ads & PPC"
            description="Master paid advertising, keyword research, and conversion optimization for ROI."
            icon={<MousePointerClick className="text-orange-600 w-6 h-6" />}
            delay={0.35}
          />
          <ModuleCard
            big="4"
            subtitle="Content & Email Marketing"
            description="Learn copywriting, storytelling, and building high-converting email campaigns."
            icon={<Megaphone className="text-orange-600 w-6 h-6" />}
            delay={0.45}
          />
        </div>

        {/* Add two more advanced modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          <ModuleCard
            big="5"
            subtitle="Analytics & Conversion Tracking"
            description="Measure, analyze and optimize campaigns using Google Analytics & Tag Manager."
            icon={<LineChart className="text-orange-600 w-6 h-6" />}
            delay={0.55}
          />
          <ModuleCard
            big="6"
            subtitle="Freelancing & Client Projects"
            description="Get real client experience, manage campaigns, and build your digital portfolio."
            icon={<BriefcaseIcon />}
            delay={0.65}
          />
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 bg-white border border-orange-100 shadow-lg rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-5"
        >
          <div>
            <p className="text-xl font-bold text-gray-900">
              5-Month Digital Marketing Program
            </p>
            <p className="text-sm text-gray-600">
              100% Job Assistance | Real Campaigns | Google Certification
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 bg-orange-700 text-white rounded-xl font-semibold hover:bg-orange-600 transition transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Enroll Now
            </button>
            <a
              href="#curriculum"
              className="text-sm font-semibold text-orange-700 hover:text-orange-900 underline underline-offset-4"
            >
              View Curriculum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// A simple fallback briefcase icon
function BriefcaseIcon() {
  return <Rocket className="text-orange-600 w-6 h-6" />;
}

/* ------------------ Module Card ------------------ */
interface ModuleCardProps {
  big: string;
  subtitle: string;
  description: string;
  delay?: number;
  icon?: React.ReactNode;
}

function ModuleCard({
  big,
  subtitle,
  description,
  delay = 0,
  icon,
}: ModuleCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-xl bg-white p-6 pt-10 shadow-md border border-orange-100 hover:shadow-xl transition group"
    >
      <div className="absolute top-2 right-3 text-[6rem] font-extrabold text-orange-50 pointer-events-none leading-none">
        {big}
      </div>

      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-600 rounded-t-xl"></div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="text-xl font-bold text-gray-900">{subtitle}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <div className="flex items-center gap-2 text-orange-700 font-semibold text-sm">
          <BarChart className="w-4 h-4" />
          <span>Industry Focused</span>
        </div>
      </div>
    </motion.article>
  );
}
