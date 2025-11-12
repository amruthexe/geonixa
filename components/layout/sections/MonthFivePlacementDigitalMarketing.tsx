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
  CloudUpload,
  BarChart,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthFivePlacementDigitalMarketing(): JSX.Element {
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
          <span className="text-orange-700">Placement Accelerator (Digital Marketing)</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Final phase — convert skills & campaigns into interviews, offers and client wins.
        </p>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-gradient-to-r from-amber-400 to-orange-700 rounded-full"></div>
      </motion.header>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Left: Placement Modules */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Placement Modules</h2>
          </div>

          {/* Resume & Portfolio */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-orange-600 p-3 rounded-xl text-white flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Resume & Campaign Portfolio</h3>
              <p className="text-gray-600">
                ATS-friendly resumes tailored to marketing roles + campaign portfolio with case studies, live links & metrics.
              </p>
            </div>
          </div>

          {/* Mock Interviews */}
          <div className="flex items-start gap-4 mb-6 p-4 rounded-xl transition duration-300">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-700 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Mock Interviews (3 rounds)</h3>
              <p className="text-gray-600">
                Role-specific rounds: performance marketing, analytics deep-dive, and HR — with recorded feedback.
              </p>
            </div>
          </div>

          {/* HR Communication & Negotiation */}
          <div className="flex items-start gap-4 p-4 rounded-xl transition duration-300">
            <div className="bg-amber-400 p-3 rounded-xl text-white flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">HR Communication & Offer Prep</h3>
              <p className="text-gray-600">
                Salary negotiation scripts, offer comparison, and stakeholder communication for agency & in-house roles.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Job Guarantee & Support Stack */}
        <div className="relative bg-white shadow-xl rounded-2xl p-8 border-t-4 border-orange-300 hover:shadow-2xl transition">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Job Guarantee & Support</h2>
          </div>

          {/* 100% Job Guarantee */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-700">
                <BriefcaseBusiness className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700">100% Job Support</h3>
            </div>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Extended internship until placement (campaign ownership).
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Hiring partner introductions (agencies & startups).
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Dedicated placement manager & interview tracking.
              </li>
            </ul>
          </div>

          {/* Internship & Demo Days */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-700">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-orange-700">Internship & Demo Days</h3>
            </div>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                2–3 month guaranteed internship with campaign ownership.
              </li>
              <li className="flex items-start text-lg text-gray-700">
                <ListChecks className="w-5 h-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                Product & campaign demo days — invite hiring partners.
              </li>
            </ul>
          </div>

          {/* Placement Support Stack */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Placement Support Stack</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <Smartphone className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Campaign Demos & Case Links</p>
                  <p className="text-xs text-gray-600">Short demo reels, dashboard links & campaign results for recruiters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <CloudUpload className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Portfolio Hosting</p>
                  <p className="text-xs text-gray-600">Hosted campaign pages, dashboards & downloadable case studies.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <BarChart className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Interview KPI Sheets</p>
                  <p className="text-xs text-gray-600">Prepped metrics, ROAS / CTR / LTV summaries for interviews.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-orange-600 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Offer Negotiation Support</p>
                  <p className="text-xs text-gray-600">Guidance on compensation, role fit and contract terms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span> Job-ready digital marketers with live campaigns, interview experience, and active placement channels.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 5, students will have recorded mock interviews, campaign demos, and active introductions to hiring partners.
        </p>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          <Award className="w-5 h-5" />
          <span>Apply for Placement Accelerator</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
}
