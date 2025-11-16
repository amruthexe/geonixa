"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function UpskillHero() {
  // motion variants for fading in text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i = 0) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        delay: 0.15 * i, 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }),
  };

  // gentle floating animation for decorative image cards
  const float = {
    floatA: {
      y: [0, -8, 0],
      rotate: [0, 1, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
    floatB: {
      y: [0, 6, 0],
      rotate: [0, -1, 0],
      transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32 lg:py-40">
      
      {/* Container for Content and Decorative Images */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Central Content Block (Text and Buttons) */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Heading 1: Upskill with Geonixa */}
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            <span className="inline-block bg-[#eb4917] text-white rounded-xl px-5 py-2 mr-3 align-text-bottom">Upskill</span>
            with Geonixa
          </motion.h1>

          {/* Heading 2: Stay ahead with Trending skills. */}
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            variants={textVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight mt-2"
          >
            Stay ahead with
            <br className="hidden md:inline" />
            <span className="text-[#eb4917]">Trending skills.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            variants={textVariants}
            className="text-gray-600 mt-6 text-xl md:text-2xl"
          >
            Learn today. Lead tomorrow. Grow smarter
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            variants={textVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center"
          >
            <Button
              asChild
              className="w-5/6 sm:w-auto px-10 py-7 text-lg font-bold bg-[#eb4917] hover:bg-[#d43f10] shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl"
            >
              <Link
                href="https://wa.me/919663216581?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
                Book a Demo <ArrowRight className="ml-2 inline-block size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button 
                asChild 
                variant="secondary" 
                className="w-5/6 sm:w-auto px-10 py-7 text-lg font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 shadow-md transition-all duration-300 rounded-xl"
            >
              <Link href="tel:+919663216581">Call Us</Link>
            </Button>
          </motion.div>
        </div>

        {/* Floating Decorative Images (Visible on Tablet and Desktop) */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">

           

           

        </div>
      </div>
      
      {/* Subtle background element (similar to a dotted paper pattern) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #f0f0f0 1px, transparent 0)', backgroundSize: '20px 20px', opacity: 0.2 }} />

    </section>
  );
}