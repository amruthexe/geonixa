"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: 'swap' });

/**
 * A modern, orange-themed component showcasing a Web Developer course path.
 * Features: Framer Motion for scroll parallax (header) and staggered fade-in (cards).
 * Uses: A clean white/off-white background and a striking orange accent color.
 */
export default function WebDevCourse(): JSX.Element {
  const ref = useRef(null);
  // Scroll parallax for the header
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.9, 0.8]);

  return (
    <section className={`${poppins.className} min-h-screen bg-white flex items-center justify-center py-16 px-4`}>
      <div className="max-w-6xl w-full" ref={ref}>
        
        {/* Header with subtle scroll parallax */}
        <motion.header style={{ y: y1, opacity }} className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            The <span className="text-orange-700">Geonixa</span> Path
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600">
            Web Developer Accelerator Formula
          </h2>
          
          <p className="mt-5 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
            From College Student &rarr; Job-Ready Developer in 6 Months
          </p>

          <div className="mx-auto mt-6 w-16 h-1.5 bg-orange-400 rounded-full"></div>
        </motion.header>

        {/* Cards Grid - Modern, white-on-white design with orange accent */}
        <main className="rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <AnimatedCard
              title="P1"
              subtitle="Portfolio Lab"
              description="Work on real-world mock client projects, build deployable apps with best practices, and learn version control."
              bullets={["Real-World Projects", "Best Practices & Deployment", "Version Control"]}
              delay={0.15}
            />

            <AnimatedCard
              title="P2"
              subtitle="Career Booster"
              description="Create a personal brand website, optimize your professional profiles (LinkedIn/GitHub), and get portfolio reviews."
              bullets={["Personal Brand Website", "Profile Optimization", "Expert Reviews"]}
              delay={0.25}
            />

            <AnimatedCard
              title="P3"
              subtitle="Mock Interview Hub"
              description="Practice technical and HR rounds, solve coding challenges with detailed feedback, and simulate real interview experiences."
              bullets={["Technical & HR Rounds", "Coding Challenges", "Simulated Interviews"]}
              delay={0.35}
            />

            <AnimatedCard
              title="P4"
              subtitle="Placement Accelerator"
              description="Receive 1:1 resume and interview guidance, guaranteed internship opportunities, and job referrals via our partner network."
              bullets={["1:1 Guidance", "Guaranteed Internships", "Job Referrals"]}
              delay={0.45}
            />
          </div>

          {/* Footer CTA - Elevated and more prominent */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-white rounded-xl shadow-lg border border-orange-100 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          >
            <div>
              <p className="text-xl text-gray-900 font-extrabold">5-Month Full-Stack Program</p>
              <p className="text-sm text-gray-600 mt-1">
                100% Job Guarantee | Project-Based Learning | Limited Seats</p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button className="px-6 py-3 bg-orange-700 text-white rounded-xl text-base font-semibold shadow-lg shadow-orange-700/30 hover:bg-orange-600 transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
              <a className="text-sm text-orange-700 font-semibold hover:text-orange-900 transition underline-offset-4" href="#curriculum">
                View Curriculum
              </a>
            </div>
          </motion.div>
        </main>
      </div>
    </section>
  );
}

/* ------------------ Specialized pieces ------------------ */

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  delay?: number;
}

/**
 * Modern, dynamic card with a large, elevated title number and gradient hover.
 */
function AnimatedCard({ title, subtitle, description, delay = 0 }: AnimatedCardProps) {
  const ref = useRef(null);
  // Trigger animation when the card enters view
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.17, 0.67, 0.83, 0.67] }} 
      className="relative rounded-xl p-6 pt-10 shadow-lg bg-white overflow-hidden transform hover:translate-y-[-4px] transition duration-300 group" // Added group class and hover transform
    >
      {/* Large, transparent title number (P1, P2, etc.) */}
      <div className="absolute top-[10px] right-[10px] text-[7rem] font-extrabold text-orange-100 leading-none pointer-events-none">
        {title.replace('P', '')}
      </div>
      
      {/* Subtle Gradient Header Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 to-orange-700/80 rounded-t-xl"></div>
      
      <div className="relative z-10"> 
        <h5 className="mt-2 text-gray-900 font-extrabold text-xl">{subtitle}</h5>
        
        <p className="mt-3 text-gray-600 text-sm min-h-[50px]">
          {description}
        </p>

        {/* Key Focus Tag with Orange Accent */}
        <div className="mt-5 text-sm font-medium text-orange-700 flex items-center gap-1 border-t pt-3 border-gray-100">
          <svg className="w-5 h-5 text-amber-500 group-hover:text-orange-700 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-gray-900">Core Focus Area</span>
        </div>
      </div>
    </motion.article>
  );
}