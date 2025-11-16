"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Clock, Monitor, GraduationCap, CheckCircle } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProgramSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center gap-4 mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">Program Summary</motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        {/* Top cards: Duration / Mode / Eligibility */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div variants={item} className="rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Duration</div>
                <div className="text-sm text-gray-600">15 Days</div>
                <div className="text-xs text-gray-500 mt-1">10 Days Recorded + 5 Days Project</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Mode</div>
                <div className="text-sm text-gray-600">Online</div>
                <div className="text-xs text-gray-500 mt-1">Recorded Sessions + Guided Support</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white border border-orange-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Eligibility</div>
                <div className="text-sm text-gray-600">Open to All Students</div>
                <div className="text-xs text-gray-500 mt-1">No specific qualifications required</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Key features */}
        <motion.div variants={item} className="rounded-lg p-6 bg-white border border-orange-100 shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <span className="font-semibold text-gray-900">Dual Certificates:</span>{' '}
                <span className="text-gray-600">Course Completion + Internship</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <span className="font-semibold text-gray-900">One Project:</span>{' '}
                <span className="text-gray-600">Practical, industry-relevant task</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <span className="font-semibold text-gray-900">Lifetime LMS Access:</span>{' '}
                <span className="text-gray-600">Learn anytime, anywhere</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <span className="font-semibold text-gray-900">AI Support:</span>{' '}
                <span className="text-gray-600">Smart learning tools & career guidance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="px-12 py-4 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-lg"
          >
            Learn in 15 Days. Build. Earn Recognition. Grow.
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
