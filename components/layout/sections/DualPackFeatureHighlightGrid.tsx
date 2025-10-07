// src/components/FeatureHighlightGrid.jsx

'use client';

import React from 'react';
import {
  Layers,
  BadgeIndianRupee,
  CalendarDays,
  BookOpen,
  ClipboardList,
  Award,
  Users,
  FileText,
  GraduationCap,
  HelpingHand,
  Network,
  FolderKanban,
  FileCheck2,
  Brain
} from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Layers,
    text: "2 Courses Training + Projects (8 Minor, 2 Major)",
  },
  {
    id: 2,
    icon: BadgeIndianRupee,
    text: "Price: ₹5999/-",
  },
  {
    id: 3,
    icon: CalendarDays,
    text: "5 Months Duration",
  },
  {
    id: 4,
    icon: BookOpen,
    text: "90 Days of Course Training",
  },
  {
    id: 5,
    icon: ClipboardList,
    text: "30 Days of Project Work",
  },
  {
    id: 6,
    icon: GraduationCap,
    text: "30 Days Soft Skills (Aptitude, Resume, LinkedIn, Interviews)",
  },
  {
    id: 7,
    icon: Award,
    text: "AWS Internship Certificate (Both Domains)",
  },
  {
    id: 8,
    icon: FileCheck2,
    text: "Course Completion from GeoNixa & AICTE",
  },
  {
    id: 9,
    icon: Users,
    text: "Excellence Certification from MNC Mentor",
  },
  {
    id: 10,
    icon: FileText,
    text: "Letter of Recommendation (LOR)",
  },
  {
    id: 11,
    icon: HelpingHand,
    text: "Soft Skills Training Certificate",
  },
  {
    id: 12,
    icon: FolderKanban,
    text: "LMS Access (Learning Management System)",
  }
];

export function DualPackFeatureHighlightGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What You'll Get in Dual Path 5 🚀
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            All the benefits included in this power-packed 5-month Live + Recorded program.
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
