"use client";

import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Award,
  BarChart2,
  Cpu,
  Briefcase,
  CheckCircle,
  Server,
} from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const container = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function WhyJoin() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const pillars = [
    { Icon: GraduationCap, title: "LEARN", subtitle: "15 Days of AI-Powered Learning", color: "bg-orange-50 text-orange-600" },
    { Icon: Laptop, title: "BUILD", subtitle: "Practical Project Experience", color: "bg-orange-50 text-orange-600" },
    { Icon: Award, title: "EARN", subtitle: "Recognized Certificates", color: "bg-orange-50 text-orange-600" },
    { Icon: BarChart2, title: "GROW", subtitle: "Career Enhancement", color: "bg-orange-50 text-orange-600" },
  ];

  const benefits = [
    { icon: <Cpu className="w-5 h-5 text-orange-600" />, title: "AI-Powered Learning", desc: "Smart, personalized learning experience" },
    { icon: <Briefcase className="w-5 h-5 text-orange-600" />, title: "One Practical Project", desc: "Apply skills in a real-world scenario" },
    { icon: <Award className="w-5 h-5 text-orange-600" />, title: "Dual Certificates", desc: "Course + Internship recognition" },
    { icon: <Server className="w-5 h-5 text-orange-600" />, title: "Lifetime LMS Access", desc: "Learn anytime, anywhere" },
  ];

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center gap-4 mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Learn in 15 Days. Build. Earn Recognition. Grow.
          </motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        {/* Top pillars */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center mb-10 text-center">
          {pillars.map((p, i) => (
            <motion.div key={p.title} className="flex flex-col items-center gap-3">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: [1, 1.08, 1], opacity: 1 } : {}}
                transition={{ delay: 0.06 * i, duration: 0.9 }}
                className={`w-20 h-20 rounded-full flex items-center justify-center shadow-sm ${p.color}`}
              >
                <p.Icon className="w-8 h-8" />
              </motion.div>

              <div className="font-semibold text-gray-900">{p.title}</div>
              <div className="text-sm text-gray-600">{p.subtitle}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: benefits grid */}
          <motion.div variants={container} className="lg:col-span-2">
            <motion.h3 variants={item} className="text-2xl font-semibold text-gray-800 mb-4">
              Why Join GEONIXA's 15-Days Program?
            </motion.h3>

            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b, idx) => (
                <motion.div
                  key={b.title}
                  variants={item}
                  className="flex items-start gap-4 bg-white border-l-4 border-orange-500 rounded-md p-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    {b.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600 mt-1">{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: CTA card */}
          <motion.aside variants={item} className="lg:col-span-1">
            <motion.div
              variants={item}
              className="bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 rounded-xl p-6 shadow-md sticky top-24"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Ready to Transform Your Career?</h4>
              <p className="text-sm text-gray-600 mb-6">
                Join GEONIXA's 15-Days Certification & Internship Program and gain practical skills, project experience, and
                certification to boost your career prospects.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-lg"
              >
                Enroll Now
              </motion.button>

              <p className="text-xs text-gray-500 mt-4">Limited spots available. Start your journey today.</p>
            </motion.div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
}
