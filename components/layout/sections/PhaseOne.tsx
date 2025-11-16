"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Video, FileText, Cpu, Flag, CheckCircle } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function PhaseOne() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center justify-between mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Phase 1 - Recorded Learning (10 Days)
          </motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        <motion.p variants={item} className="text-gray-600 max-w-3xl leading-relaxed mb-8">
          Learn at your own pace with AI-powered, pre-recorded modules designed to build your skills
          systematically.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left: feature list */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div variants={item} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900">Self-paced Video Lessons</div>
                <div className="text-sm text-gray-600">Access high-quality recorded content anytime, anywhere</div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900">Daily Practice Tasks</div>
                <div className="text-sm text-gray-600">Apply what you've learned with hands-on assignments</div>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-semibold text-gray-900">AI Learning Assistant</div>
                <div className="text-sm text-gray-600">Get personalized support and feedback</div>
              </div>
            </motion.div>

            {/* Outcome pill */}
            <motion.div
              variants={item}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="mt-6 flex items-center gap-3 border-l-4 border-orange-500 bg-white rounded-md p-4 shadow-sm"
            >
              <Flag className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Outcome</div>
                <div className="text-sm text-gray-600">Completion of all recorded lessons and assignments</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Phase structure card */}
          <motion.aside variants={item} className="lg:col-span-1">
            <motion.div
              className="bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 rounded-xl p-6 shadow-md"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Phase 1 Structure</h3>

              <ul className="space-y-4">
                {[
                  { title: "Day 1-2", desc: "Introduction Modules" },
                  { title: "Day 3-5", desc: "Core Concepts" },
                  { title: "Day 6-8", desc: "Advanced Topics" },
                  { title: "Day 9-10", desc: "Final Assessments" },
                ].map((s, i) => (
                  <motion.li
                    key={s.title}
                    className="flex items-start gap-3"
                    initial={{ x: 20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.08 * i, duration: 0.42 }}
                  >
                    {/* animated dot */}
                    <motion.span
                      className="w-3 h-3 rounded-full mt-2 bg-orange-600 flex-shrink-0"
                      animate={inView ? { scale: [1, 1.6, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.2 }}
                    />

                    <div>
                      <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                      <div className="text-sm text-gray-600">{s.desc}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.aside>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-8 text-sm text-gray-500">
          <span>GEONIXA 15-Days Certification & Internship Program</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
