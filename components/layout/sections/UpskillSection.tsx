"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Sparkles } from "lucide-react";

export default function UpskillHero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32 lg:py-40">
      {/* 🔥 NEW SIDE DESIGNS */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* LEFT ORANGE GLOW */}
        <div className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-[#eb4917]/20 blur-3xl"></div>

        {/* RIGHT ORANGE GLOW */}
        <div className="absolute -right-20 bottom-20 w-80 h-80 rounded-full bg-[#eb4917]/20 blur-3xl"></div>

        {/* TOP RIGHT SHAPE */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-10 right-20 w-36 h-36 bg-gradient-to-br from-orange-200 via-orange-100 to-white rounded-3xl blur-sm opacity-80"
        />

        {/* BOTTOM LEFT SHAPE */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-10 left-16 w-40 h-40 bg-gradient-to-br from-orange-100 via-orange-50 to-white rounded-full blur-md opacity-70"
        />

        {/* Floating small icons */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute left-10 top-1/2 text-[#eb4917]/50"
        >
          <Code size={32} />
        </motion.div>

        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute right-16 top-1/3 text-[#eb4917]/50"
        >
          <Cpu size={34} />
        </motion.div>

        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute right-24 bottom-20 text-[#eb4917]/40"
        >
          <Sparkles size={30} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial="hidden"
            whileInView="show"
            custom={0}
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            <span className="inline-block bg-[#eb4917] text-white rounded-xl px-5 py-2 mr-3 align-text-bottom">
              Upskill
            </span>
            with Geonixa
          </motion.h1>

          <motion.h2
            initial="hidden"
            whileInView="show"
            custom={1}
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-2 text-gray-900 leading-tight"
          >
            Stay ahead with
            <br className="hidden md:inline" />
            <span className="text-[#eb4917]">Trending skills.</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            custom={2}
            variants={textVariants}
            className="text-gray-600 mt-6 text-xl md:text-2xl"
          >
            Learn today. Lead tomorrow. Grow smarter.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            custom={3}
            variants={textVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          >
            <Button
              asChild
              className="w-5/6 sm:w-auto px-10 py-7 text-lg font-bold bg-[#eb4917] hover:bg-[#d43f10] shadow-lg hover:shadow-xl rounded-xl transition"
            >
              <Link href="https://wa.me/919390514374?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20demo.">
                Book a Demo{" "}
                <ArrowRight className="ml-2 inline-block size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 sm:w-auto px-10 py-7 text-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 shadow-md rounded-xl"
            >
              <Link href="tel:+919390514374">Call Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Dotted pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10"
           style={{
             backgroundImage:
               "radial-gradient(circle at 50% 50%, #eaeaea 1px, transparent 0)",
             backgroundSize: "22px 22px",
             opacity: 0.16,
           }}
      />
    </section>
  );
}
