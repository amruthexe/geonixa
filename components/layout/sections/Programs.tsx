"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Clock, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- START: MOCK COMPONENTS FOR RUNNABILITY ---
// Replaced Next.js components (Button, Image, Link) with standard React/HTML components 
// to ensure the code compiles and runs in this environment.

// Mock Button component (maintains Tailwind classes)
const Button = (props:any) => {
    // Extract className safely, defaulting to an empty string if undefined
    const classNames = props.className || '';
    
    // Filter out props not valid for a standard button (like size="icon")
    const { size, ...buttonProps } = props; 

    return (
        <button 
            {...buttonProps} 
            className={`p-2 rounded-lg transition-colors ${classNames}`}
        >
            {props.children}
        </button>
    );
};

// Mock Image component (uses standard <img>)
const Image = (props:any) => {
    // next/image props like width/height are used as attributes for <img>
    const { className, width, height, ...imgProps } = props;
    return (
        <img 
            {...imgProps} 
            className={className} 
            width={width} 
            height={height} 
        />
    );
};

// Mock Link component (uses standard <a>)
const Link = (props:any) => (
    <a href={props.href} className={props.className}>
        {props.children}
    </a>
);

// --- END: MOCK COMPONENTS FOR RUNNABILITY ---


const programs = [
  {
    title: "Full-Stack Web Development (MERN)",
    subtitle: "Frontend + Backend + Deployment",
    duration: "6 Months",
    image: "/new/3.png", 
    slug: "programs/skill-boost",
  },
  {
    title: "Mobile App Development (React Native)",
    subtitle: "Android + iOS + Play Store Publishing",
    duration: "5-6 Months",
    image: "/new/1.png", 
    slug: "campus-code-start",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    subtitle: "SEO + Ads + Social Media + Automation",
    duration: "5-6 Months",
    image: "/new/2.png", 
    slug: "programs/campus-project-pro",
  },
  {
    title: "Cyber Security",
    subtitle: "Ethical Hacking + Threat Detection + Tools",
    duration: "3 Months",
    image: "/new/4.png", 
    slug: "cyber-security",
  },
  {
    title: "Data Science",
    subtitle: "Python + ML + AI + Projects",
    duration: "3–4 Months",
    image: "/new/5.png", 
    slug: "data-science",
  },
];

export const Programs = () => {
  const [startIndex, setStartIndex] = useState(0);
  // Always showing 3 items for desktop view
  const visiblePrograms = programs.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < programs.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  // Check if we are at the beginning or end for arrow disabling/visibility
  const isStart = startIndex === 0;
  const isEnd = startIndex + 3 >= programs.length;


  return (
    <section className="py-16 bg-white">
      {/* 'container' class ensures max-width and centering, and usually adds horizontal padding (e.g., px-4) */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 leading-tight">
          Accelerate Your Expertise With{" "}
          <span className="text-[#eb4917]">Learning Journeys</span>
        </h2>

        {/* Desktop View (md and up) */}
        {/* We use overflow-clip on the relative container to ensure nothing protrudes and causes scrollbars. */}
        <div className="mt-12 hidden md:block relative overflow-clip"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visiblePrograms.map((program) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -18 }}
                  transition={{ duration: 0.45 }}
                  className="group relative bg-white border border-orange-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Limited seats badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div
                      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-200"
                      aria-hidden={false}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full bg-[#2ced16] blinking-dot shadow-[0_0_6px_rgba(235,73,23,0.85)]"
                        aria-hidden="true"
                      />
                      <span className="text-xs font-semibold text-[#eb4917]">
                        Limited seats
                      </span>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={200}
                      // Note: object-cover works on standard <img> tags
                      className="rounded-xl object-cover w-full h-[210px] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="mt-5">
                    <h4 className="text-xs uppercase tracking-wide text-orange-600 font-semibold">
                      Explore Program
                    </h4>

                    <h3 className="text-lg font-bold text-gray-900 mt-2">
                      {program.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      {program.subtitle}
                    </p>

                    <div className="flex items-center justify-between text-sm mt-4 text-gray-500">
                      <span className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-orange-500" />
                        Certification
                      </span>

                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-orange-500" />
                        {program.duration}
                      </span>
                    </div>
                  </div>

                  <Link href={`/${program.slug}`} className="w-full mt-5 block">
                    <Button className="w-full bg-[#eb4917] hover:bg-[#d33f12] text-white font-semibold">
                      View Program
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows - Now with Glass Effect */}
          {!isStart && (
            <Button
              onClick={handlePrev}
              // NEW: Glass effect classes (bg-transparent white, blur, border, dark text)
              className="absolute top-1/2 -translate-y-1/2 left-4 z-30 
                         bg-white/20 backdrop-blur-md text-gray-800 
                         hover:bg-white/50 transition-all duration-300 border border-white/50 
                         rounded-full shadow-xl"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
          )}

          {!isEnd && (
            <Button
              onClick={handleNext}
              // NEW: Glass effect classes (bg-transparent white, blur, border, dark text)
              className="absolute top-1/2 -translate-y-1/2 right-4 z-30 
                         bg-white/20 backdrop-blur-md text-gray-800 
                         hover:bg-white/50 transition-all duration-300 border border-white/50 
                         rounded-full shadow-xl"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          )}
        </div>

        {/* Mobile View (No change, as it stacks items) */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="relative bg-white border border-orange-100 rounded-2xl p-4 shadow-md"
            >
              {/* Mobile badge top-right */}
              <div className="absolute top-3 right-3 z-20">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded-full border border-orange-200">
                  <span
                    className="w-2 h-2 rounded-full bg-[#08f42c] blinking-dot shadow-[0_0_6px_rgba(235,73,23,0.85)]"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-semibold text-[#eb4917]">Limited</span>
                </div>
              </div>

              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={200}
                className="rounded-xl object-cover w-full h-[180px]"
              />

              <div className="mt-4">
                <h4 className="text-xs uppercase text-orange-600 font-semibold">
                  Explore Program
                </h4>

                <h3 className="text-lg font-bold mt-1">{program.title}</h3>

                <p className="text-sm text-gray-700 mt-1">{program.subtitle}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <span className="flex items-center gap-1">
                    <BadgeCheck className="w-4 h-4 text-orange-500" /> Certification
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" /> {program.duration}
                  </span>
                </div>
              </div>

              <Link href={`/${program.slug}`} className="w-full mt-5 block">
                <Button className="w-full bg-[#eb4917] hover:bg-[#d33f12] text-white font-bold">
                  View Program
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};