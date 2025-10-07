"use client";

import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const courseOptions = [
  { name: 'Fast Track 45 (Recorded)', slug: 'fast-track' },
  { name: 'Skill Boost 2 (Live + Recorded)', slug: 'skill-boost' },
  { name: 'Pro Edge 3 (Live + Recorded)', slug: 'pro-edge' },
  { name: 'Dual Path 5 (Live + Recorded)', slug: 'dual-pack' },
  { name: 'Career Pro 6 (Live + Recorded)', slug: 'career-pro' },
  { name: 'Campus+ LearnTrack', slug: 'campus-plus' },
  { name: 'Campus+ ProjectPro', slug: 'campus-project-pro' },
  { name: 'Campus+ CodeStart', slug: 'campus-code-start' },
];

const CourseListComponent = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-black shadow-2xl mt-12 mb-16 rounded-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-3 tracking-tight text-black dark:text-white">
        🎓 Explore Our Programs
      </h2>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
        Check out the following courses curated for your career growth.
      </p>

      <div className="grid gap-4">
        {courseOptions.map((course, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl transition hover:shadow-md group"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-black dark:text-blue-400" />
              <span className="text-base text-black dark:text-white font-medium">{course.name}</span>
            </div>
            <Link
              href={`/programs/${course.slug}`}
              className="flex items-center gap-1 text-black dark:text-blue-400 hover:underline text-sm font-semibold"
            >
              Check Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/all-programs"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold"
        >
          See all programs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CourseListComponent;
