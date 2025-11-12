"use client";
import React from "react";
import {
  Wallet,
  CalendarCheck,
  ReceiptText,
  ShieldCheck,
  HandCoins,
  Users,
  Rocket,
  BarChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function DigitalInvestmentPaymentStructure(): JSX.Element {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  // Adjust numbers here if you want different final fees
  const totalAmount = "₹50,000";
  const registration = "₹5,000";
  const remaining = "₹45,000";
  const emi = "₹15,000 × 3 Months";

  return (
    <section className={`${poppins.className} w-full px-4 py-10 md:py-16 bg-white text-slate-900`}>
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl font-extrabold text-black mb-3 tracking-tight">Digital Marketing — Investment & Payment</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-gradient-to-br from-orange-50 to-white p-6 md:p-8 rounded-xl shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
                <HandCoins size={28} className="text-orange-600" />
                Total Course Fee
              </h3>

              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center pb-2 border-b border-orange-100">
                  <span className="text-slate-600">Total Amount:</span>
                  <span className="font-semibold text-slate-900">{totalAmount}</span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b border-orange-100">
                  <span className="text-slate-600">Registration Fee:</span>
                  <span className="font-semibold text-orange-600">{registration}</span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-800 font-medium">Remaining Balance:</span>
                  <span className="font-bold text-amber-700 text-xl">{remaining}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-orange-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <ReceiptText size={28} className="text-orange-600" />
                Payment Options
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <button type="button" className="flex flex-col items-center gap-3 p-5 rounded-lg border border-orange-100 bg-orange-50 hover:bg-orange-100 transition">
                  <Wallet size={36} className="text-orange-600" />
                  <h4 className="text-lg font-semibold text-slate-900">Full Payment</h4>
                  <p className="text-sm text-slate-600">Pay {totalAmount} upfront</p>
                </button>

                <button type="button" className="flex flex-col items-center gap-3 p-5 rounded-lg border border-orange-100 bg-white hover:bg-orange-50 transition">
                  <CalendarCheck size={36} className="text-orange-600" />
                  <h4 className="text-lg font-semibold text-slate-900">EMI Options</h4>
                  <p className="text-sm text-slate-600">{emi}</p>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-5 flex items-center gap-3">
              <Rocket size={28} className="text-orange-600" />
              Value-Added Skills Included Free
            </h3>

            <div className="space-y-5">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Users size={26} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Live Campaign Experience</h4>
                  <p className="text-sm text-slate-600">Run real paid & organic campaigns with campaign budgets provided.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <BarChart size={26} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Analytics & Dashboards</h4>
                  <p className="text-sm text-slate-600">Hands-on with GA4, Tag Manager & Looker Studio dashboards.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <Rocket size={26} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Google & Meta Certification Prep</h4>
                  <p className="text-sm text-slate-600">Guided certification preparation with real exam practice.</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <ShieldCheck size={26} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-semibold text-slate-900">Placement Support</h4>
                  <p className="text-sm text-slate-600">Interview prep, resume tailoring and recruiter introductions.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="mt-8 p-5 rounded-xl text-center text-lg font-semibold bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-lg border border-orange-600 flex items-center justify-center gap-3">
          <ShieldCheck size={22} className="text-white" />
          100% Placement Assistance after Digital Marketing Course Completion
        </motion.div>
      </div>
    </section>
  );
}
