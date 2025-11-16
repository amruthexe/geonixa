'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Courses = [
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
]

export default function MaCourseGrid() {
  return (
    <section className="py-8 bg-background dark:bg-black">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Explore Our Courses
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
