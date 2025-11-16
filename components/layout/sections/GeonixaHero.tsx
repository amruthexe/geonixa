"use client";
import React, { useRef } from "react";
import { Poppins } from "next/font/google";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Cpu, Monitor, Award, Rocket, Clock } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

/* Feature Card */
function FeatureCard({ Icon, title, desc, delay = 0 } :any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      className="flex gap-4 items-start rounded-xl p-4 md:p-5 bg-white shadow-lg border border-orange-100 hover:shadow-xl transition-shadow duration-300 h-full"
    >
      {/* Icon orange gradient */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center shadow-md">
        <Icon className="w-6 h-6" />
      </div>

      <div className="min-w-0">
        <h4 className="text-lg font-bold text-gray-900">{title}</h4>
        <p className="mt-1 text-sm text-gray-600 leading-snug">{desc}</p>
      </div>
    </motion.article>
  );
}

/* MAIN COMPONENT */
export default function GeonixaHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.95, 0.9]);

  const featureData = [
    {
      Icon: Cpu,
      title: "AI-Powered Learning",
      desc: "Adaptive learning paths for rapid skill mastery within the 15-day schedule.",
      delay: 0.1,
    },
    {
      Icon: Monitor,
      title: "Recorded Sessions",
      desc: "Full, lifetime access to all course recordings for flexible, self-paced review.",
      delay: 0.18,
    },
    {
      Icon: Award,
      title: "Certification & Internship",
      desc: "Receive one combined certificate validating both training and internship completion.",
      delay: 0.26,
    },
    {
      Icon: Rocket,
      title: "1 Real-World Project",
      desc: "Complete a portfolio-ready, hands-on project to apply core concepts immediately.",
      delay: 0.34,
    },
  ];

  return (
    <section
      ref={ref}
      className={`${poppins.className} relative min-h-screen flex items-center justify-center py-24 px-6 bg-white overflow-hidden`}
    >
      {/* Orange theme background blobs */}
      <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-orange-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-rose-200/40 blur-2xl pointer-events-none" />

      <div className="relative max-w-6xl w-full">
        {/* HEADER */}
        <motion.header style={{ y, opacity }} className="text-center mb-12 md:mb-16">
          <h3 className="text-sm tracking-widest text-orange-600 font-semibold mb-2">
            GEONIXA
          </h3>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            15-Days Certification & Internship Program
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            "Learn in 15 Days. Build. Earn Recognition. Grow."
          </p>

          {/* INFO PILL */}
          <div className="mx-auto mt-8 inline-flex items-center gap-4 bg-white border border-orange-200 text-orange-700 px-6 py-3 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />{" "}
              <span className="text-sm font-medium">Duration: 15 Days</span>
            </div>
            <span className="text-orange-300">|</span>
            <div className="flex items-center gap-2">
              <Monitor className="w-4 h-4 text-orange-500" />{" "}
              <span className="text-sm font-medium">Mode: Online</span>
            </div>
          </div>

          {/* CTAS */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-orange-600 text-white font-semibold text-lg shadow-xl shadow-orange-200 hover:bg-orange-700 transition transform hover:scale-[1.02]">
              Enroll Now
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-orange-300 text-orange-700 font-medium hover:bg-orange-50 transition">
              Learn More
            </button>
          </div>
        </motion.header>

        {/* FEATURE CARDS */}
        <main className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureData.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </main>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            Empowering Your Career Growth. Start your journey today.
          </p>
        </div>
      </div>
    </section>
  );
}
