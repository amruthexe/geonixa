"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "Full Stack Development",
    subtitle: "Frontend + Backend + Deployment",
    duration: "3 Months | Online",
    applyDate: "October 20, 2025",
    image: "/course/andriod.png",
    slug: "fullstack",
  },
  {
    title: "AI & Data Science",
    subtitle: "Python + Machine Learning + AI Projects",
    duration: "4 Months | Online",
    applyDate: "November 5, 2025",
    image: "/course/ds.png",
    slug: "data-science",
  },
  {
    title: "Cyber Security & Cloud",
    subtitle: "AWS + Ethical Hacking + DevOps",
    duration: "4 Months | Online",
    applyDate: "November 15, 2025",
    image: "/course/cloud.png",
    slug: "cyber-cloud",
  },
];

export default function Programs() {
  return (
    <section className="py-12 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
            Accelerate your expertise with{" "}
            <span className="text-orange-500">Learning Journeys</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mt-2">
            Explore top-rated programs and boost your career growth
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative w-full h-44 sm:h-52 md:h-56">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  Learning Journey
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  <h4 className="text-[12px] sm:text-[13px] font-medium text-gray-500 mb-1 uppercase tracking-wide">
                    GEONIXA EDUTECH EXECUTIVE EDUCATION
                  </h4>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                    {program.subtitle}
                  </p>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-400">
                    {program.duration}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Last Date to Apply:{" "}
                    <span className="font-semibold text-orange-600">
                      {program.applyDate}
                    </span>
                  </p>
                </div>

                {/* Buttons Section */}
                <div className="flex flex-col sm:flex-row gap-2 mt-5">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full text-sm py-2">
                    Download Brochure
                  </Button>
                  <Link href={`/${program.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50 text-sm py-2"
                    >
                      View Program
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <Link href="/programs">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-5 py-2">
              View all programs →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
