// app/components/LmsAnnouncement.tsx (or /components/LmsAnnouncement.tsx)
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Megaphone } from "lucide-react";

export default function LmsAnnouncement() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // Increased max-width here
      className="w-full px-4 sm:px-6 lg:px-8 mt-6"
    >
      {/* Changed max-w-5xl to max-w-6xl for overall width increase */}
      {/* Enhanced border to border-2 for a more noticeable frame */}
      <div className="max-w-6xl mx-auto rounded-3xl bg-black border-2 border-orange-500/80 shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          
          {/* Left side – text */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/40 px-3 py-1 text-xs sm:text-sm text-orange-400 mb-4">
              <Megaphone className="w-4 h-4" />
              <span>New for Geonixa students</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Geonixa LMS is <span className="text-orange-400">now live</span> 🚀
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
              You can now access all your course videos, session recordings, notes, and resources
              directly from our new LMS platform. Learn anytime, anywhere with your own dashboard.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="https://lms.geonixa.com"
                target="_blank"
                // Added border and scale-105 on hover for better styling
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 text-black font-semibold text-sm sm:text-base shadow-xl shadow-orange-500/40 hover:bg-orange-400 transition transform hover:scale-105 border border-orange-600"
              >
                Go to LMS
                <span className="ml-2 text-xs sm:text-sm opacity-80">lms.geonixa.com</span>
              </Link>

              <p className="text-xs sm:text-sm text-gray-400">
                Login with your registered email to see your enrolled courses.
              </p>
            </div>
          </div>

          {/* Right side – graphic / highlight */}
          {/* Increased width from md:w-64 lg:w-80 to md:w-72 lg:w-96 */}
          {/* Adjusted gradient for a more cohesive look */}
          <div className="md:w-72 lg:w-96 bg-gradient-to-br from-orange-600/90 via-orange-700/80 to-orange-900 flex items-center justify-center p-6 sm:p-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="relative w-full max-w-xs"
            >
              <div className="rounded-2xl bg-black/70 border border-orange-300/40 px-4 py-4 sm:px-5 sm:py-5 text-white">
                <p className="text-xs uppercase tracking-wide text-orange-300 mb-2">
                  Geonixa • LMS
                </p>
                <p className="text-sm sm:text-base font-semibold text-orange-100">
                  Access courses, watch recordings, and view notes in one place.
                </p>
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-gray-200">
                  <p>🎬 Recorded sessions</p>
                  <p>📝 Topic-wise notes</p>
                  <p>🔗 Notion resources</p>
                  <p>📊 Your own dashboard</p>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 bg-black text-orange-400 text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full border border-orange-400/70 shadow-lg">
                For Geonixa Students
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}