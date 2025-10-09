"use client";

import { motion } from "framer-motion";

export default function GeonixaBottom() {
  return (
    <div className="w-full flex justify-center items-center ">
      <motion.h1
        className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-[#eb4917] "
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 3 }}
      >
        Geonixa
      </motion.h1>
    </div>
  );
}
