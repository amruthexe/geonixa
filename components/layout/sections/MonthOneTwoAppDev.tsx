"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Cpu,
  GitBranch,
  AppWindow,
  Rocket,
  Wrench,
  Layers,
  Cloud,
  Flag,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthOneTwoAppDev() {
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
          <span className="text-orange-700">
            App Development Foundation & UI Mastery
          </span>
        </h1>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-orange-500 rounded-full"></div>
      </motion.header>

      {/* Cards container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Month 1 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-700">
              <Flag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Month 1: App Dev Foundation
            </h2>
          </div>

          {/* Topics */}
          <div className="mb-6">
            <h3 className="text-orange-700 font-semibold mb-3 text-lg">
              Topics Covered:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Code className="w-4 h-4 text-orange-600" />
                <span>JavaScript (ES6+) & TypeScript Basics</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-orange-600" />
                <span>React Native & Expo Setup</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-orange-600" />
                <span>Mobile UI Components & Layouts (Flexbox)</span>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-orange-600" />
                <span>Git, GitHub & Version Control</span>
              </li>
              <li className="flex items-center gap-2">
                <AppWindow className="w-4 h-4 text-orange-600" />
                <span>Debugging with Expo Go & Emulator Setup</span>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-orange-700 font-semibold mb-3 text-lg">
              Projects Built:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Smartphone className="w-4 h-4 text-orange-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Hello Mobile App
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  First React Native app with Expo setup
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Rocket className="w-4 h-4 text-orange-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    To-Do App
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Task manager using React Native state & components
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Month 2 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <Flag className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Month 2: UI & Native Mastery
            </h2>
          </div>

          {/* Topics */}
          <div className="mb-6">
            <h3 className="text-green-700 font-semibold mb-3 text-lg">
              Topics Covered:
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-green-600" />
                <span>React Navigation (Stack, Tabs)</span>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-green-600" />
                <span>Using Native APIs (Camera, Storage, Sensors)</span>
              </li>
              <li className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-green-600" />
                <span>API Integration (Axios / Fetch)</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-green-600" />
                <span>Animations with Reanimated & Moti</span>
              </li>
              <li className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-green-600" />
                <span>App Deployment with Expo & EAS</span>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-green-700 font-semibold mb-3 text-lg">
              Projects Built:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-4 h-4 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Fitness Tracker
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  App with API data & animations for stats
                </p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex flex-col shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Cloud className="w-4 h-4 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Weather App
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  API-based weather forecast with UI transitions
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span> Solid
          foundation in React Native & modern app development
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 2, students can build and deploy real cross-platform apps.
        </p>
      </div>
    </section>
  );
}
