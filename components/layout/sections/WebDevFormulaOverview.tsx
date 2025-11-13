"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import { 
  Clock, 
  Award, 
  DollarSign, 
  Monitor, 
  Code, 
  Briefcase, 
  Star, 
  CheckCircle,
  Trophy,
  ArrowRight
} from 'lucide-react'; 

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800", "900"], display: 'swap' });

// Define the 5 stages 
const stages = [
  { title: "P1: Path Foundation", description: "Master essential web technologies and fundamentals. Focus on core concepts.", icon: Star },
  { title: "P2: Pro Builder", description: "Develop advanced skills and begin full-stack integration. Build complex applications.", icon: Code },
  { title: "P3: Portfolio Lab", description: "Execute mock client projects and build a professional, deployable portfolio.", icon: CheckCircle },
  { title: "P4: Placement Accelerator", description: "Receive interview coaching, resume prep, and gain access to job referrals.", icon: Briefcase },
  { title: "P5: Pro+ Mastery", description: "Advanced specialization, mentorship, and final preparation for industry roles.", icon: Trophy },
];

// Core Outcomes moved from the list to a dedicated banner
const coreOutcomes = [
    { icon: Briefcase, text: "Real-world experience" },
    { icon: Code, text: "3+ deployable projects" },
    { icon: Award, text: "100% placement guarantee" },
];

const statData = [
    { value: "6 Months", label: "To Job Readiness", icon: Clock },
    { value: "100%", label: "Placement Guarantee", icon: Award },
    { value: "₹6.5L+", label: "Avg. Starting Salary", icon: DollarSign },
];

/**
 * A highly improved, attractive component displaying Program Goals, Key Stats, and the 5P Formula roadmap.
 */
export default function WebDevFormulaOverview(): JSX.Element {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`${poppins.className} bg-gray-50 py-20 px-4 md:px-8`}>
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 lg:p-14 rounded-2xl shadow-2xl shadow-orange-500/10" ref={ref}>

        {/* --- 1. INTRO, TAGLINE, & OUTCOMES SECTION --- */}
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="pb-12 mb-12 border-b-2 border-orange-100"
        >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight text-center">
                Accelerate Your Career with the <span className="text-orange-700">Geonixa Formula</span>
            </h1>

            {/* Repositioned Tagline */}
            <p className="mt-6 text-2xl font-semibold text-center text-gray-700 flex items-center justify-center">
              <span className="text-orange-700 font-extrabold mr-2">Goal:</span> From College Student <ArrowRight className="w-6 h-6 mx-2 text-orange-500" /> **Job-Ready Developer in 6 Months**
            </p>

            {/* Core Outcomes Banner (New Structure: Left to Right) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-6 bg-orange-50 rounded-xl border border-orange-200">
                {coreOutcomes.map((outcome, index) => {
                    const OutcomeIcon = outcome.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                            className="flex items-center space-x-3"
                        >
                            <OutcomeIcon className="w-8 h-8 text-orange-700 flex-shrink-0" strokeWidth={2.5} />
                            <p className="text-lg font-semibold text-gray-800">{outcome.text}</p>
                        </motion.div>
                    );
                })}
            </div>


            {/* Key Stats Row (Retained) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {statData.map((stat, index) => {
                    const StatIcon = stat.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1.0 + index * 0.15 }}
                            className="p-6 text-center rounded-xl bg-gray-50 border border-gray-200 shadow-md"
                        >
                            <StatIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                            <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
                            <p className="mt-1 text-gray-600 font-semibold">{stat.label}</p>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main CTA */}
            <div className="text-center mt-10">
                <motion.button 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="px-10 py-4 bg-orange-700 text-white rounded-lg text-xl font-bold shadow-xl shadow-orange-700/40 hover:bg-orange-600 transition duration-300 transform hover:scale-[1.03]"
                >
                    Enroll Now & Secure Your Future!
                </motion.button>
            </div>
        </motion.div>

        {/* --- 2. 5P Formula Timeline (Roadmap Section) --- */}
        <div className="pt-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-3xl font-extrabold text-gray-900 mb-10 text-center"
          >
            The 5P Formula: Your Accelerated Roadmap
          </motion.h2>
          
          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Animated Horizontal Timeline Bar for Desktop - TOP POSITION ADJUSTED TO top-[28px] */}
            <div className="absolute left-0 right-0 top-[28px] h-0.5 bg-gray-200 hidden lg:block mx-auto max-w-4xl">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={inView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 2.0, ease: "easeInOut" }} // Slow, exploring reveal
                    className="h-full bg-orange-500 origin-left"
                />
            </div>
            
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-4">
              {stages.map((stage, index) => (
                <TimelineCard
                  key={index}
                  title={stage.title}
                  description={stage.description}
                  Icon={stage.icon}
                  index={index}
                  isLast={index === stages.length - 1} 
                  delay={0.15 * index + 2.2} // Staggered delay after line reveal starts
                />
              ))}
            </div>
          </div>
          
          {/* Bottom Goal Summary & Final CTA */}
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 3.0 }}
              className="mt-16 text-center p-6 bg-orange-700 rounded-xl shadow-xl shadow-orange-700/30"
          >
              <p className="text-xl font-extrabold text-white flex items-center justify-center mb-4">
                  <span className="text-2xl mr-3 font-light">&rarr;</span>
                  Build real projects &rarr; Build portfolio &rarr; Get placed
              </p>
              <button className="px-8 py-3 bg-white text-orange-700 rounded-lg text-lg font-bold hover:bg-gray-100 transition duration-300">
                  Join the Next Batch
              </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Reusable Timeline Card Component ---
interface TimelineCardProps {
  index: number;
  title: string;
  description: string;
  Icon: React.ElementType; 
  isLast: boolean;
  delay: number;
}

function TimelineCard({ index, title, description, Icon, isLast, delay }: TimelineCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center flex-1 group"
    >
      {/* Vertical connector line for mobile */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-[-20px] w-1 bg-gray-200 lg:hidden rounded-full"></div>
      )}

      {/* Timeline Node (The P1, P2 circle) - Pop-out Orange with Icon */}
      <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-extrabold bg-orange-700 text-white shadow-lg flex-shrink-0 z-20 transition duration-300 group-hover:bg-amber-600`}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <div className="mt-0 ml-4 lg:mt-4 lg:ml-0 p-0">
        <h4 className="font-bold text-lg text-gray-900 group-hover:text-orange-700 transition duration-300">{title}</h4>
        <p className="mt-1 text-sm text-gray-600 max-w-xs lg:max-w-none">{description}</p>
      </div>
    </motion.div>
  );
}