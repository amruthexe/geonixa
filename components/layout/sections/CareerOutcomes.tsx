"use client"
// components/CareerOutcomes.tsx
import React, { useEffect } from "react";
import { Monitor, Server, Atom, Paintbrush2, Database, DollarSign } from "lucide-react";
import { motion, useAnimation, Variants } from "framer-motion";

type Role = {
  id: string;
  title: string;
  icon: React.ReactNode;
  range: [number, number]; // in LPA
  description: string;
  // Removed colorClass as we are now using a consistent orange theme
};

const roles: Role[] = [
  {
    id: "frontend",
    title: "Frontend Developer",
    icon: <Monitor size={28} />,
    range: [3, 6],
    description:
      "Specializes in client-side development, user interfaces, and user experiences.",
  },
  {
    id: "fullstack",
    title: "Full-Stack Developer",
    icon: <Server size={28} />,
    range: [5, 10],
    description:
      "Proficient in both frontend and backend technologies, capable of handling complete applications.",
  },
  {
    id: "react",
    title: "React.js Developer",
    icon: <Atom size={28} />,
    range: [4, 8],
    description:
      "Specializes in React.js ecosystem, component-based architecture, and state management.",
  },
  {
    id: "ui",
    title: "UI Developer",
    icon: <Paintbrush2 size={28} />,
    range: [3.5, 7],
    description: "Focuses on UI implementations, pixel-perfect layouts and interactions.",
  },
  {
    id: "mern",
    title: "MERN Stack Developer",
    icon: <Database size={28} />,
    range: [4, 8],
    description: "Works across MongoDB, Express, React and Node.js (MERN) stack.",
  },
];

// salary scale max (for UI calculation)
const MAX_L = 12;

const cardMotion: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 90, damping: 15 },
  }),
};

// Component for the animated salary bar
const SalaryBar = ({ name, min, max, controls }: { name: string, min: number, max: number, controls: any }) => {
  const minPct = (min / MAX_L) * 100;
  const maxPct = (max / MAX_L) * 100;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2">
      <div className="w-full md:w-40 text-sm md:text-right font-medium text-gray-700">{name}</div>
      <div className="flex-1">
        {/* visual track */}
        <div className="relative h-10 rounded-xl bg-orange-50/80 border border-orange-100/50 overflow-hidden shadow-inner">
          {/* Bar container - adjusted to be relative for absolute children positioning */}
          <div className="absolute inset-0 flex items-center px-2">
            {/* min bar (solid orange) */}
            <motion.div
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: { width: `${minPct}%`, transition: { duration: 1.0, ease: "easeOut" } },
              }}
              className="h-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-md"
              style={{ maxWidth: "100%" }}
            />
            {/* gap between min and max - visualized as a lighter bar (orange-100) */}
            <motion.div
              initial={{ width: 0 }}
              animate={controls}
              variants={{
                visible: {
                  width: `${Math.max(0, maxPct - minPct)}%`,
                  transition: { duration: 1.2, ease: "easeOut", delay: 0.12 },
                },
              }}
              className="h-4 bg-orange-200/50"
              style={{ maxWidth: "100%" }}
            />
          </div>

          {/* numeric labels positioned above bars */}
          <div
            className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-white px-1 font-bold rounded bg-orange-600/90 shadow-sm"
          >
            {min}L
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 text-xs text-white px-1 font-bold rounded bg-orange-600/90 shadow-sm"
            style={{ left: `${maxPct}%`, transform: `translate(-${maxPct > 90 ? 100 : 0}%, -50%)` }}
            aria-hidden
          >
            {max}L
          </div>

          {/* animated pulse at the end of the current max */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-500/80 pointer-events-none"
            style={{ left: `${maxPct}%`, transform: `translate(-50%, -50%)` }}
          />
        </div>

        {/* micro legend on small screen */}
        <div className="mt-1 flex justify-between text-xs text-gray-400 md:hidden">
          <div>Min: {min}L</div>
          <div>Max: {max}L</div>
        </div>
      </div>
    </div>
  );
};


export default function CareerOutcomes(): JSX.Element {
  const controls = useAnimation();

  useEffect(() => {
    // start the salary bars animation after mount
    controls.start("visible");
  }, [controls]);

  return (
    <section
      aria-labelledby="career-outcomes"
      // Updated to white background, keeping padding
      className="w-full px-4 py-12 md:py-16 bg-white text-gray-800"
    >
      {/* Container with a subtle inner orange glow/gradient for modern feel */}
      <div className="mx-auto max-w-6xl p-6 md:p-10 rounded-2xl bg-white shadow-xl ring-1 ring-orange-100/50">
        <motion.h2
          id="career-outcomes"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
          // Updated to dark text with orange accent
          className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-800 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-1/2 after:h-1 after:bg-orange-500 after:rounded-full"
        >
            <h1 className="text-5xl font-extrabold text-black mb-3 tracking-tight">
          Career Outcomes <span className="text-orange-600">&</span> Salary Expectations
        </h1>
        
        </motion.h2>
       

        <p className="text-sm md:text-base text-gray-600 mt-4 mb-8 max-w-3xl">
          After completing the program, graduates are positioned for **immediate industry entry** with the following career paths and expected salary ranges (LPA - Lakhs Per Annum):
        </p>

        {/* Cards grid - Clean light theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {roles.map((role, idx) => (
            <motion.article
              key={role.id}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardMotion}
              // Light background, subtle shadow, and orange border on hover
              className="group relative rounded-xl p-6 bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:border-orange-300 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-4 shadow-md">
                {/* Lucide icon */}
                <div>{role.icon}</div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">{role.title}</h3>
              <div className="mt-2 font-bold text-lg text-orange-600">
                <DollarSign size={16} className="inline-block mr-1 -mt-1" />
                ₹{role.range[0]}-{role.range[1]} LPA
              </div>

              <p className="mt-3 text-sm text-gray-500">{role.description}</p>
            </motion.article>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2 border-orange-200">
            <span className="text-orange-500">💰</span> Detailed Salary Benchmarks
        </h3>

        {/* Salary Expectations by Role (chart-like) - Light/Orange theme */}
        <div className="bg-white p-6 md:p-8 rounded-xl border border-orange-100 shadow-inner">

          <div className="grid gap-6">
            {roles.map((role, i) => (
              <SalaryBar
                key={role.id}
                name={role.title}
                min={role.range[0]}
                max={role.range[1]}
                controls={controls}
              />
            ))}
          </div>

          <p className="mt-6 text-sm text-gray-500 italic border-t pt-4">
            Note: Salary ranges are indicative and may vary based on industry standards, company requirements, and individual performance.
          </p>
        </div>
      </div>
    </section>
  );
}