"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Monitor, Megaphone } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

export default function UpskillSectionDev() {
  return (
    <section
      className={`${poppins.className} relative overflow-hidden bg-white py-20 md:py-32`}
      aria-label="Upskill with Geonixa hero"
    >
      {/* Decorative shapes */}
      <div
        aria-hidden
        className="absolute -left-40 -top-24 w-80 h-80 rounded-full bg-amber-100 opacity-40 blur-3xl transform rotate-12"
      />
      <div
        aria-hidden
        className="absolute -right-40 -bottom-24 w-96 h-96 rounded-full bg-orange-200 opacity-30 blur-2xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* LEFT: Headline + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="inline-flex items-center justify-center rounded-md bg-orange-600 px-3 py-1 shadow-sm">
                <Monitor className="w-4 h-4 text-white" />
                <span className="ml-2 text-sm font-semibold text-white">Upskill</span>
              </div>
              <span className="text-sm text-gray-600">with Geonixa</span>
            </div>

            <h1 className="font-extrabold text-gray-900 tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
              Master <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-white rounded-md px-2">Web</span>,{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-white rounded-md px-2">App</span> &{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-600 text-white rounded-md px-2">Digital</span> skills
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-gray-700 text-base md:text-lg">
              Learn by building—project-based learning, live mentorship, certifications and dedicated placement support.
            </p>

            {/* Improved button layout */}
            <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
              {/* Primary CTA block: bold with two-tier content */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  className="w-full sm:w-auto inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  aria-label="Book a demo on WhatsApp"
                >
                  <Link
                    href="https://wa.me/919390514374?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center gap-2">
                      Book a Demo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="block text-xs opacity-90 mt-0.5">Free 15-min walkthrough</span>
                  </Link>
                </Button>
              </motion.div>

              {/* Secondary CTA: outline/ghost, visually balanced */}
              <motion.div whileHover={{ translateY: -3 }} className="w-full sm:w-auto">
                <Button
                  asChild
                  variant="secondary"
                  className="w-full sm:w-auto inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold shadow-sm hover:bg-orange-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-100"
                  aria-label="Call us"
                >
                  <Link href="tel:+919390514374">Call Us</Link>
                </Button>
              </motion.div>

              {/* Tertiary small CTA group: compact quick links */}
              <div className="w-full sm:w-auto flex gap-2">
                <a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white border border-orange-100 text-orange-700 hover:bg-orange-50 shadow-xs"
                >
                  <span className="sr-only">View programs</span>
                  <Monitor className="w-4 h-4" />
                  Programs
                </a>

                <a
                  href="#compare"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
                >
                  <Megaphone className="w-4 h-4 text-gray-700" />
                  Compare
                </a>
              </div>
            </div>

            {/* Trust badges / microfeatures */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
              <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-semibold">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Career-focused
              </span>

              <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-100">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Project-based
              </span>

              <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-gray-100">
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Fast track (5 months)
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Programs card with clearer hierarchy + buttons placement */}
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mx-auto w-full max-w-md"
          >
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl border border-orange-50">
              {/* top badges */}
              <div className="absolute -top-6 left-6 inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-orange-600 text-white px-3 py-2 rounded-full shadow">
                <span className="text-sm font-semibold">Next Batch</span>
                <span className="text-xs bg-white text-orange-700 px-2 py-0.5 rounded-full font-bold">Seats open</span>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Choose your track</h3>
                <p className="text-sm text-gray-600 mb-4">Hands-on programs with mentors and placement support.</p>

                {/* course rows with subtle hover and icons */}
                <div className="space-y-3">
                  <CourseRow
                    title="Web Development"
                    subtitle="Full-stack & frontend"
                    icon={<Monitor className="w-5 h-5 text-orange-700" />}
                    pills={["React", "Next.js", "Projects"]}
                  />
                  <CourseRow
                    title="App Development"
                    subtitle="Cross-platform (React Native)"
                    icon={<Smartphone className="w-5 h-5 text-orange-700" />}
                    pills={["Expo", "EAS", "Store Publishing"]}
                  />
                  <CourseRow
                    title="Digital Marketing"
                    subtitle="Performance & Growth"
                    icon={<Megaphone className="w-5 h-5 text-orange-700" />}
                    pills={["SEO", "Ads", "Analytics"]}
                  />
                </div>

                {/* CTA buttons placed inside card, stacked on mobile, side-by-side on desktop */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#curriculum"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-orange-100 bg-white text-orange-700 font-semibold hover:bg-orange-50 transition"
                    aria-label="View curriculum"
                  >
                    View Curriculum
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="https://wa.me/919390514374?text=Hi%2C%20I%27m%20interested%20in%20enrolling."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-amber-400 to-orange-600 text-white font-semibold shadow hover:scale-[1.01] transition"
                    aria-label="Enroll now"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-5 text-xs text-gray-400 text-center">
                <span className="italic">Money-back guarantee within 7 days for eligible seats.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* CourseRow helper with improved layout */
function CourseRow({
  title,
  subtitle,
  icon,
  pills,
}: {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  pills: string[];
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-md bg-orange-50 border border-orange-100 hover:shadow-sm transition">
      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold">
        {icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="text-sm font-semibold text-gray-900">{title}</div>
            <div className="text-xs text-gray-500">{subtitle}</div>
          </div>
        </div>

        <div className="text-xs text-gray-600 mt-2 flex flex-wrap gap-2">
          {pills.map((p) => (
            <span
              key={p}
              className="px-2 py-0.5 bg-white border border-gray-100 rounded text-xs text-gray-600"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
