"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const features = [
  {
    image: "/img1.png",
    title: "Learn from scratch",
    desc: "No prior coding experience needed — we teach you from the basics.",
  },
  {
    image: "/img2.png",
    title: "Personal Mentoring",
    desc: "Personalized attention to help you grow faster.",
  },
  {
    image: "/img3.png",
    title: "Real-Time Trainers",
    desc: "Learn from top real-world industry experts.",
  },
  {
    image: "/img4.png",
    title: "Regular Mock Tests",
    desc: "Practice mock interviews to ace the real ones.",
  },
  {
    image: "/img5.png",
    title: "Student Dashboard",
    desc: "Track your learning and interview progress easily.",
  },
];

export default function WhyJoinGeoNixa() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#eb4917]  mb-3">
          Why join <span className="text-[#eb4917] ">GeoNixa?</span>
        </h2>

        {/* Google Reviews */}
        <div className="flex items-center justify-center gap-2 text-gray-700">
          <Image
            src="/google.png"
            alt="Google Logo"
            width={30}
            height={30}
          />
          <p className="font-medium text-gray-800">Google Reviews</p>
          <div className="flex items-center text-yellow-500">
            <span className="font-bold text-lg mr-1">4.8</span>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
          </div>
        </div>
      </div>

      {/* Cards + Arrows */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 relative group"
          >
            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden w-[260px] md:w-[230px] transition-all"
            >
              <div className="relative w-full h-[220px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-[#eb4917] ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">{item.desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Arrow (hide last arrow) */}
            {index < features.length - 1 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex"
              >
                <ArrowRight className="text-gray-500 w-6 h-6" />
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Background pattern (optional aesthetic) */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('/pattern-bg.png')] bg-center bg-repeat" />
    </section>
  );
}
