"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FileText, // Used for Resume + ATS Optimization
  Users, // Used for Mock Interviews
  MessageSquare, // Used for HR Communication & Aptitude
  BriefcaseBusiness, // Used for Job Guarantee & Internship
  ListChecks, // Used for 100% Job Guarantee (Checklist icon)
  ClipboardList, // Used for Internship Opportunity (List icon)
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthFivePlacement() {
  return (
    <section
      className={`${poppins.className} bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">
          Month 5:{" "}
          <span className="text-blue-700">
            Placement Accelerator Program
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          The final phase focused on job guarantee activation:
        </p>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-blue-500 rounded-full"></div>
      </motion.header>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left - Key Modules */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-gray-400">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Key Modules
            </h2>
          </div>

          {/* Module 1: Resume + ATS Optimization */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-blue-600 p-3 rounded-xl text-white flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Resume + ATS Optimization
              </h3>
              <p className="text-gray-600">
                Professional resume that passes **ATS filters**
              </p>
            </div>
          </div>
          
          {/* Module 2: Mock Interviews (3 rounds) */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-green-600 p-3 rounded-xl text-white flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Mock Interviews (3 rounds)
              </h3>
              <p className="text-gray-600">
                **Technical and HR rounds** with feedback
              </p>
            </div>
          </div>

          {/* Module 3: HR Communication & Aptitude */}
          <div className="flex items-start gap-4 p-4 rounded-xl transition duration-300">
            <div className="bg-yellow-600 p-3 rounded-xl text-white flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                HR Communication & Aptitude
              </h3>
              <p className="text-gray-600">
                **Communication skills** and aptitude training
              </p>
            </div>
          </div>
        </div>

        {/* Right - Job Guarantee & Partnerships */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-blue-500">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Job Guarantee & Partnerships
            </h2>
          </div>

          {/* 100% Job Guarantee */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700">
                100% Job Guarantee
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                Extended internship until placement
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                Company partnerships for internships
              </li>
            </ul>
          </div>
          
          {/* Internship Opportunity */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-blue-700">
                Internship Opportunity
              </h3>
            </div>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                2-month guaranteed internship
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                Project showcase for recruiters
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}