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
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Accelerate your expertise with{" "}
            <span className="text-orange-500">Learning Journeys</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-48"
                />
                <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  Learning Journey
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-[250px]">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">
                    GEONIXA EDUTECH EXECUTIVE EDUCATION
                  </h4>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
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

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 mt-4">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                    Download Brochure
                  </Button>
                  <Link href={`/${program.slug}`} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-orange-500 text-orange-600 hover:bg-orange-50"
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
          <Link href={"/programs"}> <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            View all programs →
          </Button> </Link>
         
        </div>
      </div>
    </section>
  );
}
