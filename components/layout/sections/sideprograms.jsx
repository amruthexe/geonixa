"use client";

import {
  Monitor,
  Car,
  Briefcase,
  HeartPulse,
  Paintbrush,
  GraduationCap,
  CalendarDays,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  { key: "tech", label: "Tech Data", icon: Monitor },
  { key: "mechanics", label: "Mechanics", icon: Car },
  { key: "business", label: "Business", icon: Briefcase },
  { key: "medical", label: "Medical", icon: HeartPulse },
  { key: "design", label: "Design", icon: Paintbrush },
  { key: "bootcamp", label: "Bootcamp", icon: GraduationCap },
];

const courses = {
  tech: [
    {
      title: "Web Development",
      desc: "Access to ChatGPT Plus, M365 Copilot and more",
      img: "/web.jpeg",
      href: "/programs/web-development",
    },
    {
      title: "Android Development",
      desc: "Access to ChatGPT Plus, M365 Copilot and more",
      img: "/app.jpg",
      href: "/programs/android-development",
    },
    {
      title: "Cyber Security",
      desc: "Access to ChatGPT Plus, M365 Copilot and more",
      img: "/cyber.jpeg",
      href: "/programs/cyber-security",
    },
  ],
  mechanics: [
    {
      title: "Hybrid & Electric Vehicles",
      desc: "Access to ChatGPT Plus, M365 Copilot and more",
      img: "/images/electric.jpg",
      href: "/programs/electric-vehicles",
    },
    {
      title: "Auto CAD",
      desc: "Access to ChatGPT Plus, M365 Copilot and more",
      img: "/images/cad.jpg",
      href: "/programs/auto-cad",
    },
  ],
};

export default function ExplorePrograms() {
  const [activeCategory, setActiveCategory] = useState("tech");

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Programs
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10">
        <motion.div
          className="w-full md:w-1/4 flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold">Select Type</h3>
          {categories.map(({ key, label, icon: Icon }) => (
            <Button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "justify-start gap-2 px-4 py-4 rounded-lg border",
                activeCategory === key
                  ? "text-white hover:text-white bg-black"
                  : "bg-gray-100 text-black hover:bg-black hover:text-white"
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Button>
          ))}
        </motion.div>

        <div className="w-full md:w-3/4 grid pt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses[activeCategory]?.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border rounded-2xl shadow-sm overflow-hidden"
            >
              <Image
                src={course.img}
                alt={course.title}
                width={400}
                height={180}
                className="w-full h-[180px] object-cover"
              />
              <div className="px-4 py-3">
                <h4 className="text-muted-foreground text-sm font-medium">Microsoft</h4>
                <h3 className="text-lg font-semibold mt-1 mb-1">{course.title}</h3>
                <p className="text-sm text-blue-600">{course.desc}</p>
                <div className="flex justify-between text-sm text-gray-600 mt-3">
                  <span className="flex items-center gap-1">🎓 Certification</span>
                  <span className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> 2 Months
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Link href={course.href} className="w-full">
                    <Button variant="outline" className="w-full rounded-full">
                      View Program
                    </Button>
                  </Link>
                  <Button className="w-full rounded-full bg-blue-900 text-white">
                    📘 Syllabus
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}