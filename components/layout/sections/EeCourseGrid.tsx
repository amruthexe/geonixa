'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Courses =[
  {
    "title": "Embedded Systems",
    "subtitle": "Design and development of embedded systems.",
    "duration": "3\u20134 Months",
    "image": "/course/embed.png",
    "slug": "embed"
  },
  {
    "title": "VLSI",
    "subtitle": "Very Large Scale Integration for circuit design.",
    "duration": "4\u20135 Months",
    "image": "/course/vlsi.png",
    "slug": "vlsi"
  },
  {
    "title": "MATLAB",
    "subtitle": "MATLAB for simulation and data analysis.",
    "duration": "2\u20133 Months",
    "image": "/course/mathlab.png",
    "slug": "matlab"
  },
  {
    "title": "Internet of Things (IoT)",
    "subtitle": "Building IoT devices and systems.",
    "duration": "3 Months",
    "image": "/course/iot.png",
    "slug": "iot"
  },
  {
    "title": "Robotics",
    "subtitle": "Robot design, programming, and control systems.",
    "duration": "4\u20135 Months",
    "image": "/course/robo.png",
    "slug": "robotics"
  },
  {
    "title": "Hybrid Electric Vehicles",
    "subtitle": "Learn the design and control of hybrid electric vehicles.",
    "duration": "4\u20135 Months",
    "image": "/course/hybird.png",
    "slug": "hybird"
  }
]
export default function EeCourseGrid() {
  return (
    <section className="py-12 bg-background dark:bg-black">
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
