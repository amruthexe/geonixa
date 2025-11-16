"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { Clock, Monitor, GraduationCap, CheckCircle } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function ProgramOverviewDays() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
      >
        {/* Left column - Heading + description + info boxes */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Program Overview
          </motion.h2>

          <motion.div variants={itemVariants} className="w-16 h-1 rounded-sm bg-orange-500 mb-6" />

          <motion.p variants={itemVariants} className="text-gray-600 max-w-3xl leading-relaxed mb-8">
            A 15-day short-term, career-boosting program designed to help students gain practical skills and project
            experience through flexible learning and guided support.
          </motion.p>

          <div className="space-y-4">
            <motion.div variants={itemVariants} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Duration</div>
                <div className="text-sm text-gray-600">15 Days (10 Days Recorded + 5 Days Project)</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Mode</div>
                <div className="text-sm text-gray-600">Online (Recorded Sessions + Guided Support)</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Eligibility</div>
                <div className="text-sm text-gray-600">Open to All Students</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right column - Highlights card */}
        <motion.aside variants={itemVariants} className="lg:col-span-1">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
            className="bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 rounded-xl p-6 shadow-md"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-gray-900 mb-4">
              Program Highlights
            </motion.h3>

            <motion.ul variants={containerVariants} className="space-y-3 mb-6">
              {[
                "AI-Powered Learning System",
                "One Guided Project",
                "Dual Certificates (Course + Internship)",
                "Lifetime LMS Access",
                "Career Growth Support",
              ].map((text, i) => (
                <motion.li key={text} variants={itemVariants} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 mt-1" />
                  <span className="text-sm text-gray-700">{text}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-orange-600 text-white font-semibold shadow hover:bg-orange-700"
            >
              Learn in 15 Days. Build. Earn Recognition. Grow.
            </motion.button>
          </motion.div>
        </motion.aside>
      </motion.div>

      {/* subtle footer fade */}
      <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="mt-12 text-center">
        <p className="text-sm text-gray-500">Empowering Your Career Growth. Start your journey today.</p>
      </motion.div>
    </section>
  );
}
