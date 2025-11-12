"use client";

import React, { useRef } from "react";
import {
  Megaphone,
  Search,
  Users,
  BarChart,
  BriefcaseBusiness,
  MousePointerClick,
  Rocket,
  CalendarDays,
  DollarSign,
  ArrowRight,
  Award,
  ClipboardCheck,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const stages = [
  {
    title: "P1: Foundation Launchpad",
    description:
      "Understand digital marketing basics, buyer personas, and marketing funnels.",
    icon: <Megaphone className="w-6 h-6" />,
  },
  {
    title: "P2: Organic Growth",
    description:
      "Master SEO, content strategy, and social media marketing for brand visibility.",
    icon: <Search className="w-6 h-6" />,
  },
  {
    title: "P3: Performance Marketing",
    description:
      "Hands-on with Google Ads, Meta Ads & campaign optimization for ROI.",
    icon: <MousePointerClick className="w-6 h-6" />,
  },
  {
    title: "P4: Data & Analytics",
    description:
      "Use Google Analytics, Tag Manager, and dashboards to measure performance.",
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    title: "P5: Freelancing & Placement",
    description:
      "Get real campaign experience, client interaction training, and placement support.",
    icon: <BriefcaseBusiness className="w-6 h-6" />,
  },
];

const coreOutcomes = [
  { icon: Rocket, text: "Run real ad campaigns" },
  { icon: Award, text: "Google & Meta certifications" },
  { icon: ClipboardCheck, text: "Guaranteed internship support" },
];

const stats = [
  { value: "5 Months", label: "To Job Readiness", icon: CalendarDays },
  { value: "100%", label: "Placement Support", icon: Award },
  { value: "₹5.5L+", label: "Avg. Starting Salary", icon: DollarSign },
];

export default function DigitalMarketingFormulaOverview(): JSX.Element {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}
    >
      <div
        ref={ref}
        className="max-w-7xl mx-auto bg-white p-6 md:p-10 lg:p-14 rounded-2xl shadow-xl border border-orange-100"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center pb-12 mb-12 border-b border-orange-100"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            Accelerate Your Career with the{" "}
            <span className="text-orange-700">Geonixa Formula</span>
          </h1>

          <p className="mt-6 text-2xl font-semibold text-gray-700 flex items-center justify-center">
            <span className="text-orange-700 font-extrabold mr-2">Goal:</span>{" "}
            From Beginner{" "}
            <ArrowRight className="w-6 h-6 mx-2 text-orange-500" />{" "}
            <strong>Digital Marketer in 5 Months</strong>
          </p>

          {/* Core Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-6 bg-orange-50 rounded-xl border border-orange-200">
            {coreOutcomes.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="flex items-center space-x-3"
              >
                <o.icon className="w-8 h-8 text-orange-700" strokeWidth={2.5} />
                <p className="text-lg font-semibold text-gray-800">{o.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
                className="p-6 text-center rounded-xl bg-white border border-orange-100 shadow-md"
              >
                <s.icon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <p className="text-4xl font-extrabold text-gray-900">{s.value}</p>
                <p className="mt-1 text-gray-600 font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="px-10 py-4 bg-orange-700 text-white rounded-lg text-xl font-bold shadow-lg shadow-orange-700/40 hover:bg-orange-600 transition duration-300 transform hover:scale-[1.03]"
            >
              Enroll Now & Grow Your Digital Career!
            </motion.button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="pt-8">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-3xl font-extrabold text-gray-900 mb-10 text-center"
          >
            The 5P Digital Marketing Formula
          </motion.h2>

          {/* Timeline bar */}
          <div className="relative">
            <div className="absolute left-0 right-0 top-[28px] h-0.5 bg-gray-200 hidden lg:block mx-auto max-w-4xl">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{
                  duration: 1.5,
                  delay: 2.0,
                  ease: "easeInOut",
                }}
                className="h-full bg-orange-500 origin-left"
              />
            </div>

            {/* Stages */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 relative z-10">
              {stages.map((stage, i) => (
                <TimelineCard
                  key={i}
                  title={stage.title}
                  description={stage.description}
                  icon={stage.icon}
                  index={i}
                  isLast={i === stages.length - 1}
                  delay={0.15 * i + 2.2}
                />
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 3.0 }}
            className="mt-16 text-center p-6 bg-orange-700 rounded-xl shadow-xl shadow-orange-700/30"
          >
            <p className="text-xl font-extrabold text-white flex items-center justify-center mb-4">
              <span className="text-2xl mr-3 font-light">&rarr;</span>
              Build Campaigns → Analyze Results → Get Placed
            </p>
            <button className="px-8 py-3 bg-white text-orange-700 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300">
              Join the Next Batch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --- Reusable TimelineCard --- */
interface TimelineCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isLast: boolean;
  delay: number;
}

function TimelineCard({
  title,
  description,
  icon,
  isLast,
  delay,
}: TimelineCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-row lg:flex-col items-start lg:items-center flex-1 group"
    >
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-[-20px] w-1 bg-gray-200 lg:hidden rounded-full"></div>
      )}

      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-orange-700 text-white shadow-lg z-20">
        {icon}
      </div>

      <div className="mt-0 ml-4 lg:mt-4 lg:ml-0">
        <h4 className="font-bold text-lg text-gray-900 group-hover:text-orange-700 transition duration-300">
          {title}
        </h4>
        <p className="mt-1 text-sm text-gray-600 max-w-xs lg:max-w-none">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
