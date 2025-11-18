"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "/icons/react.png",
    title: "React Development",
    desc: "Master modern UI development with reusable components.",
  },
  {
    icon: "/icons/python.png",
    title: "Python Programming",
    desc: "Learn automation, backend, AI, and industry-level scripting.",
  },
  {
    icon: "/icons/java.png",
    title: "Java Foundations",
    desc: "Build a strong OOP backbone with enterprise-level skills.",
  },
  {
    icon: "/icons/js.png",
    title: "JavaScript Essentials",
    desc: "Understand the language powering the modern web.",
  },
];

export default function ProgrammingSection() {
  return (
    <section className="bg-white py-18 mt-12 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#eb4917]">
            Your Path to Modern Programming
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            A structured, practical, and industry-focused learning experience designed
            to take you from beginner to job-ready developer.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex gap-4 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:border-[#eb4917] hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center bg-orange-100 rounded-xl">
                <Image src={f.icon} alt={f.title} width={32} height={32} />
              </div>

              {/* Text */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{f.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
