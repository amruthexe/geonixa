"use client";

import React, { ReactNode, useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useInView } from "framer-motion";
import {
  BookOpen, Server, FileText, Zap, Mail, Slack, Cpu, Layers, CheckCircle, Users,
} from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

function IconCircle({ children }: { children: ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shadow-sm">
      {children}
    </div>
  );
}

function ToolBadge({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white border border-orange-100 rounded-lg shadow-sm w-28">
      <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600">{icon}</div>
      <div className="text-sm text-gray-800 font-medium text-center">{label}</div>
    </div>
  );
}

export default function ToolsPlatform() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const container = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { when: "beforeChildren", staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } };

  return (
    <section ref={ref} className={`${poppins.className} container px-6 sm:px-12 lg:px-20 py-12`}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={container}>
        <div className="flex items-center gap-4 mb-6">
          <motion.h2 variants={item} className="text-3xl md:text-4xl font-extrabold text-gray-900">Tools & Platform Access</motion.h2>
          <motion.div variants={item} className="w-16 h-1 bg-orange-500 rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Learning Management */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 p-6 shadow-md">
            <div className="flex items-start gap-4">
              <IconCircle>
                <Server className="w-5 h-5" />
              </IconCircle>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Learning Management</h3>
                </div>

                <div className="inline-block mt-3 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full">LIFETIME ACCESS</div>

                <p className="mt-4 text-sm text-gray-600">GEONIXA LMS Portal</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                    <span>Access to all recorded sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                    <span>Course materials and resources</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-1" />
                    <span>Progress tracking and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Project Collaboration */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 p-6 shadow-md">
            <div className="flex items-start gap-4">
              <IconCircle>
                <Layers className="w-5 h-5" />
              </IconCircle>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Project Collaboration</h3>
                <p className="text-sm text-gray-600 mt-3">Project Tools</p>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <ToolBadge icon={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor"><rect x="3" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#F97316"/><rect x="14" y="4" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#F97316"/><rect x="3" y="13" width="7" height="7" rx="1" strokeWidth="1.8" stroke="#F97316"/></svg>} label="Trello" />

                  <ToolBadge icon={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor"><path d="M3 7h18M3 12h14M3 17h10" strokeWidth="1.8" stroke="#F97316"/></svg>} label="Google Workspace" />

                  <ToolBadge icon={<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor"><path d="M4 5h16v14H4z" strokeWidth="1.8" stroke="#F97316"/><path d="M8 9h8" strokeWidth="1.6" stroke="#F97316"/></svg>} label="Notion" />
                </div>
              </div>
            </div>
          </motion.article>

          {/* AI Integration */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 p-6 shadow-md">
            <div className="flex items-start gap-4">
              <IconCircle>
                <Cpu className="w-5 h-5" />
              </IconCircle>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                <p className="text-sm text-gray-600 mt-3">AI-Powered Learning Tools</p>

                <ul className="mt-4 space-y-3">
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <Zap className="w-4 h-4 text-orange-500 mt-1" />
                    <span>ChatGPT & Copilot</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-gray-700">
                    <FileText className="w-4 h-4 text-orange-500 mt-1" />
                    <span>AI Resume Builder</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.article>

          {/* Communication */}
          <motion.article variants={item} className="rounded-xl bg-gradient-to-br from-white via-orange-50 to-orange-25 border border-orange-100 p-6 shadow-md">
            <div className="flex items-start gap-4">
              <IconCircle>
                <Mail className="w-5 h-5" />
              </IconCircle>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">Communication</h3>
                <p className="text-sm text-gray-600 mt-3">Connect With Mentors</p>

                <div className="mt-4 flex items-center gap-3 flex-wrap">
                  <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-md shadow-sm">
                    <Mail className="w-4 h-4 text-orange-600" /> <span className="text-sm text-gray-800">Email</span>
                  </motion.button>

                  <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-md shadow-sm">
                    <Slack className="w-4 h-4 text-orange-600" /> <span className="text-sm text-gray-800">Slack</span>
                  </motion.button>

                  <motion.button whileHover={{ scale: 1.02 }} className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-100 rounded-md shadow-sm">
                    <BookOpen className="w-4 h-4 text-orange-600" /> <span className="text-sm text-gray-800">LMS Portal</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
