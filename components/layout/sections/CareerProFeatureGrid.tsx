"use client";

import React from "react";
import {
  BadgeIndianRupee,
  CalendarDays,
  BookOpen,
  FolderKanban,
  Award,
  Users,
  FileText,
  HelpingHand,
  ClipboardList,
  GraduationCap,
  Laptop2,
  BriefcaseBusiness,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: BadgeIndianRupee,
    text: "Price: ₹30,000/-",
  },
  {
    id: 2,
    icon: CalendarDays,
    text: "Duration: 6 Months",
  },
  {
    id: 3,
    icon: BookOpen,
    text: "Domain Complete Course",
  },
  {
    id: 4,
    icon: Award,
    text: "Course Completion Certification",
  },
  {
    id: 5,
    icon: GraduationCap,
    text: "30 Days Soft Skills Training (Aptitude, Resume, LinkedIn, Interviews)",
  },
  {
    id: 6,
    icon: ClipboardList,
    text: "10 Minor + 2 Major Projects",
  },
  {
    id: 7,
    icon: Award,
    text: "Course Completion Certificate from GeoNixa & AICTE",
  },
  {
    id: 8,
    icon: FileText,
    text: "Letter of Recommendation (LOR)",
  },
  {
    id: 9,
    icon: HelpingHand,
    text: "Soft Skills Training Certificate",
  },
  {
    id: 10,
    icon: FolderKanban,
    text: "LMS Access (Learning Management System)",
  },
  {
    id: 11,
    icon: Laptop2,
    text: "Live + Recorded Sessions",
  },
  {
    id: 12,
    icon: BriefcaseBusiness,
    text: "Placement Opportunities",
  },
];

export function CareerProFeatureGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Career Pro 6 – Features 🔥
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            All-in-one package to master your domain and land a job with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 bg-black rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mb-4">
                  <IconComponent className="h-10 w-10 text-white" aria-hidden="true" />
                </div>
                <p className="text-base font-medium text-white">
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
