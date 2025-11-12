"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  Lock,
  Send,
  ShoppingCart,
  BriefcaseBusiness,
  Users,
  MessageSquare,
  ListChecks,
  GitBranch,
  Cloud,
  Code2,
} from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function MonthThreeFour() {
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
            Backend Development & Real Projects
          </span>
        </h1>
        <div className="mx-auto mt-3 w-20 h-1.5 bg-orange-500 rounded-full"></div>
      </motion.header>

      {/* Content Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Left - Backend Development */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-orange-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-orange-100 p-3 rounded-full text-orange-700">
              <Server className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Backend Development
            </h2>
          </div>

          {/* Core Technologies */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Node.js</h4>
              </div>
              <p className="text-sm text-gray-600">
                JavaScript runtime for building scalable backend services.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Server className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Express.js</h4>
              </div>
              <p className="text-sm text-gray-600">
                Lightweight web framework for APIs and backend apps.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">MongoDB</h4>
              </div>
              <p className="text-sm text-gray-600">
                NoSQL database for storing and managing application data.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lock className="w-5 h-5 text-orange-700" />
                <h4 className="font-semibold text-gray-900">Authentication</h4>
              </div>
              <p className="text-sm text-gray-600">
                JWT-based authentication system for secure user access.
              </p>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-orange-700 font-semibold mb-3 text-lg flex items-center gap-2">
              <Send className="w-5 h-5 text-orange-600" /> Tools
            </h3>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-3 flex items-center gap-2 shadow-sm">
              <Send className="w-4 h-4 text-orange-700" />
              <p className="text-sm text-gray-700">Postman for API testing</p>
            </div>
          </div>
        </div>

        {/* Right - Real Projects */}
        <div className="relative bg-white shadow-lg rounded-2xl p-8 border-t-4 border-green-500 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 p-3 rounded-full text-green-700">
              <BriefcaseBusiness className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Real Projects
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
                  <ShoppingCart className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    E-Commerce Website
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Full-stack e-commerce platform with user authentication,
                  product management & payment integration.
                </p>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <BriefcaseBusiness className="w-5 h-5 text-green-700" />
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Online Job Finder Platform
                  </h4>
                </div>
                <p className="text-xs text-gray-600">
                  Job portal app with employer listings, job applications, and
                  user management.
                </p>
              </div>
            </div>
          </div>

          {/* Learning Format */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" /> Learning Format
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Team projects</li>
                <li>Daily stand-ups</li>
                <li>Sprint reviews</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-100 rounded-xl p-4 shadow-sm">
              <h4 className="text-green-700 font-semibold mb-2 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-green-600" /> Deployment
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>GitHub hosting</li>
                <li>Netlify / Vercel deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Outcome */}
      <div className="text-center mt-12 max-w-3xl mx-auto">
        <p className="text-gray-700 font-medium">
          <span className="text-orange-700 font-semibold">Outcome:</span>{" "}
          Hands-on backend experience and full-stack project development skills.
        </p>
        <p className="text-sm text-gray-500 mt-1">
          By the end of Month 4, students can build and deploy complete MERN
          applications.
        </p>
      </div>
    </section>
  );
}
