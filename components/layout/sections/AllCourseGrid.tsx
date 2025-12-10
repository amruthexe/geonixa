"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// Assuming the path to your Shadcn Button component is correct
import { Button } from "@/components/ui/button"; 

// --- COURSE DATA ---
const courses = [
  {
    title: "Python Programming",
    subtitle: "Course on Python Programming",
    duration: "2–3 Months",
    image: "/new/6.png",
    slug: "python",
  },
  {
    title: "Data Science",
    subtitle: "Course on Data Science",
    duration: "2–3 Months",
    image: "/new/5.png",
    slug: "data-science",
  },
  {
    title: "Full Stack Web Development",
    subtitle: "Course on Full Stack Web Development",
    duration: "2–3 Months",
    image: "/new/7.png",
    slug: "full-stack",
  },
  {
    title: "Java Programming",
    subtitle: "Course on Java Programming",
    duration: "2–3 Months",
    image: "/new/8.png",
    slug: "java",
  },
  {
    title: "Android App Development",
    subtitle: "Course on Android App Development",
    duration: "2–3 Months",
    image: "/new/1.png",
    slug: "app-dev",
  },
  {
    title: "Machine Learning with Python",
    subtitle: "Course on Machine Learning with Python",
    duration: "2–3 Months",
    image: "/new/9.png",
    slug: "ml",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Course on Artificial Intelligence",
    duration: "2–3 Months",
    image: "/new/10.png",
    slug: "ai",
  },
  {
    title: "Cybersecurity",
    subtitle: "Course on Cybersecurity",
    duration: "2–3 Months",
    image: "/new/4.png",
    slug: "cyber-security",
  },
  {
    title: "Cloud Computing",
    subtitle: "Course on Cloud Computing",
    duration: "2–3 Months",
    image: "/new/11.png",
    slug: "cloud-comp",
  },
  {
    title: "DevOps",
    subtitle: "Course on DevOps",
    duration: "2–3 Months",
    image: "/new/12.png",
    slug: "devops",
  },
  {
    title: "Blockchain Development",
    subtitle: "Course on Blockchain Development",
    duration: "2–3 Months",
    image: "/new/13.png",
    slug: "block-chain",
  },
  {
    title: "Data Analytics",
    subtitle: "Course on Data Analytics",
    duration: "2–3 Months",
    image: "/new/14.png",
    slug: "business-analytics",
  },
  {
    title: "UI/UX",
    subtitle: "Course on UI/UX",
    duration: "2–3 Months",
    image: "/new/15.png",
    slug: "ui-ux",
  },
  {
    title: "SQL",
    subtitle: "Course on SQL",
    duration: "2–3 Months",
    image: "/new/16.png",
    slug: "sql",
  },
  {
    title: "Graphic Design",
    subtitle: "Course on Graphic Design",
    duration: "2–3 Months",
    image: "/new/17.png",
    slug: "graphic-design",
  },
  {
    title: "Embedded Systems",
    subtitle: "Course on Embedded Systems",
    duration: "2–3 Months",
    image: "/new/29.png",
    slug: "embed",
  },
  {
    title: "VLSI",
    subtitle: "Course on VLSI",
    duration: "2–3 Months",
    image: "/new/30.png",
    slug: "vlsi",
  },
  {
    title: "MATLAB",
    subtitle: "Course on MATLAB",
    duration: "2–3 Months",
    image: "/new/31.png",
    slug: "matlab",
  },
  {
    title: "Internet of Things (IoT)",
    subtitle: "Course on Internet of Things (IoT)",
    duration: "2–3 Months",
    image: "/new/32.png",
    slug: "iot",
  },
  {
    title: "Robotics",
    subtitle: "Course on Robotics",
    duration: "2–3 Months",
    image: "/new/33.png",
    slug: "robotics",
  },
  {
    title: "Hybrid Electric Vehicles",
    subtitle: "Course on Hybrid Electric Vehicles",
    duration: "2–3 Months",
    image: "/new/34.png",
    slug: "hybird",
  },
  {
    title: "AutoCAD & SolidWorks",
    subtitle: "Course on AutoCAD & SolidWorks",
    duration: "2–3 Months",
    image: "/new/36.png",
    slug: "auto-cad",
  },
  {
    title: "ANSYS for FEA & CFD",
    subtitle: "Course on ANSYS for FEA & CFD",
    duration: "2–3 Months",
    image: "/new/37.png",
    slug: "ansys",
  },
  {
    title: "3D Printing",
    subtitle: "Course on 3D Printing",
    duration: "2–3 Months",
    image: "/new/38.png",
    slug: "3d",
  },
  {
    title: "STAAD Pro",
    subtitle: "Course on STAAD Pro",
    duration: "2–3 Months",
    image: "/new/40.png",
    slug: "staad",
  },
  {
    title: "Revit Architecture",
    subtitle: "Course on Revit Architecture",
    duration: "2–3 Months",
    image: "/new/41.png",
    slug: "revit",
  },
  {
    title: "BIM (Building Information Modelling)",
    subtitle: "Course on BIM (Building Information Modelling)",
    duration: "2–3 Months",
    image: "/new/42.png",
    slug: "bim",
  },
  {
    title: "Construction Planning",
    subtitle: "Course on Construction Planning",
    duration: "2–3 Months",
    image: "/new/43.png",
    slug: "construction-planning",
  },
  {
    title: "Business Analytics",
    subtitle: "Course on Business Analytics",
    duration: "2–3 Months",
    image: "/new/20.png",
    slug: "business-analytics-2",
  },
  {
    title: "Data Visualization using Power BI / Tableau",
    subtitle: "Course on Data Visualization using Power BI / Tableau",
    duration: "2–3 Months",
    image: "/new/21.png",
    slug: "data-visualization",
  },
  {
    title: "Digital Marketing",
    subtitle: "Course on Digital Marketing",
    duration: "2–3 Months",
    image: "/new/22.png",
    slug: "digital-marketing",
  },
  {
    title: "Finance",
    subtitle: "Course on Finance",
    duration: "2–3 Months",
    image: "/new/23.png",
    slug: "finance",
  },
  {
    title: "Project Management",
    subtitle: "Course on Project Management",
    duration: "2–3 Months",
    image: "/new/25.png",
    slug: "poject-man",
  },
  {
    title: "Canva & Graphic Design for Marketing",
    subtitle: "Course on Canva & Graphic Design for Marketing",
    duration: "2–3 Months",
    image: "/new/26.png",
    slug: "graphic-design-marketing",
  },
  {
    title: "Stock Market",
    subtitle: "Course on Stock Market",
    duration: "2–3 Months",
    image: "/new/27.png",
    slug: "stock",
  },
  {
    title: "HR (Human Resources)",
    subtitle: "Course on HR (Human Resources)",
    duration: "2–3 Months",
    image: "/new/24.png",
    slug: "hr",
  },
];
// -------------------

