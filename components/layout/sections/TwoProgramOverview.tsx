"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Calendar, // For Duration
  Home, // For Mode (Online / Hybrid)
  Users, // For Eligibility
 // For Powered By
  UserCheck, // For AI-Powered Learning
  Trello, // For Project-Based Training
  TrendingUp, // For Career Growth Guaranteed
} from "lucide-react";
import { FaRobot } from "react-icons/fa";

// Use the same Poppins font configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

// Helper component for the four main feature boxes
interface ProgramStatBoxProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay?: number;
}

function ProgramStatBox({ icon, title, value, delay = 0 }: ProgramStatBoxProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-white/20"
    >
      <div className="flex items-start mb-3">
        {/* Icon container with background */}
        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 text-white flex items-center justify-center shadow">
   {icon}
      </div>
        <h3 className="ml-4 text-lg font-semibold text-black">{title}</h3>
      </div>
      <p className="text-3xl font-extrabold text-black mt-2">
        {value}
      </p>
    </motion.div>
  );
}

// Helper component for the three features at the bottom
interface FeaturePillProps {
  icon: React.ReactNode;
  text: string;
  delay: number;
}

function FeaturePill({ icon, text, delay }: FeaturePillProps) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center justify-center p-4"
        >
            <div className="p-4 rounded-full bg-white/10 text-black border border-white/20 mb-3">
                {icon}
            </div>
            <p className="text-base font-medium text-black text-center whitespace-nowrap">
                {text}
            </p>
        </motion.div>
    );
}


export default function TwoProgramOverview(): JSX.Element {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  return (
    <section
      ref={ref}
      className={`${poppins.className} min-h-screen flex items-center justify-center py-16 px-6 bg-white`}
    >
      <div className="max-w-6xl w-full">
        {/* Header - PROGRAM OVERVIEW */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight">
            PROGRAM OVERVIEW
          </h1>
          {/* Underline matching the image */}
          <div className="w-20 h-1.5 bg-white mt-2 rounded-full"></div>
        </motion.header>

        {/* Main Description Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl mb-12"
        >
          <p className="text-lg md:text-xl text-black font-medium leading-relaxed">
            A 2-month intensive internship program designed by GEONIXA to
            provide students with hands-on learning, project execution,
            and real-world exposure under expert mentorship — powered by
            AI-driven tools and career support.
          </p>
        </motion.div>

        {/* Stat Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ProgramStatBox
            title="Duration"
            value="2 Months (60 Days)"
            icon={<Calendar className="w-6 h-6" />}
            delay={0.3}
          />
          <ProgramStatBox
            title="Mode"
            value="Online / Hybrid"
            icon={<Home className="w-6 h-6" />}
            delay={0.4}
          />
          <ProgramStatBox
            title="Eligibility"
            value="Open to All College Students"
            icon={<Users className="w-6 h-6" />}
            delay={0.5}
          />
          <ProgramStatBox
            title="Powered By"
            value="GEONIXA AI-Learning Ecosystem"
            icon={<FaRobot className="w-6 h-6" />}
            delay={0.6}
          />
        </div>

        {/* Bottom Feature Pills */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
          <FeaturePill
            icon={<UserCheck className="w-6 h-6" />}
            text="AI-Powered Learning"
            delay={0.7}
          />
          <div className="w-px h-12 bg-white/20 hidden sm:block"></div> {/* Separator */}
          <FeaturePill
            icon={<Trello className="w-6 h-6" />}
            text="Project-Based Training"
            delay={0.8}
          />
          <div className="w-px h-12 bg-white/20 hidden sm:block"></div> {/* Separator */}
          <FeaturePill
            icon={<TrendingUp className="w-6 h-6" />}
            text="Career Growth Guaranteed"
            delay={0.9}
          />
        </div>
      </div>
    </section>
  );
}