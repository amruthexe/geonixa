"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Database,
  Lock,
  Send,
  Smartphone,
  Cpu,
  Wrench,
  GitBranch,
  Server,
  CloudUpload,
  Rocket,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthThreeFourAppDev() {
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
          Month 3–4:{" "}
          <span className="text-orange-700">
            Backend Integration & Native Modules
          </span>
        </h1>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-orange-500 rounded-full" />
      </motion.header>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Backend Integration */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-700">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Backend Integration
            </h2>
          </div>

          {/* Topics */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">REST & GraphQL APIs</h4>
              </div>
              <p className="text-sm text-gray-600">
                Learn to fetch data using Axios / Fetch & integrate real APIs.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Firebase / Supabase</h4>
              </div>
              <p className="text-sm text-gray-600">
                Realtime databases, authentication & cloud storage.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Auth & Security</h4>
              </div>
              <p className="text-sm text-gray-600">
                Implement secure sign-in flows & JWT-based auth.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">API Testing</h4>
              </div>
              <p className="text-sm text-gray-600">
                Use Postman / ThunderClient for endpoint debugging.
              </p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-orange-700 font-semibold mb-3 text-lg flex items-center gap-2">
              <Send className="w-5 h-5 text-orange-600" /> Tools
            </h3>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center gap-2 shadow-sm">
              <Code2 className="w-4 h-4 text-orange-700" />
              <p className="text-sm text-gray-700">
                Postman, Firebase CLI, Supabase Studio
              </p>
            </div>
          </div>
        </div>

        {/* Native Modules & Real Projects */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <BriefcaseBusiness className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Native Modules & Projects
            </h2>
          </div>

          {/* Major Projects */}
          <div className="mb-6">
            <h3 className="text-green-700 font-semibold mb-3 text-lg">
              Major Projects:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Chat & Messaging App
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Real-time chat with Firebase / Supabase backend + push notifications.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Expense Tracker App
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Manage & analyze spending with local DB and charts.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Format / Deployment */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-green-600" /> Learning Format
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Pair programming</li>
                <li>Code reviews</li>
                <li>Agile sprint cycles</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <CloudUpload className="w-5 h-5 text-green-600" /> Deployment
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Expo EAS build & OTA updates</li>
                <li>Play Store / TestFlight release</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span>{" "}
          Strong skills in API integration, native modules & app deployment.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 4, students can build and publish production-ready mobile apps.
        </p>
      </div>
    </section>
  );
}
