"use client";
// components/AppCareerOutcomes.tsx
import React, { useEffect } from "react";
import {
  Smartphone,
  Server,
  Cpu,
  Paintbrush2,
  Database,
  DollarSign,
} from "lucide-react";
import { motion, useAnimation, Variants } from "framer-motion";

type Role = {
  id: string;
  title: string;
  icon: React.ReactNode;
  range: [number, number]; // in LPA
  description: string;
};

const roles: Role[] = [
  {
    id: "mobile-engineer",
    title: "Mobile App Engineer (React Native)",
    icon: <Smartphone size={28} />,
    range: [4, 8],
    description:
      "Build cross-platform mobile apps using React Native / Expo, focusing on performance and native integrations.",
  },
  {
    id: "mobile-backend",
    title: "Mobile Backend Engineer",
    icon: <Server size={28} />,
    range: [5, 11],
    description:
      "Design and maintain APIs, real-time syncing, and backend services that power mobile apps (Firebase / Supabase / Node).",
  },
  {
    id: "platform-dev",
    title: "Performance & Systems Engineer",
    icon: <Cpu size={28} />,
    range: [5, 12],
    description:
      "Optimize app performance, memory, startup time, and handle native modules or platform-specific bridges.",
  },
  {
    id: "ui-engineer",
    title: "Mobile UI / Interaction Engineer",
    icon: <Paintbrush2 size={28} />,
    range: [3.5, 7],
    description:
      "Craft smooth UI, animations and UX using Reanimated, Moti, and design systems for mobile screens.",
  },
  {
    id: "fullstack-mobile",
    title: "Full-Stack Mobile Developer (MERN + Mobile)",
    icon: <Database size={28} />,
    range: [4.5, 9],
    description:
      "End-to-end ownership: frontend mobile apps + backend services, deployment and monitoring.",
  },
];

// salary scale max (for UI calculation)
const MAX_L = 14;

const cardMotion: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring", stiffness: 90, damping: 15 },
  }),
};

// Component for the animated salary bar
const SalaryBar = ({
  name,
  min,
  max,
  controls,
}: {
  name: string;
  min: number;
  max: number;
  controls: any;
}) => {
  const minPct = (min / MAX_L) * 100;
  const maxPct = (max / MAX_L) * 100;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <div className="w-full md:w-40 text-sm md:text-right font-medium text-gray-700">
        {name}
      </div>
      <div className="flex-1">
        <div className="relative h-10 rounded-xl bg-orange-50/80 border border-orange-100/50 overflow-hidden shadow-inner">
          <div className="absolute inset-0 flex items-center px-2">
            <motion.div
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: `${minPct}%`,
                  transition: { duration: 1.0, ease: "easeOut" },
                },
              }}
              className="h-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-md"
              style={{ maxWidth: "100%" }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: `${Math.max(0, maxPct - minPct)}%`,
                  transition: { duration: 1.2, ease: "easeOut", delay: 0.12 },
                },
              }}
              className="h-4 bg-orange-200/50 ml-1"
              style={{ maxWidth: "100%" }}
            />
          </div>

          <div className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white px-1 font-bold rounded bg-orange-600/90 shadow-sm">
            {min}L
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 text-xs text-white px-1 font-bold rounded bg-orange-600/90 shadow-sm"
            style={{
              left: `${maxPct}%`,
              transform: `translate(-${maxPct > 90 ? 100 : 50}%, -50%)`,
            }}
            aria-hidden
          >
            {max}L
          </div>

          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500/80 pointer-events-none"
            style={{ left: `${maxPct}%`, transform: `translate(-50%, -50%)` }}
          />
        </div>

        <div className="mt-1 flex justify-between text-xs text-gray-400 md:hidden">
          <div>Min: {min}L</div>
          <div>Max: {max}L</div>
        </div>
      </div>
    </div>
  );
};

export default function AppCareerOutcomes(): JSX.Element {
  const controls = useAnimation();

  useEffect(() => {
    // trigger the salary bar animation on mount
    controls.start("visible");
  }, [controls]);

  return (
    <section aria-labelledby="career-outcomes" className="w-full px-4 py-12 md:py-16 bg-white text-gray-800">
      <div className="mx-auto max-w-6xl p-6 md:p-10 rounded-2xl bg-white shadow-xl ring-1 ring-orange-100/50">
        <header className="mb-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
            App Dev Career Outcomes <span className="text-orange-600">&amp;</span> Salary Expectations
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 mb-6 max-w-3xl">
            Graduates from the App Development track are prepared for cross-platform mobile roles — here are typical career paths and expected salary ranges (LPA).
          </p>
        </header>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {roles.map((role, idx) => (
            <motion.article
              key={role.id}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardMotion}
              className="group relative rounded-xl p-6 bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4 shadow-md">
                <div>{role.icon}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">{role.title}</h3>
              <div className="mt-2 font-bold text-lg text-orange-600 flex items-center gap-2">
                <DollarSign size={16} />
                <span>₹{role.range[0]}-{role.range[1]} LPA</span>
              </div>

              <p className="mt-3 text-sm text-gray-500">{role.description}</p>
            </motion.article>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-orange-200">
          <span className="text-orange-500 mr-2">💰</span> Detailed Salary Benchmarks
        </h3>

        <div className="bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-inner">
          <div className="grid gap-6">
            {roles.map((role) => (
              <SalaryBar key={role.id} name={role.title} min={role.range[0]} max={role.range[1]} controls={controls} />
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500 italic border-t pt-4">
            Note: Salary ranges are indicative and may vary by company, location, experience, and negotiation.
          </p>
        </div>
      </div>
    </section>
  );
}
