// src/components/FeatureHighlightGrid.jsx

import React from 'react';
// Import necessary icons from lucide-react
import {
  Layers,           // For Tech Course + Project + Internship
  BadgeIndianRupee, // For Price
  CalendarDays,     // For 45 days internship
  BookOpen,         // For 1 month course training
  ClipboardCheck,   // For 15 days project
  Award,            // For AWS Certificate
  Users,
  HelpingHandIcon,            // For Soft Skills Certificate
} from "lucide-react";

// Define the feature items data within the component
const features = [
  {
    id: 1,
    icon: Layers,
    text: "Tech Course + Project + Internship",
  },
  {
    id: 2,
    icon: BadgeIndianRupee,
    text: "Price: ₹2999/-",
  },
  {
    id: 3,
    icon: CalendarDays,
    text: "45 Days Internship",
  },
  {
    id: 4,
    icon: BookOpen,
    text: "1 Month Course Training",
  },
  {
    id: 5,
    icon: ClipboardCheck,
    text: "15 Days Project Work",
  },
  {
    id: 6,
    icon: Award,
    text: "AWS Internship Certificate",
  },
  {
    id: 7,
    icon: Users,
    text: "Soft Skills Training Certificate",
  },{
    id: 1,
    icon: HelpingHandIcon,
    text: "Real time suppport",
  },
];

export function FeatureHighlightGrid() {
  return (
    <section className="bg-white py-12 sm:py-16"> {/* Section wrapper with white background and vertical padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Centered content with max-width */}

        {/* Optional: Add a title for the section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What You'll Get
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Key highlights of the Fast Track 45 Recorded course.
          </p>
        </div>

        {/* Feature Grid */}
        {/* Responsive Grid: 1 col mobile, 2 cols tablet (sm), 4 cols laptop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => {
            // Dynamically get the Icon component constructor
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center p-6 bg-black rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300" // Item styling
              >
                <div className="flex-shrink-0 mb-4"> {/* Icon wrapper */}
                  <IconComponent
                    className="h-10 w-10 text-white" // Icon styling (size, color)
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base font-medium text-white"> {/* Text styling */}
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

