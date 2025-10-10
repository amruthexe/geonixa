"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  { label: "First Class", icon: "🏆" },
  { label: "Daily Practice & Weekly Challenges", icon: "💻" },
  { label: "Real-World Projects", icon: "📚" },
  { label: "Career Readiness Review (CRPR)", icon: "🎯" },
  { label: "Placement Support", icon: "🛠️" },
  { label: "Interviews & Offers", icon: "🎉" },
];

const images = [
  "/vimp1.jpg",
  "/vimp2.png",
  "/vimp3.png",
  "/vimp4.png",
  "/vimp5.png",
  "/vimp6.png",
]; // put your images in public/ folder

export default function Journey() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-white py-10 px-6">
      {/* Left: Image Slideshow */}
      <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={images[current]}
          alt={steps[current].label}
          fill
          className="object-cover transition-all duration-700"
        />
        {/* Fade-in animation */}
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        />
      </div>

      {/* Right: Progress Steps */}
      <div className="flex flex-col gap-5 w-full md:w-1/3">
        <h2 className="text-3xl md:text-4xl text-[#eb4917] text-center font-bold mb-4">
          Your Journey At <span className="text-3xl md:text-4xl text-[#eb4917] text-center font-bold mb-4">GEO NIXA</span>
        </h2>
        <p className="text-gray-600 text-sm">
          Daily practice, hands-on projects, and consistent feedback – your
          growth depends on the energy and effort you bring in every single day.
        </p>

        <div className="mt-4 space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: index === current ? 1 : 0.4 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div
                className={`text-2xl ${
                  index === current ? "opacity-100" : "opacity-50"
                }`}
              >
                {step.icon}
              </div>
              <div
                className={`text-base font-medium ${
                  index === current ? "text-orange-600" : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <motion.div
            className="bg-orange-500 h-2 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
