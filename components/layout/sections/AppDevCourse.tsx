"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Smartphone,
  Zap,
  Server,
  Package,
  Rocket,
  GitBranch,
  ShieldCheck,
  RocketIcon,
} from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], display: "swap" });

interface ModuleCardProps {
  id: string;
  big: string;
  title: string;
  subtitle: string;
  bullets: string[];
  delay?: number;
  icon?: React.ReactNode;
}

export default function AppDevCourse(): JSX.Element {
  return (
    <section className={`${poppins.className} min-h-screen bg-white flex items-center justify-center py-14 px-4`}>
        
      <div className="max-w-6xl w-full">
        
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            The <span className="text-orange-700">Geonixa</span> App Dev Path
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600">
            Cross-Platform Mobile Developer Accelerator
          </h2>

          <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            From college student → job-ready Mobile App Developer in 6 months.
          </p>

          <div className="mx-auto mt-6 w-16 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-700" />
        </motion.header>

        {/* Cards Grid */}
        <main className="rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <ModuleCard
              id="m1"
              big="1"
              title="Mobile Fundamentals"
              subtitle="JS, TS & React Native basics"
              bullets={["JS/TS essentials", "React Native & Expo", "Layout + Flexbox"]}
              delay={0.12}
              icon={<Smartphone size={22} className="text-orange-600" />}
            />

            <ModuleCard
              id="m2"
              big="2"
              title="UI & Animations"
              subtitle="Design systems, Reanimated & Gestures"
              bullets={["Moti / Reanimated", "Gesture handling", "Adaptive UI"]}
              delay={0.22}
              icon={<Zap size={22} className="text-orange-600" />}
            />

            <ModuleCard
              id="m3"
              big="3"
              title="Backend & Sync"
              subtitle="APIs, realtime & offline-first"
              bullets={["REST / GraphQL", "Realtime data", "Sync & Caching"]}
              delay={0.32}
              icon={<Server size={22} className="text-orange-600" />}
            />

            <ModuleCard
              id="m4"
              big="4"
              title="Native Modules & Deploy"
              subtitle="Native bridges, CI/CD & stores"
              bullets={["Native modules", "EAS / Fastlane", "App Store readiness"]}
              delay={0.42}
              icon={<Package size={22} className="text-orange-600" />}
            />

            <ModuleCard
              id="m5"
              big="5"
              title="Performance & QA"
              subtitle="Profiling, testing & observability"
              bullets={["Profiling & optimization", "E2E + unit tests", "Crash reporting"]}
              delay={0.52}
              icon={<GitBranch size={22} className="text-orange-600" />}
            />

            <ModuleCard
              id="m6"
              big="6"
              title="Monetize & Ship"
              subtitle="In-app purchases & analytics"
              bullets={["IAP & Subscriptions", "Analytics", "Growth & release"]}
              delay={0.62}
              icon={<Rocket size={22} className="text-orange-600" />}
            />

            <ModuleCard
  id="m7"
  big="7"
  title="PWA & Publishing"
  subtitle="Progressive Web Apps and store deployment"
  bullets={[
    "Convert web apps into PWAs",
    "Add offline access & install prompts",
    "Publish apps to Play Store & App Store",
  ]}
  delay={0.72}
  icon={<RocketIcon size={22} className="text-orange-600" />}
/>
<ModuleCard
  id="m8"
  big="8"
  title="Advanced Native Integrations"
  subtitle="Bridge React Native with native Android/iOS"
  bullets={[
    "Use native device APIs (camera, sensors)",
    "Integrate push notifications",
    "Write custom native modules",
  ]}
  delay={0.82}
  icon={<Smartphone size={22} className="text-orange-600" />}
/>

          </div>
          

          {/* Footer CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 bg-white rounded-xl shadow-lg border border-orange-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          >
            <div>
              <p className="text-xl text-slate-900 font-extrabold">6-Month App Development Program</p>
              <p className="text-sm text-gray-600 mt-1">Project-based • 100% Job support • Limited seats</p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button className="px-6 py-3 bg-orange-700 text-white rounded-xl text-base font-semibold shadow-md hover:bg-orange-600 transition transform hover:scale-105">
                Apply Now
              </button>
              <a className="text-sm text-orange-700 font-semibold hover:text-orange-900 transition underline-offset-4" href="#curriculum">
                View Curriculum
              </a>
            </div>
          </motion.div>

          {/* Guarantee badge */}
         
        </main>
      </div>
    </section>
  );
}

/* ---------------- Animated Module Card ---------------- */

function ModuleCard({ id, big, title, subtitle, bullets, delay = 0, icon }: ModuleCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative rounded-xl p-6 pt-10 shadow-lg bg-white overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-orange-50"
    >
      {/* Large faint number */}
      <div className="absolute top-3 right-4 text-[5.5rem] font-extrabold text-orange-100 leading-none pointer-events-none select-none">
        {big}
      </div>

      {/* thin gradient strip (visually) */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-orange-700 rounded-t-xl" />

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-md bg-orange-50 flex items-center justify-center">
            {icon ?? <Smartphone size={20} className="text-orange-600" />}
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
            <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="text-xs text-slate-500">Duration: 6 weeks / module</div>
          <div className="text-xs font-semibold text-orange-700">Project Focused</div>
        </div>
      </div>
    </motion.article>
  );
}