/**
 * Renders a grid of all available courses using Framer Motion for animation.
 */
export default function AllCourseGrid() { // Removed the redundant 'courses: any' parameter
  return (
    <section className="py-8 bg-background dark:bg-black">
      <div className="container relative mx-auto px-4">
        {/* Title and Subtitle */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Explore Our All courses
        </h2>
        <p className="text-center text-muted-foreground mt-2 text-sm">
          Skill up with global mentors and hands-on projects.
        </p>

        {/* Course Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => ( // Removed ': any' from map callback
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
            >
              {/* Course Image */}
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={400}
                className="rounded-md object-cover w-full h-[180px]"
                priority // Good practice for above-the-fold images
              />

              {/* Course Details */}
              <div className="mt-4 flex-grow">
                <h4 className="text-muted-foreground text-sm font-medium">
                  Explore Our Courses
                </h4>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-black dark:text-blue-400">
                  {course.subtitle}
                </p>

                {/* Meta Info: Certification & Duration */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span className="flex items-center gap-1">
                    {/* Replaced empty span with a Certification icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
                      <path d="M12 16a4 4 0 0 0 4-4v-1.5a4.5 4.5 0 0 0-9 0V12a4 4 0 0 0 4 4Z" />
                    </svg>
                    Certification
                  </span>
                  <span className="flex items-center gap-1">
                    {/* Replaced empty span with a Clock/Duration icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* View Program Button */}
              <div className="mt-4 flex justify-center">
                {/* Added passHref and legacyBehavior for compatibility with custom components */}
                <Link href={`/${course.slug}`} className="w-full" passHref legacyBehavior>
                  <Button variant="outline" className="w-full">
                    View Program
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}