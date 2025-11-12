"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import { SquareCode, Code, Server, Users, Briefcase, CheckCircle } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const journeyData = [
  {
    month: 1,
    title: "Web Foundation",
    points: [
      "HTML & CSS basics",
      "JavaScript fundamentals",
      "Responsive web design",
      "Git & GitHub setup",
    ],
    icon: SquareCode,
  },
  {
    month: 2,
    title: "Frontend Mastery",
    points: [
      "React.js with hooks",
      "Tailwind CSS styling",
      "API integration",
      "State management",
    ],
    icon: Code,
  },
  {
    month: 3,
    title: "Backend & Database",
    points: [
      "Node.js & Express.js",
      "MongoDB / Mongoose",
      "REST API design",
      "Authentication basics",
    ],
    icon: Server,
  },
  {
    month: 4,
    title: "Real Projects",
    points: [
      "Team sprints & collaboration",
      "GitHub project hosting",
      "Full deployment process",
      "Portfolio presentation",
    ],
    icon: Users,
  },
  {
    month: 5,
    title: "Placement Prep",
    points: [
      "Interview preparation",
      "Resume building",
      "Mock interviews",
      "Internship guidance",
    ],
    icon: Briefcase,
  },
];

export default function ZigZagJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className={`${poppins.className} relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20`}
    >
      {/* subtle orange gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-transparent pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-3">
            The <span className="text-orange-700">GeoNixa</span> Path
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey from beginner to job-ready developer in five immersive
            steps.
          </p>
          <div className="mx-auto mt-5 w-16 h-1.5 bg-orange-500 rounded-full"></div>
        </motion.header>

        {/* Timeline */}
        <div className="relative before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-full before:bg-orange-200 before:rounded-full">
          {journeyData.map((step, i) => {
            const Icon = step.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center mb-20 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* connecting line dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-orange-700 w-6 h-6 rounded-full z-10 shadow-lg"></div>

                {/* card */}
                <div
                  className={`relative bg-white shadow-xl rounded-2xl p-8 w-full md:w-[45%] ${
                    isLeft ? "md:mr-auto md:pl-10" : "md:ml-auto md:pr-10"
                  }`}
                >
                  <div className="absolute top-0 -translate-y-1/2 left-6 md:left-auto md:right-6 bg-gradient-to-br from-orange-600 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-orange-100">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div className="pt-10">
                    <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest">
                      Month {step.month}
                    </p>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <ul className="text-gray-700 text-sm space-y-2">
                      {step.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                       className="w-4 h-4 text-orange-600 mt-[2px] flex-shrink-0" />

                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 text-center bg-white shadow-lg rounded-2xl p-10 border border-orange-100"
        >
          <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
            5-Month Full-Stack Web Developer Program
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            100% Job Guarantee | Project-Based Learning | Limited Seats
          </p>
          <button className="px-6 py-3 bg-orange-700 text-white rounded-xl font-semibold shadow-md hover:bg-orange-600 hover:scale-105 transition">
            Apply Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
