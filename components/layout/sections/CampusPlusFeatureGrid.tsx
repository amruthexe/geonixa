"use client";

import React from "react";
import {
  BookOpen,
  ClipboardList,
  Users,
  MessageCircleQuestion,
  GraduationCap,
  BadgeIndianRupee,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: BadgeIndianRupee,
    text: "₹5999 / one-time payment",
  },
  {
    id: 2,
    icon: BookOpen,
    text: "Academic + Supplementary Subject Support",
  },
  {
    id: 3,
    icon: ClipboardList,
    text: "Notes, Summaries & Assignments Help",
  },
  {
    id: 4,
    icon: MessageCircleQuestion,
    text: "2 Doubt-Clearing Sessions / Month",
  },
  {
    id: 5,
    icon: GraduationCap,
    text: "Support for B.Tech, BBA, B.Com & More",
  },
  {
    id: 6,
    icon: Users,
    text: "Exam & Internal Assessment Preparation",
  },
];

export function CampusPlusFeatureGrid() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Campus+ LearnTrack 📘
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            All-in-one academic support for college students with backlog recovery, internal exams, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
