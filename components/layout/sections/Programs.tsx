"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Web Development",
    subtitle: "Frontend + Backend + Deployment",
    duration: "2–3 Months",
    image: "/webdev.png",
    slug: "web",
  },
  {
    title: "App Development",
    subtitle: "Flutter + React Native + Publishing",
    duration: "2–3 Months",
    image: "/course/andriod.png",
    slug: "app-dev",
  },
  {
    title: "Cloud Computing",
    subtitle: "AWS + DevOps + Real-time Projects",
    duration: "3 Months",
    image: "/course/cloud.png",
    slug: "cloud-comp",
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
    if (startIndex + 3 < programs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="py-14 bg-background dark:bg-black">
      <div className="container relative">
       <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white leading-snug">
            Accelerate your expertise with{" "}
            <span className="text-orange-500">Learning Journeys</span>
          </h2>

        {/* Desktop View with Arrows */}
        <div className="mt-10 hidden md:block relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            <AnimatePresence mode="wait">
              {visiblePrograms.map((program) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={400}
                    height={200}
                    className="rounded-md object-cover w-full h-[210px]"
                  />
                  <div className="mt-4">
                    <h4 className="text-muted-foreground text-sm font-medium">Explore Our Courses</h4>
                    <h3 className="text-lg font-semibold mt-1 mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-black dark:text-blue-400">
                      {program.subtitle}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                      <span className="flex items-center gap-1">
                        <BadgeCheck className="w-4 h-4" /> Certification
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {program.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Link href={`/${program.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        View Program
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {startIndex > 0 && (
            <div className="absolute top-[50%] -translate-y-1/2 left-0 -ml-12">
              <Button
                onClick={handlePrev}
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-950 text-white hover:bg-blue-900"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </div>
          )}

          {startIndex + 3 < programs.length && (
            <div className="absolute top-[50%] -translate-y-1/2 right-0 -mr-12">
              <Button
                onClick={handleNext}
                variant="ghost"
                size="icon"
                className="rounded-full bg-blue-950 text-white hover:bg-blue-900 dark:bg-blue-900"
              >
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          )}
        </div>

        {/* Mobile View */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {programs.map((program) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={400}
                height={200}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <div className="mt-4">
                <h4 className="text-muted-foreground text-sm font-medium">Explore Our Courses</h4>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-black dark:text-black">
                  {program.subtitle}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span className="flex items-center gap-1">
                    <BadgeCheck className="w-4 h-4" /> Certification
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {program.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href={`/${program.slug}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Program
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
