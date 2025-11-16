"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Video, Cpu, Users, BookmarkCheck, FolderKanban, Award } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function CertificationsBenefitsDays() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        {/* Heading */}
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          Certifications & Benefits
        </motion.h2>
        <motion.div variants={item} className="w-20 h-1 bg-orange-500 rounded mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Certifications */}
          <motion.div variants={container}>
            <motion.h3 variants={item} className="text-xl font-semibold text-orange-600 flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-orange-500" /> Certifications
            </motion.h3>

            {/* Course Completion Certificate */}
            <motion.div variants={item} className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Course Completion Certificate</div>
                <div className="text-sm text-gray-600 mt-1">Awarded upon finishing 15-day training and project</div>
              </div>
            </motion.div>

            {/* Internship Certificate */}
            <motion.div variants={item} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900">Internship Certificate</div>
                <div className="text-sm text-gray-600 mt-1">Issued after evaluation of project and participation</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Program Benefits */}
          <motion.div variants={container}>
            <motion.h3 variants={item} className="text-xl font-semibold text-orange-600 flex items-center gap-2 mb-6">
              🎁 Program Benefits
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Video className='w-5 h-5 text-orange-600' />, title: "Flexible Recorded Learning", desc: "Learn anytime, anywhere" },
                { icon: <Cpu className='w-5 h-5 text-orange-600' />, title: "AI Support", desc: "Resume analysis & mock interviews" },
                { icon: <Users className='w-5 h-5 text-orange-600' />, title: "Mentor Support", desc: "Guidance during project tasks" },
                { icon: <BookmarkCheck className='w-5 h-5 text-orange-600' />, title: "Lifetime LMS Access", desc: "Access to all recordings & resources" },
                { icon: <FolderKanban className='w-5 h-5 text-orange-600' />, title: "Portfolio Enhancement", desc: "Add project to your resume" },
                { icon: <Briefcase className='w-5 h-5 text-orange-600' />, title: "Career Support", desc: "Placement assistance" },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  variants={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 bg-white border border-orange-100 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3 mb-1">
                    {b.icon}
                    <div className="font-semibold text-gray-900 text-sm">{b.title}</div>
                  </div>
                  <div className="text-xs text-gray-600">{b.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
