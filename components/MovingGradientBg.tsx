// components/MovingGradientBg.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * A sleek, animated gradient background component using Framer Motion.
 * It provides a dynamic, light-moving effect suitable for a modern design.
 */
export function MovingGradientBg() {
  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        repeat: Infinity,
        duration: 15, // Slower for a subtle, premium feel
        ease: "linear",
        repeatType: "reverse",
      }}
      // Define a very light, wide-ranging gradient
      style={{
        background:
          "linear-gradient(-45deg, #f0f0f5, #ffffff, #e0e0e5, #ffffff)",
        backgroundSize: "400% 400%", // Ensures a large, slow-moving effect
      }}
    />
  );
}