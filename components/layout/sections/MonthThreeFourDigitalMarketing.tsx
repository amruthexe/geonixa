"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  ShoppingCart,
  Mail,
  Users,
  Globe,
  Database,
  Zap,
  Calendar,
  Settings,
  PieChart,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthThreeFourDigitalMarketing(): JSX.Element {
  return (
    <section className={`${poppins.className} bg-gradient-to-br from-orange-50 via-white to-orange-100 py-20 px-6`}>
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-3 tracking-tight">
          Month 3–4: <span className="text-orange-700">Paid Media, Analytics & Growth</span>
        </h1>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-orange-500 rounded-full" />
      </motion.header>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left: Paid Media & Analytics */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-700">
              <BarChart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Paid Media & Analytics</h2>
          </div>

          {/* Core Topics */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingCart className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Google Ads</h4>
              </div>
              <p className="text-sm text-gray-600">Search, Performance Max, Shopping campaigns & bidding strategies.</p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Meta Ads</h4>
              </div>
              <p className="text-sm text-gray-600">Creative testing, audiences, and scaling strategies for Facebook & Instagram.</p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Email & CRO</h4>
              </div>
              <p className="text-sm text-gray-600">Funnel emails, nurture sequences and conversion rate optimization experiments.</p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Analytics & Tagging</h4>
              </div>
              <p className="text-sm text-gray-600">GA4, GTM, event tracking, attribution models and dashboarding.</p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-orange-700 font-semibold mb-3 text-lg flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" /> Tools & Platforms
            </h3>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex flex-col gap-3 shadow-sm">
              <div className="text-sm text-gray-700">Google Ads, Meta Ads Manager, Google Analytics 4, Google Tag Manager</div>
              <div className="text-sm text-gray-700">Hotjar / FullStory, Optimizely / VWO, Email tools (Mailchimp/SendGrid)</div>
            </div>
          </div>
        </div>

        {/* Right: Growth Projects & Experiments */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Growth Projects & Experiments</h2>
          </div>

          {/* Major Projects */}
          <div className="mb-6">
            <h3 className="text-green-700 font-semibold mb-3 text-lg">Major Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">E-commerce Campaign</h4>
                </div>
                <p className="text-xs text-gray-600">ROAS-driven campaign with product feed & conversion tracking.</p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <PieChart className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">Growth Experiment</h4>
                </div>
                <p className="text-xs text-gray-600">Design A/B tests to increase conversion and retention.</p>
              </div>
            </div>
          </div>

          {/* Working Format & Deployment */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" /> Working Format
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Campaign sprints</li>
                <li>Weekly experiments & retros</li>
                <li>Client briefs & reporting</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-600" /> Reporting & Dashboards
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>GA4 + Looker Studio dashboards</li>
                <li>Automated weekly reports</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span> Campaign-level expertise in paid media, tracking, and growth experiments.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 4, students can run optimized campaigns, set up event-driven analytics, and design experiments that move KPIs.
        </p>
      </div>
    </section>
  );
}
