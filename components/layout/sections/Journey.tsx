"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  { label: "First Class", icon: "🏆", description: "Kickoff — orientation and roadmap." },
  { label: "Daily Practice & Weekly Challenges", icon: "💻", description: "Small daily tasks + weekly challenges." },
  { label: "Real-World Projects", icon: "📚", description: "Build portfolio-grade projects." },
  { label: "Career Readiness Review (CRPR)", icon: "🎯", description: "Polish resume & interview prep." },
  { label: "Placement Support", icon: "🛠️", description: "Apply to relevant roles with guidance." },
  { label: "Interviews & Offers", icon: "🎉", description: "Crack interviews — celebrate offers." },
];

const images = [
  "/vimp1.jpg",
  "/vimp2.png",
  "/vimp3.png",
  "/vimp4.png",
  "/vimp5.png",
  "/vimp6.png",
];

export default function Journey() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = window.setInterval(() => {
        setCurrent((s) => (s + 1) % steps.length);
      }, 2500);
    }
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goto = (i: number) => {
    setCurrent(i);
    // reset interval to avoid instant switch
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
      setPaused(true);
      setTimeout(() => setPaused(false), 2500);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="rounded-3xl bg-gradient-to-br from-orange-50 via-white to-orange-100 border border-orange-100 shadow-lg p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT — Image display with thumbnails */}
         {/* LEFT — Image display with thumbnails */}
<div
  className="relative w-full flex flex-col items-center overflow-hidden"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>

  {/* layered frames — FIXED: removed negative positions */}
  <div className="relative w-full max-w-md md:max-w-lg mx-auto">
    <div className="absolute left-0 top-0 w-full h-full rounded-3xl bg-white/30 blur-sm" />
    <div className="absolute right-0 bottom-0 w-full h-full rounded-3xl border border-orange-100" />

    <div className="relative rounded-3xl overflow-hidden shadow-xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[320px] md:h-[420px]"
        >
          <Image
            src={images[current]}
            alt={steps[current].label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>

  {/* thumbnails — FIXED: wrap + prevent overflow */}
  <div className="mt-5 flex gap-3 items-center flex-wrap justify-center w-full">
    {images.map((img, idx) => (
      <button
        key={img}
        onClick={() => goto(idx)}
        aria-label={`Show ${steps[idx].label}`}
        className={`w-14 h-10 rounded-xl overflow-hidden border transition-transform 
          ${idx === current
            ? "ring-2 ring-offset-2 ring-orange-300 scale-105"
            : "border-transparent hover:scale-105"}`}
      >
        <Image
          src={img}
          alt={`thumb-${idx}`}
          width={80}
          height={60}
          className="object-cover w-full h-full"
        />
      </button>
    ))}
  </div>
</div>

          {/* RIGHT — Steps and progress */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#eb4917]">
              Your Journey at GeoNixa
            </h2>
            <p className="mt-3 text-gray-600 max-w-md">
              A clear, guided path from learning to landing a job — daily practice,
              real projects & placement support designed to build confidence and results.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4">
              {steps.map((s, i) => {
                const active = i === current;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0.7, y: 4 }}
                    animate={{ opacity: active ? 1 : 0.7, y: 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex items-center gap-4 p-3 rounded-2xl cursor-pointer transition-shadow ${
                      active ? "bg-white shadow-md border border-orange-100" : "bg-transparent"
                    }`}
                    onClick={() => goto(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === "Enter" ? goto(i) : null)}
                  >
                    <div className={`w-12 h-12 flex items-center justify-center rounded-xl text-lg ${active ? "bg-[#fff2ec] text-[#eb4917]" : "bg-orange-50 text-orange-500"}`}>
                      <span aria-hidden>{s.icon}</span>
                    </div>

                    <div className="flex-1">
                      <div className={`font-semibold ${active ? "text-gray-900" : "text-gray-600"}`}>
                        {s.label}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">{s.description}</div>
                    </div>

                    {/* circular progress for each step */}
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg viewBox="0 0 36 36" className="w-10 h-10">
                        <path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#f3f4f6"
                          strokeWidth="2.5"
                        />
                        <motion.path
                          d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#eb4917"
                          strokeWidth="2.5"
                          strokeDasharray={`${Math.round(((i < current ? 100 : i === current ? 60 : 10)))} 100`}
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: i < current ? 1 : i === current ? 0.6 : 0.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      </svg>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* progress summary */}
            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Step {current + 1} of {steps.length}
              </div>

              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-600">Progress</div>
                <div className="w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#eb4917]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((current + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
