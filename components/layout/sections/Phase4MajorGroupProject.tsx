// components/Phase4MajorGroupProject.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Users,
  Monitor,
  
  Presentation,
  Trophy,
  CheckCircle,
} from "lucide-react";
import { FaRobot } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function Phase4MajorGroupProject(): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className={`${poppins.className} w-full py-16 px-6 md:px-12 bg-white`}
      aria-labelledby="phase4-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          id="phase4-title"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Phase 4 - Major Group Project <span className="text-base md:text-lg font-semibold text-gray-700"> (15 Days)</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Description + Key Activities */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Description card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm">
              <p className="text-gray-800 text-lg leading-relaxed">
                Work as a professional team under mentor guidance to complete an industry-simulated project with AI-powered tracking and evaluation.
              </p>
            </div>

            {/* Key activities */}
            <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Activities</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ActivityCard
                  icon={<Users className="w-5 h-5 text-white" />}
                  title="Group Collaboration"
                  subtitle="Team task allocation & scrum rituals"
                />
                <ActivityCard
                  icon={<Monitor className="w-5 h-5 text-white" />}
                  title="Mentor Guidance"
                  subtitle="Weekly evaluations & feedback"
                />
                <ActivityCard
                  icon={<FaRobot className="w-5 h-5 text-white" />}
                  title="AI Tracking"
                  subtitle="Performance reports & analytics"
                />
                <ActivityCard
                  icon={<Presentation className="w-5 h-5 text-white" />}
                  title="Final Presentation"
                  subtitle="Project demonstration to mentors"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Image + Outcome */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Media card */}
            <div className="rounded-2xl overflow-hidden border border-orange-100 shadow-sm bg-orange-50">
              {/* replace /phase4.jpg with your public image */}
              <div className="relative w-full h-48 sm:h-56 md:h-64">
                <Image
                  src="/vimp5.png"
                  alt="Students working on laptop - Major Project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Outcome card */}
            <div className="rounded-2xl p-6 bg-white border border-orange-100 shadow-md">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Outcome</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Major Project Certificate + Internship Completion Certificate
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow">
                    <TrophyIcon />
                  </div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 text-orange-700">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Students receive certificates and a final project showcase to highlight in portfolios and interviews.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ActivityCard ---------------- */
function ActivityCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string; }) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-lg p-3 border border-orange-50 shadow-sm">
      <div className="w-10 h-10 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-gray-900">{title}</div>
        <div className="text-xs text-gray-600">{subtitle}</div>
      </div>
    </div>
  );
}

/* small trophy icon (inline SVG to keep consistent look) */
function TrophyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M8 3h8v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V3z" fill="currentColor" />
      <path d="M6 7v2a6 6 0 0 0 6 6 6 6 0 0 0 6-6V7" fill="currentColor" opacity="0.9" />
      <path d="M8 17h8v3H8z" fill="currentColor" opacity="0.95" />
    </svg>
  );
}
