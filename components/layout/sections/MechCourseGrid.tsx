'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Courses = [
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
]

export default function MechCivilCourseGrid() {
  return (
    <section className="py-8 bg-background dark:bg-black">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Explore Our Mechanical & Civil Engineering Courses
        </h2>
        <p className="text-center text-muted-foreground mt-2 text-sm">
          Skill up with global mentors and hands-on projects.
        </p>

        {/* Course Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Courses.map((course) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card dark:bg-muted/40 border rounded-2xl shadow-sm p-4 flex flex-col justify-between"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={400}
                height={200}
                className="rounded-md object-cover w-full h-[180px]"
              />
              <div className="mt-4">
                <h4 className="text-muted-foreground text-sm font-medium">Explore Our Courses</h4>
                <h3 className="text-lg font-semibold mt-1 mb-2">{course.title}</h3>
                <p className="text-sm text-black dark:text-blue-400">{course.subtitle}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mt-4">
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4" /> Certification
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4" /> {course.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href={`/${course.slug}`} className="w-full">
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
