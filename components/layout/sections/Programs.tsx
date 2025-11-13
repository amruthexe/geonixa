"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Full-Stack Web Development (MERN)",
    subtitle: "Frontend + Backend + Deployment",
    duration: "6 Months",
    image: "/4.png",
    slug: "programs/skill-boost",
  },
  {
    title: "Mobile App Development (React Native)",
    subtitle: "Android + iOS + Play Store Publishing",
    duration: "5-6 Months",
    image: "/2.png",
    slug: "campus-code-start",
  },
  {
    title: "Digital Marketing & Growth Strategy",
    subtitle: "SEO + Ads + Social Media + Automation",
    duration: "5-6 Months",
    image: "/3.png",
    slug: "programs/campus-project-pro",
  },
  {
    title: "Cyber Security",
    subtitle: "Ethical Hacking + Threat Detection + Tools",
    duration: "3 Months",
    image: "/course/cyber.png",
    slug: "cyber-security",
  },
  {
    title: "Data Science",
    subtitle: "Python + ML + AI + Projects",
    duration: "3–4 Months",
    image: "/course/ds.png",
    slug: "data-science",
  },
];

export const Programs = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visiblePrograms = programs.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < programs.length) setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 leading-tight">
          Accelerate Your Expertise With{" "}
          <span className="text-[#eb4917]">Learning Journeys</span>
        </h2>

        {/* Desktop View */}
        <div className="mt-12 hidden md:block relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {visiblePrograms.map((program) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45 }}
                  className="group bg-white border border-orange-100 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={400}
                      height={200}
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

          {/* Arrows */}
          {startIndex > 0 && (
            <Button
              onClick={handlePrev}
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 bg-[#eb4917] hover:bg-[#d33f12] text-white rounded-full shadow-lg"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
          )}

          {startIndex + 3 < programs.length && (
            <Button
              onClick={handleNext}
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 bg-[#eb4917] hover:bg-[#d33f12] text-white rounded-full shadow-lg"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          )}
        </div>

        {/* Mobile View */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white border border-orange-100 rounded-2xl p-4 shadow-md"
            >
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

                <p className="text-sm text-gray-700 mt-1">
                  {program.subtitle}
                </p>

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
