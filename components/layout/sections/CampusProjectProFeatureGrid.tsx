"use client";

import {
  FileCheck2,
  FileText,
  UserCheck,
  Clock4,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

export function CampusProjectProFeatureGrid() {
  const features = [
    {
      id: 1,
      icon: BadgeCheck,
      text: "IEEE / NAAC Standard Projects",
    },
    {
      id: 2,
      icon: FileText,
      text: "Ready-to-Submit Report + PPT",
    },
    {
      id: 3,
      icon: UserCheck,
      text: "Live Mentorship + Viva Prep",
    },
    {
      id: 4,
      icon: Clock4,
      text: "3–5 Days Express Delivery (₹2000 Extra)",
    },
    {
      id: 5,
      icon: GraduationCap,
      text: "Streams: B.Tech, MBA, B.Com & More",
    },
    {
      id: 6,
      icon: FileCheck2,
      text: "End-to-End Final Year Project Creation",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What You’ll Get with ProjectPro 🎓
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Simplify your final year with full-stack project support tailored to academic standards.
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
