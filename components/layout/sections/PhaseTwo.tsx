"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Briefcase, MessageSquare, Award, FileCheck, CheckCircle } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function PhaseTwo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const steps = [
    { title: "Project Work", desc: "One practical project under mentor guidance" },
    { title: "Weekly Feedback", desc: "Progress updates and guidance" },
    { title: "Final Evaluation", desc: "Presentation and assessment" },
    { title: "Internship Documentation", desc: "Completion certificates" },
  ];

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center justify-between mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Phase 2 - Project & Internship (5 Days)
          </motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        <motion.p variants={item} className="text-gray-600 max-w-3xl leading-relaxed mb-8">
          Apply your learning through one hands-on project and gain practical internship experience.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Left - timeline list */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={item}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.span
                      className="w-3 h-3 rounded-full bg-emerald-700 mt-1 flex-shrink-0"
                      animate={inView ? { scale: [1, 1.6, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.35 }}
                    />
                    <motion.span
                      className="w-0.5 bg-emerald-200 flex-1 mt-2"
                      initial={{ height: 0 }}
                      animate={inView ? { height: 44 } : {}}
                      transition={{ delay: 0.12 + i * 0.06, duration: 0.5 }}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="text-base font-semibold text-emerald-700">{s.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - activities + certificates */}
          <aside className="lg:col-span-1">
            <motion.div variants={item} className="bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 rounded-xl p-6 shadow-md mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Phase Activities</h3>

              <ul className="space-y-3">
                <motion.li className="flex items-start gap-3" initial={{ x: 18, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.06 }}>
                  <Briefcase className="w-5 h-5 text-emerald-600 mt-1" />
                  <span className="text-sm text-gray-700">One practical project</span>
                </motion.li>

                <motion.li className="flex items-start gap-3" initial={{ x: 18, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.12 }}>
                  <MessageSquare className="w-5 h-5 text-emerald-600 mt-1" />
                  <span className="text-sm text-gray-700">Weekly progress feedback</span>
                </motion.li>

                <motion.li className="flex items-start gap-3" initial={{ x: 18, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.18 }}>
                  <FileCheck className="w-5 h-5 text-emerald-600 mt-1" />
                  <span className="text-sm text-gray-700">Mentor guidance</span>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div className="grid grid-cols-1 gap-4" initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.28 }}>
              <motion.div whileHover={{ scale: 1.02 }} className="border border-rose-300 rounded-lg bg-rose-50 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center text-rose-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900">Course Certificate</div>
                  <div className="text-sm text-gray-600">For completion</div>
                </div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="border border-rose-300 rounded-lg bg-rose-50 p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center text-rose-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900">Internship Certificate</div>
                  <div className="text-sm text-gray-600">For experience</div>
                </div>
              </motion.div>
            </motion.div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
