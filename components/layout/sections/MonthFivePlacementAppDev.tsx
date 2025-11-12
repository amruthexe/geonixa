"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  MessageSquare,
  BriefcaseBusiness,
  ListChecks,
  ClipboardList,
  Smartphone,
  Zap,
  CloudUpload,
  ShieldCheck,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthFivePlacementAppDev() {
  return (
    <section
      className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">
          Month 5:{" "}
          <span className="text-orange-700">Placement Accelerator (App Dev)</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Final phase focused on converting projects into placements for mobile app roles.
        </p>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-gradient-to-r from-amber-400 to-orange-700 rounded-full"></div>
      </motion.header>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left - Key Modules (App Dev focused) */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Modules</h2>
          </div>

          {/* Module 1: Resume + ATS Optimization (App-focused) */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-orange-600 p-3 rounded-xl text-white flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Resume + ATS Optimization (App Roles)
              </h3>
              <p className="text-gray-600">
                Tailor resumes for mobile-engineer jobs — highlight native modules, performance, and releases.
              </p>
            </div>
          </div>

          {/* Module 2: Mock Interviews (Technical & System Design) */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-700 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Mock Interviews (3 rounds)</h3>
              <p className="text-gray-600">
                Mobile-specific technical rounds, system-design for apps, and HR with real interviewer feedback.
              </p>
            </div>
          </div>

          {/* Module 3: HR Communication, Aptitude & Offer Prep */}
          <div className="flex items-start gap-4 p-4 rounded-xl transition duration-300">
            <div className="bg-amber-400 p-3 rounded-xl text-white flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">HR Communication & Offer Prep</h3>
              <p className="text-gray-600">
                Salary negotiation, offer comparison, HR etiquette, and soft-skill drills for client/stakeholder calls.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Job Guarantee, Internships & Partnerships (App-focused) */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-orange-300 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Job Guarantee & Partnerships</h2>
          </div>

          {/* 100% Job Guarantee */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-700">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700">100% Job Guarantee</h3>
            </div>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Extended internship until placement (app-focused projects)
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Partnerships with startups & product teams hiring mobile engineers
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Dedicated placement manager & interview tracker
              </li>
            </ul>
          </div>

          {/* Internship Opportunity */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-700">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700">Internship Opportunity</h3>
            </div>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                2–3 month guaranteed internship with hands-on app ownership
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Product demo days — invite recruiters & hiring partners
              </li>
            </ul>
          </div>

          {/* Extra: Placement Support Stack */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Placement Support Stack</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <Smartphone className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">App Demos & Play Store Links</p>
                  <p className="text-xs text-gray-600">Publish short demos for recruiters to test quickly</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <CloudUpload className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">CI / EAS Build Support</p>
                  <p className="text-xs text-gray-600">Help with builds, signing & OTA releases</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <Zap className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Performance Tuning</p>
                  <p className="text-xs text-gray-600">App size, startup time, and animation smoothness</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Security Checklist</p>
                  <p className="text-xs text-gray-600">Secure storage, auth flows, & API best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span> Job-ready
          mobile engineers with production apps, demo links, and placement support.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 5, students will have interview experience, live app demos, and active placement channels.
        </p>
      </div>
    </section>
  );
}
