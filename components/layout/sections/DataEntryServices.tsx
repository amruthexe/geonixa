"use client";

import { BookOpen, Code, Briefcase, Users, GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function CourseOfferings() {
  return (
    <section className="px-6 py-12 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Our Course Offerings
      </h2>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <GridItem
          icon={<BookOpen className="h-7 w-7 text-blue-500" />}
          title="Foundation Courses"
          description="Build your basics strong with structured learning in programming, math, and logic for beginners."
        />

        <GridItem
          icon={<Code className="h-7 w-7 text-green-500" />}
          title="Full Stack Development"
          description="Learn React, Node.js, Express, and databases to create complete, production-ready web apps."
        />

        <GridItem
          icon={<Briefcase className="h-7 w-7 text-yellow-500" />}
          title="Placement Training"
          description="Get job-ready with interview prep, aptitude, and soft skill sessions led by industry experts."
        />

        <GridItem
          icon={<Users className="h-7 w-7 text-purple-500" />}
          title="Group Learning Sessions"
          description="Collaborate, share ideas, and grow together in peer-led project and discussion sessions."
        />

        <GridItem
          icon={<GraduationCap className="h-7 w-7 text-pink-500" />}
          title="Advanced Specializations"
          description="Master trending technologies like AI, Data Science, and Cloud with expert mentorship."
        />  <GridItem
  icon={<Briefcase className="h-7 w-7 text-orange-500" />}
  title="Internship Programs"
  description="Gain real-world experience by working on live industry projects and enhance your professional portfolio."
/>

      </ul>
    </section>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <li className="min-h-[15rem] list-none">
      <div className="relative h-full rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative flex flex-col h-full justify-between gap-5">
          <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-800">
            {icon}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};
