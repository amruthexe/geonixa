"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/react.png",
    title: "Learn React.js",
    desc: "Build dynamic user interfaces and web apps efficiently.",
  },
  {
    icon: "/icons/python.png",
    title: "Master Python",
    desc: "Learn one of the most versatile and beginner-friendly languages.",
  },
  {
    icon: "/icons/java.png",
    title: "Java for Enterprises",
    desc: "Strong OOP foundation and backend development mastery.",
  },
  {
    icon: "/icons/js.png",
    title: "JavaScript Essentials",
    desc: "Power the web with the world’s most popular language.",
  },
];

const orbitLogos = [
  "/icons/html.png",
  "/icons/css.png",
  "/icons/nodejs.png",
  "/icons/sql.png",
  "/icons/cpp.png",
  "/icons/typescript.png",
];

export default function ProgrammingGlobeSection() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-orange-100 text-gray-900 py-16 px-6 md:px-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Certified for a True{" "}
          <span className="text-blue-500">Coding Experience</span>
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
          Empower your learning with our EDTECH platform designed for a real-world programming experience.
        </p>

        <div className="space-y-4">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-start gap-4 bg-white rounded-2xl p-4 shadow-md hover:shadow-xl hover:bg-orange-400 transition"
            >
              <Image src={f.icon} alt={f.title} width={40} height={40} />
              <div>
                <h4 className="text-lg font-semibold">{f.title}</h4>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Globe */}
      <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mt-12 lg:mt-0 flex items-center justify-center">
        {/* Soft glowing background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-orange-500 blur-3xl"></div>

        {/* Orbit rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {orbitLogos.map((logo, index) => {
            const angle = (index / orbitLogos.length) * 2 * Math.PI;
            const radius = 160; // increased radius for better spacing
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={index}
                className="absolute flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] bg-white rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="tech-logo"
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center logo */}
        <div className="absolute flex items-center justify-center w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full border-2  bg-white/60 backdrop-blur-md shadow-md">
          <span className="font-bold text-base sm:text-lg text-black text-center">
            GeoNixa
          
          </span>
        </div>
      </div>
    </section>
  );
}
