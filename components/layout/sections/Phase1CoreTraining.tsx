// components/Phase1CoreTraining.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  CalendarDays,
  FileText,
  ClipboardList,
  Lightbulb,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-5 border border-orange-100 shadow-sm hover:shadow-md transition relative"
    >
      <div className="flex items-center mb-2">
        <div className="p-2 bg-orange-100 rounded-md mr-3 text-orange-700">
          {icon}
        </div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

interface OutcomeCardProps {
  icon: React.ReactNode;
  description: string;
  delay: number;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({
  icon,
  description,
  delay,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-6 border border-orange-200 shadow-md col-span-2"
    >
      <div className="flex items-center mb-2">
        <div className="p-2 bg-orange-100 rounded-md mr-3 text-orange-700">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900">Outcome</h4>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function Phase1CoreTraining(): JSX.Element {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className={`${poppins.className} min-h-screen py-16 px-6 bg-white`}
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Phase 1 —{" "}
            <span className="text-orange-600">Core Training</span>{" "}
            <span className="text-gray-700 text-3xl">(20 Days)</span>
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mt-2 rounded-full"></div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-orange-50 p-6 rounded-xl border border-orange-100 shadow"
            >
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                Build strong foundations with mentor-led learning, real
                projects, and AI-powered support.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative rounded-2xl overflow-hidden border border-orange-100 shadow-md aspect-video flex items-center justify-center bg-orange-50"
            >
              <Users className="w-24 h-24 text-orange-300 absolute z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-200/40 to-transparent"></div>
              <p className="absolute bottom-6 left-6 text-xl font-semibold text-gray-900">
                Structured Learning Environment
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6">
            <motion.h3
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Key Highlights
            </motion.h3>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <HighlightCard
                icon={<CalendarDays className="w-5 h-5 text-orange-700" />}
                title="Daily Learning"
                description="Structured modules to build deep understanding."
                delay={0.2}
              />
              <HighlightCard
                icon={<FileText className="w-5 h-5 text-orange-700" />}
                title="Practical Assignments"
                description="Apply learning with hands-on tasks."
                delay={0.3}
              />
              <HighlightCard
                icon={<ClipboardList className="w-5 h-5 text-orange-700" />}
                title="Real-world Case Studies"
                description="Learn how top companies solve problems."
                delay={0.4}
              />
              <HighlightCard
                icon={<Lightbulb className="w-5 h-5 text-orange-700" />}
                title="AI Learning Support"
                description="Smart AI tools to help you learn faster."
                delay={0.5}
              />
            </div>

            {/* Outcome */}
            <OutcomeCard
              icon={<Award className="w-5 h-5 text-orange-700" />}
              description="Weekly certificates, performance reviews & strong foundation building."
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
