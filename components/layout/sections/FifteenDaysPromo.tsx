"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { GraduationCap, Clock, Award } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function FifteenDaysPromo() {
  return (
    <section
      className={`${poppins.className} container mx-auto px-6 sm:px-12 lg:px-20 py-16`}
    >
      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-3xl border border-orange-200 shadow-lg p-10 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
          15-Days Certification & Internship Program
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Learn in 15 Days. Build Projects. Earn Certificates. Grow Your Career.
        </p>

        {/* Features Row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Duration */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-orange-100"
          >
            <Clock className="w-10 h-10 text-orange-600 mb-3" />
            <h4 className="font-semibold text-gray-900 text-lg">15 Days</h4>
            <p className="text-sm text-gray-600 mt-1">
              10 Days Learning + 5 Days Project
            </p>
          </motion.div>

          {/* Project */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-orange-100"
          >
            <GraduationCap className="w-10 h-10 text-orange-600 mb-3" />
            <h4 className="font-semibold text-gray-900 text-lg">
              1 Real Project
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Industry-relevant hands-on work
            </p>
          </motion.div>

          {/* Certificates */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white rounded-xl p-6 shadow-sm border border-orange-100"
          >
            <Award className="w-10 h-10 text-orange-600 mb-3" />
            <h4 className="font-semibold text-gray-900 text-lg">
              Dual Certificates
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Course + Internship Recognition
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
    <Link href="/programs/career-pro">
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="mt-10 px-10 py-4 bg-orange-600 rounded-full text-white font-semibold text-lg shadow-lg hover:bg-orange-700"
  >
    Know More
  </motion.button>
</Link>

        <p className="text-xs text-gray-500 mt-3">
          Limited seats. Join the next batch today.
        </p>
      </motion.div>
    </section>
  );
}
