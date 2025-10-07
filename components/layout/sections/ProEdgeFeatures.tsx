"use client";

import React from "react";
import {
  Rocket,
  Code2,
  GraduationCap,
  BadgeCheck,
  UserCheck,
  Laptop,
  FileCheck,
  Globe,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Rocket,
    text: "Career-Focused Curriculum with Real-World Use Cases",
  },
  {
    id: 2,
    icon: Code2,
    text: "Hands-on Projects in Every Module",
  },
  {
    id: 3,
    icon: GraduationCap,
    text: "Internship & Placement Support from Day 1",
  },
  {
    id: 4,
    icon: BadgeCheck,
    text: "Industry-Recognized Certifications",
  },
  {
    id: 5,
    icon: UserCheck,
    text: "1:1 Mentorship from MNC Professionals",
  },
  {
    id: 6,
    icon: Laptop,
    text: "Live + Recorded Sessions for Flexible Learning",
  },
  {
    id: 7,
    icon: FileCheck,
    text: "Resume Building + Mock Interviews",
  },
  {
    id: 8,
    icon: Globe,
    text: "Remote Access from Anywhere in the World",
  },
  {
    id: 9,
    icon: Smartphone,
    text: "Mobile-Ready Learning Platform",
  },
];

export function ProedgeFeatures() {
  return (
    <section className="bg-white dark:bg-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Why Learners Trust <span className="text-blue-600">Proedge</span> 💡
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 dark:text-gray-300">
            Explore the powerful benefits that make Proedge the go-to learning platform.
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
