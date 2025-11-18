"use client";

import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { Users, Rocket, Gift, ShieldCheck } from "lucide-react";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StudentAmbassadorDark() {
  return (
    <section
      className={`${poppins.className}  py-20 px-6 sm:px-12 lg:px-20 my-8`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-orange-500/20 bg-black backdrop-blur-xl shadow-[0_0_40px_rgba(234,88,12,0.25)] p-12"
      >
        {/* 🔥 Blinking Status */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-orange-500 blinking-dot shadow-[0_0_10px_rgba(234,88,12,0.7)]"></span>
          <p className="text-sm text-orange-400 font-medium">
            Applications Open
          </p>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Student <span className="text-orange-400">Ambassador Program</span>
          </h2>
          <p className="text-white mt-4 max-w-2xl mx-auto text-lg">
            Represent Geonixa in your college, organize events, earn rewards,
            and build your leadership journey with exclusive perks.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            whileHover={{ scale: 1.07 }}
            className="p-6 bg-zinc-800/40 border border-orange-500/30 rounded-2xl text-center shadow-lg"
          >
            <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h4 className="text-white font-semibold text-xl">Campus Leader</h4>
            <p className="text-zinc-400 text-sm mt-2">
              Host workshops & events in your college.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="p-6 bg-zinc-800/40 border border-orange-500/30 rounded-2xl text-center shadow-lg"
          >
            <Rocket className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h4 className="text-white font-semibold text-xl">
              Career Growth
            </h4>
            <p className="text-zinc-400 text-sm mt-2">
              Build leadership, marketing & management skills.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="p-6 bg-zinc-800/40 border border-orange-500/30 rounded-2xl text-center shadow-lg"
          >
            <Gift className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h4 className="text-white font-semibold text-xl">
              Exclusive Rewards
            </h4>
            <p className="text-zinc-400 text-sm mt-2">
              Earn merchandise, badges, bonuses & certificates.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.07 }}
            className="p-6 bg-zinc-800/40 border border-orange-500/30 rounded-2xl text-center shadow-lg"
          >
            <ShieldCheck className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h4 className="text-white font-semibold text-xl">
              Verified Status
            </h4>
            <p className="text-zinc-400 text-sm mt-2">
              Become a certified Geonixa Student Ambassador.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/ambassador/apply">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-4 bg-orange-500 text-black font-semibold rounded-full text-lg shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-400 transition"
            >
              Apply Now
            </motion.button>
          </Link>

          <p className="text-xs text-zinc-500 mt-3">
            Only for enthusiastic & active students.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
