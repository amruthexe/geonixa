"use client";

import React from "react";
import {
  Layers,
  BadgeIndianRupee,
  CalendarClock,
  BookOpen,
  ClipboardList,
  Award,
  Users,
  ThumbsUp,
  FileText,
} from "lucide-react";

// Updated feature list for Skill Boost 2 (Live Recorded)
const features = [
  {
    id: 1,
    icon: Layers,
    text: "Course + 4 Minor & 1 Major Project + Internship",
  },
  {
    id: 2,
    icon: BadgeIndianRupee,
    text: "Price: ₹3999/-",
  },
  {
    id: 3,
    icon: CalendarClock,
    text: "Duration: 2 Months",
  },
  {
    id: 4,
    icon: BookOpen,
    text: "45 Days of Course Training",
  },
  {
    id: 5,
    icon: ClipboardList,
    text: "15 Days of Project Work",
  },
  {
    id: 6,
    icon: Award,
    text: "AWS Internship Certificate",
  },
  {
    id: 7,
    icon: Users,
    text: "Excellence Certificate from MNC Mentor",
  },
  {
    id: 8,
    icon: ThumbsUp,
    text: "Course Certificate from GeoNixa + AICTE",
  },
  {
    id: 9,
    icon: FileText,
    text: "Letter of Recommendation (LOR)",
  },
];

export function SkillBoostFeatureHighligh() {
  return (
    <section className="bg-white dark:bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What You'll Get 🚀
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
            Key highlights of the Skill Boost 2 (Live Recorded) program
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 bg-black dark:bg-white rounded-lg border border-gray-800 dark:border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mb-4">
                  <IconComponent className="h-10 w-10 text-white dark:text-black" aria-hidden="true" />
                </div>
                <p className="text-base font-medium text-white dark:text-black">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
