"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Video, ClipboardList, CheckCircle, Trophy } from "lucide-react";
import { FaTools } from "react-icons/fa";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export default function ProgramStructureDays() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const container = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.09 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center justify-between mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Program Structure
          </motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        {/* Progress Bars */}
        <motion.div
          variants={item}
          className="mb-8"
        >
          <div className="flex items-center justify-between text-sm font-semibold text-gray-700 mb-3">
            <span className="opacity-0">placeholder</span>
            <div className="flex gap-6 items-center">
              <span className="text-gray-800">Phase 1</span>
              <span className="text-gray-800">Phase 2</span>
            </div>
            <span className="opacity-0">placeholder</span>
          </div>

          <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
            {/* Phase 1 bar — animated width */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "70%" } : { width: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute left-0 top-0 bottom-0 rounded-full bg-orange-200"
            />

            {/* Phase 2 bar — sits after phase1 */}
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: "22%" } : { width: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
              style={{ left: "70%" }}
              className="absolute top-0 bottom-0 rounded-full bg-rose-200"
            />

            {/* Loading-like pulse over phase slices */}
            <motion.div
              animate={inView ? { opacity: [0.85, 0.45, 0.85] } : { opacity: 0 }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className="absolute inset-0 pointer-events-none"
            />
          </div>

          {/* Labels under bars */}
          <div className="mt-3 flex justify-between text-sm text-gray-600 font-medium">
            <span>10 Days</span>
            <span>5 Days</span>
          </div>
        </motion.div>

        {/* Phase cards */}
        <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 p-6 shadow-md relative overflow-hidden">
            {/* top accent */}
            <div className="absolute left-4 right-4 top-0 h-2 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-b-md" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-400 flex items-center justify-center text-white shadow">
                <Video className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">Phase 1</h3>
                <p className="mt-2 text-lg font-semibold text-emerald-600">Recorded Learning</p>
                <p className="text-sm text-gray-600 mt-1">10 Days of self-paced learning</p>

                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>Pre-recorded video lessons</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>Daily practice tasks</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                    <span>AI learning assistance</span>
                  </li>
                </ul>

                <div className="mt-6 bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-gray-700">Outcome: Course Completion Certificate</span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Phase 2 */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-rose-50 to-rose-25 border border-rose-100 p-6 shadow-md relative overflow-hidden">
            {/* top accent */}
            <div className="absolute left-4 right-4 top-0 h-2 bg-gradient-to-r from-pink-400 to-pink-300 rounded-b-md" />

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-pink-400 flex items-center justify-center text-white shadow">
                <FaTools className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">Phase 2</h3>
                <p className="mt-2 text-lg font-semibold text-rose-600">Project & Internship</p>
                <p className="text-sm text-gray-600 mt-1">5 Days of practical application</p>

                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-rose-500 mt-1" />
                    <span>One practical project</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-rose-500 mt-1" />
                    <span>Weekly progress feedback</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-5 h-5 text-rose-500 mt-1" />
                    <span>Final evaluation & presentation</span>
                  </li>
                </ul>

                <div className="mt-6 bg-white rounded-md p-3 shadow-sm flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-amber-500" />
                  <span className="text-sm text-gray-700">Outcome: Internship Certificate / Experience Letter</span>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </motion.div>
    </section>
  );
}
