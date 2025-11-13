// components/ProgramHeroCourse.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import { Cpu, Rocket, TrendingUp, BadgeCheck, Users } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function ProgramHeroCourse(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.95, 0.9]);

  return (
    <section
      ref={ref}
      className={`${poppins.className} relative min-h-[70vh] flex items-center justify-center py-20 px-6 bg-white`}
    >
      {/* decorative background shapes */}
      <div className="absolute -left-24 -top-24 w-72 h-72 rounded-full bg-orange-100/40 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-amber-100/30 blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl w-full">
        {/* Header with parallax */}
        <motion.header style={{ y, opacity }} className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900">
            <span className="text-orange-700">GEONIXA</span>
          </h1>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            2-Months Training & Internship Program
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            AI-Powered Learning · Project-Based Training · Career Growth Guaranteed
          </p>

          <div className="mx-auto mt-6 w-20 h-1.5 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full" />

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20the%202-month%20program"
              target="_blank"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-orange-700 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
            >
              Enroll Now
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>

            <Link
              href="#curriculum"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white border border-gray-100 text-gray-800 font-medium hover:bg-orange-50 transition"
            >
              View Curriculum
            </Link>
          </div>
        </motion.header>

        {/* Features cards — staggered horizontal reveal */}
        <main className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <FeatureCard
              Icon={Cpu}
              title="AI-Powered"
              desc="Adaptive learning paths and AI study assistants to speed up mastery."
              delay={0.1}
            />
            <FeatureCard
              Icon={Rocket}
              title="Project-Based"
              desc="Build real deliverables — live projects you can show recruiters."
              delay={0.18}
            />
            <FeatureCard
              Icon={TrendingUp}
              title="Career Growth"
              desc="Placement support, interview prep and recruiter introductions."
              delay={0.26}
            />
          </div>

          {/* secondary row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <FeatureCard
              Icon={BadgeCheck}
              title="Certification"
              desc="Industry aligned certificates to boost your profile."
              compact
              delay={0.34}
            />
            <FeatureCard
              Icon={Users}
              title="Mentorship"
              desc="Weekly mentor sessions and peer reviews to keep you on track."
              compact
              delay={0.42}
            />
          </div>
        </main>

        {/* footer small note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Limited seats • Money-back guarantee for eligible seats within first 7 days.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature Card (Updated for Right-to-Left Slide) ---------------- */

function FeatureCard({
  Icon,
  title,
  desc,
  delay = 0,
  compact = false,
}: {
  Icon: React.ElementType;
  title: string;
  desc: string;
  delay?: number;
  compact?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      // UPDATED: Changed y: 16 to x: 50 for initial position (off-screen right)
      initial={{ opacity: 0, x: 50 }}
      // UPDATED: Changed y: 0 to x: 0 for final position (slide left)
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className={`flex gap-4 items-start rounded-xl p-4 md:p-5 bg-white shadow-sm border border-orange-50 ${
        compact ? "sm:col-span-1" : ""
      }`}
    >
      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-white flex items-center justify-center shadow">
        <Icon className="w-7 h-7" />
      </div>

      <div className="min-w-0">
        <h4 className="text-md font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-600 leading-snug">{desc}</p>
      </div>
    </motion.article>
  );
}