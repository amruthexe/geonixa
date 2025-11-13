"use client";

import { Rocket, Cpu, Briefcase, TrendingUp } from "lucide-react";

export default function TwoMonthsProgramHeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 py-24 px-6 md:px-12 text-white rounded-2xl shadow-xl">
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
          GEONIXA
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
          2-Months Training & Internship Program
        </h2>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl font-medium max-w-3xl mx-auto text-orange-100">
          AI-Powered Learning • Project-Based Training • Career Growth Guaranteed
        </p>

        {/* Divider line */}
        <div className="w-24 h-1 bg-white/40 mx-auto mt-6 rounded-full" />

        {/* Key features */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">

          <div className="flex flex-col items-center">
            <Cpu className="h-10 w-10 text-white drop-shadow-md" />
            <p className="mt-3 font-semibold text-white">AI-Powered</p>
          </div>

          <div className="flex flex-col items-center">
            <Rocket className="h-10 w-10 text-white drop-shadow-md" />
            <p className="mt-3 font-semibold text-white">Project-Based</p>
          </div>

          <div className="flex flex-col items-center">
            <TrendingUp className="h-10 w-10 text-white drop-shadow-md" />
            <p className="mt-3 font-semibold text-white">Career Growth</p>
          </div>
        </div>

        {/* Footer label */}
        <p className="mt-12 text-sm text-orange-200 tracking-wide">
          Powered by GEONIXA AI-Learning Ecosystem
        </p>

      </div>
    </section>
  );
}
