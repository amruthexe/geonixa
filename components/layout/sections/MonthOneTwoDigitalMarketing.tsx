"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Megaphone,
  Globe,
  FileText,
  BarChart,
  Users,
  Mail,
  Calendar,
  Flag,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthOneTwoDigitalMarketing() {
  return (
    <section
      className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">
          Month 1–2:{" "}
          <span className="text-orange-700">Foundation & Campaign Mastery</span>
        </h1>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-orange-500 rounded-full"></div>
      </motion.header>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Month 1 Card */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-700">
              <Flag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Month 1: Marketing Fundamentals
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-orange-700 font-semibold mb-3 text-lg">
              Topics Covered:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Search className="w-4 h-4 text-orange-600" />
                <span>SEO Basics — On-page & Keyword Research</span>
              </li>
              <li className="flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-orange-600" />
                <span>Intro to Social Media Strategy</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-orange-600" />
                <span>Understanding Funnels & Customer Journeys</span>
              </li>
              <li className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Content Writing & Basics of Copywriting</span>
              </li>
              <li className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-600" />
                <span>Audience Research & Personas</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-700 font-semibold mb-3 text-lg">
              Projects Built:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4 text-orange-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Blog Content Plan
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Keyword-driven content calendar + 1 published blog.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-orange-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Audience Persona Deck
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Detailed buyer personas & messaging matrix.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Month 2 Card */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <Flag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Month 2: Paid Campaigns & Analytics
            </h2>
          </div>

          <div className="mb-6">
            <h3 className="text-green-700 font-semibold mb-3 text-lg">
              Topics Covered:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <MousePointerSVG />
                <span>Google Ads basics — Search & Performance Max</span>
              </li>
              <li className="flex items-center gap-2">
                <Megaphone className="w-4 h-4 text-green-600" />
                <span>Meta Ads — Campaign setup & Creative testing</span>
              </li>
              <li className="flex items-center gap-2">
                <BarChart className="w-4 h-4 text-green-600" />
                <span>Analytics with Google Analytics & Tag Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-600" />
                <span>Email basics — nurture sequences & automation</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-700 font-semibold mb-3 text-lg">
              Projects Built:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Live Ad Campaign
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Small-budget live campaign with tracking & optimization.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <BarChart className="w-4 h-4 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Analytics Dashboard
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Basic GA4 dashboard tracking campaign KPIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome section */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span> Solid
          foundation in digital marketing and hands-on campaign experience
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 2, students can plan content, run basic paid
          campaigns, and analyze results using analytics tools.
        </p>
      </div>
    </section>
  );
}

/* Small inline SVG for click icon because lucide MousePointerClick may not be imported here */
function MousePointerSVG() {
  return (
    <svg className="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 3l7.5 12L11 13l6 6-1.5-4.5L21 3 3 3z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}
