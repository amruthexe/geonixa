"use client";

import {
  Laptop2,
  BookOpen,
  Gamepad,
  Users,
  BadgeCheck,
  Mic,
} from "lucide-react";

export function CampusCodeStartFeatureGrid() {
  const features = [
    { id: 1, icon: Laptop2, text: "Live Weekend Batches (3 Months)" },
    { id: 2, icon: BookOpen, text: "HTML, Python, JavaScript, Scratch" },
    { id: 3, icon: Gamepad, text: "Mini Projects + Game Building" },
    { id: 4, icon: Users, text: "Mentor Guidance + Doubt Support" },
    { id: 5, icon: BadgeCheck, text: "Completion Certificate" },
    { id: 6, icon: Mic, text: "Spoken English & Presentation Skills" },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose CodeStart 👩‍💻👨‍💻
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Build a strong programming base early with fun, practical projects and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map(({ id, icon: Icon, text }) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-6 bg-black rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <Icon className="h-10 w-10 text-white mb-4" />
              <p className="text-base font-medium text-white">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
