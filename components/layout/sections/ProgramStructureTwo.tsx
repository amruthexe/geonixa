"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  BookOpen,
  Monitor,
  Code,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

/**
 * ProgramStructureAppDev
 * - App Dev themed (white + orange) version of the "Program Structure" UI
 * - Timeline bar, four phase cards, total duration badge
 * - Responsive and animated using framer-motion
 *
 * Notes:
 * - Fixed invalid nested <p> tags that caused hydration errors.
 * - Icons now render properly and markup is valid HTML.
 */
export default function ProgramStructureTwo(): JSX.Element {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, margin: "-120px" });

  const phases = [
    {
      id: 1,
      title: "Phase 1",
      days: 20,
      headline: "Core Training",
      highlight: "Foundation Building",
      Icon: BookOpen,
      note: "Skill Development",
      color: "bg-gradient-to-r from-orange-400 to-amber-400",
    },
    {
      id: 2,
      title: "Phase 2",
      days: 10,
      headline: "Minor Project",
      highlight: "Practical Application",
      Icon: Monitor,
      note: "Hands-On Practice",
      color: "bg-gradient-to-r from-amber-400 to-orange-400",
    },
    {
      id: 3,
      title: "Phase 3",
      days: 15,
      headline: "Aptitude & Reasoning",
      highlight: "Professional Skills",
      Icon: Code,
      note: "Job Readiness",
      color: "bg-gradient-to-r from-orange-300 to-orange-500",
    },
    {
      id: 4,
      title: "Phase 4",
      days: 15,
      headline: "Major Project",
      highlight: "Industry Simulation",
      Icon: Users,
      note: "Real-World Experience",
      color: "bg-gradient-to-r from-orange-200 to-orange-400",
    },
  ];

  const totalDays = phases.reduce((s, p) => s + p.days, 0);

  // compute segment widths (%)
  const widths = phases.map((p) => (p.days / totalDays) * 100);

  return (
    <section
      ref={rootRef}
      className={`${poppins.className} w-full py-16 px-6 md:px-12 bg-white`}
      aria-labelledby="program-structure-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          id="program-structure-title"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          PROGRAM STRUCTURE
        </motion.h2>

        {/* Timeline bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="w-full mb-8"
        >
          <div className="h-3 rounded-full bg-gray-100 overflow-hidden relative">
            <div className="absolute inset-0 flex">
              {phases.map((p, idx) => (
                <div
                  key={p.id}
                  className={`${p.color} h-full`}
                  style={{
                    width: `${widths[idx]}%`,
                    transition: "width .8s ease",
                  }}
                />
              ))}
            </div>

            {/* numeric labels centered above segments */}
            <div className="absolute inset-0 flex items-center pointer-events-none">
              {phases.map((p, idx) => {
                const left =
                  widths.slice(0, idx).reduce((a, b) => a + b, 0) + widths[idx] / 2;
                return (
                  <span
                    key={p.id}
                    className="text-xs text-gray-600"
                    style={{
                      position: "absolute",
                      left: `${left}%`,
                      transform: "translateX(-50%) translateY(-140%)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.days}D
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {phases.map((p) => {
            const Icon = p.Icon;
            return (
              <article
                key={p.id}
                className="relative rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-orange-50 p-6 shadow-sm hover:shadow-lg transition"
                aria-labelledby={`phase-${p.id}-title`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center text-white shadow ${p.color}`}
                    aria-hidden
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 id={`phase-${p.id}-title`} className="text-lg font-semibold text-gray-900">
                      {p.title}
                    </h4>
                    <div className="text-sm text-gray-500">{p.headline}</div>
                  </div>
                </div>

                {/* inner card */}
                <div className="rounded-lg bg-white/60 p-4 border border-orange-100">
                  <div className="text-sm font-bold text-orange-600 mb-1">{p.days} Days</div>
                  <div className="text-sm text-gray-700 mb-3">{p.headline}</div>

                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500" />
                    <span>{p.note}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-50 text-orange-700 border border-orange-100">
                    {p.highlight}
                  </span>
                </div>
              </article>
            );
          })}
        </motion.div>

        {/* Total duration badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-full px-6 py-3 shadow-sm">
            <Clock className="w-5 h-5 text-orange-600" />
            <span className="font-semibold text-gray-900">Total Duration: {totalDays} Days</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
