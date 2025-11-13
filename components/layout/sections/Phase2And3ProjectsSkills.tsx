"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Code,
  Brain,
  CheckCircle,
  Trophy,
  Clock,
  Circle,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

/**
 * Phase2And3ProjectsSkills.tsx
 * - Orange & white AppDev themed version of "Phase 2 & 3 - Projects & Skills"
 * - Responsive, accessible, and uses framer-motion reveal animations
 * - Drop into components and import where needed
 */
export default function Phase2And3ProjectsSkills(): JSX.Element {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, margin: "-120px" });

  return (
    <section
      ref={rootRef}
      className={`${poppins.className} w-full py-16 px-6 md:px-12 bg-white`}
      aria-labelledby="phase-2-3-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          id="phase-2-3-title"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
        >
          PHASE 2 &amp; 3 - PROJECTS &amp; SKILLS
        </motion.h2>

        {/* Thin timeline with numbered nodes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="mb-8"
        >
          <div className="relative h-3">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-orange-50 border border-orange-100" />
            {/* Node 1 */}
            <div
              className="absolute left-8 -translate-y-1/2 top-1/2"
              style={{ transform: "translateY(-50%)" }}
            >
              <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shadow">
                <span className="text-sm font-semibold">1</span>
              </div>
            </div>
            {/* Node 2 */}
            <div
              className="absolute right-8 -translate-y-1/2 top-1/2"
              style={{ transform: "translateY(-50%)" }}
            >
              <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shadow">
                <span className="text-sm font-semibold">2</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two cards side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase 2 Card */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-orange-100 shadow-sm bg-gradient-to-br from-orange-50 to-white p-6"
            aria-labelledby="phase-2-title"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-orange-600 text-white flex items-center justify-center shadow">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 id="phase-2-title" className="text-xl font-bold text-gray-900">
                  Phase 2: Minor Project
                </h3>
                <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>10 Days</span>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Implement guided mini project</div>
                  <div className="text-sm text-gray-500">Apply concepts to real scenarios</div>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Work individually or in pairs</div>
                  <div className="text-sm text-gray-500">Practice collaboration and delivery</div>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Present outcomes to mentors</div>
                  <div className="text-sm text-gray-500">Receive feedback & iterate</div>
                </div>
              </li>
            </ul>

            {/* Outcome box */}
            <div className="mt-6 rounded-lg bg-white border border-orange-100 p-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-900">Outcome</div>
                  <div className="text-sm text-gray-600">Minor Project Certificate + Live Demo</div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Phase 3 Card */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="rounded-2xl border border-orange-100 shadow-sm bg-gradient-to-br from-orange-50 to-white p-6"
            aria-labelledby="phase-3-title"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-orange-600 text-white flex items-center justify-center shadow">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 id="phase-3-title" className="text-xl font-bold text-gray-900">
                  Phase 3: Aptitude & Reasoning
                </h3>
                <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-600" />
                  <span>15 Days</span>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Strengthen analytical skills</div>
                  <div className="text-sm text-gray-500">Focus on logical & quantitative thinking</div>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Enhance verbal ability & communication</div>
                  <div className="text-sm text-gray-500">Practice mock aptitude tests</div>
                </div>
              </li>

              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0" />
                <div>
                  <div className="font-medium">Interview readiness</div>
                  <div className="text-sm text-gray-500">Problem solving under time pressure</div>
                </div>
              </li>
            </ul>

            {/* Outcome box */}
            <div className="mt-6 rounded-lg bg-white border border-orange-100 p-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-orange-600" />
                <div>
                  <div className="font-semibold text-gray-900">Outcome</div>
                  <div className="text-sm text-gray-600">Enhanced employability & interview readiness</div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Total duration footer */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-full px-6 py-3 shadow-sm">
            <Circle className="w-4 h-4 text-orange-600" />
            <span className="font-semibold text-gray-900">Total Duration: 25 Days</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
