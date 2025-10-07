'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Courses = [
  {
    "title": "AutoCAD & SolidWorks",
    "subtitle": "Learn CAD software for 2D and 3D design modeling.",
    "duration": "3\u20134 Months",
    "image": "/course/auto.png",
    "slug": "auto-cad"
  },
  {
    "title": "ANSYS for FEA & CFD",
    "subtitle": "Master FEA (Finite Element Analysis) and CFD (Computational Fluid Dynamics).",
    "duration": "4\u20135 Months",
    "image": "/course/anasys.png",
    "slug": "ansys"
  },
  {
    "title": "3D Printing",
    "subtitle": "Learn to design and print 3D models using modern 3D printing technology.",
    "duration": "2\u20133 Months",
    "image": "/course/3d.png",
    "slug": "three-d"
  },
  {
    "title": "CNC Programming",
    "subtitle": "Programming CNC machines for precise engineering and manufacturing.",
    "duration": "3 Months",
    "image": "/course/cnc.png",
    "slug": "cnc"
  },
  {
    "title": "STAAD Pro",
    "subtitle": "Learn structural analysis and design using STAAD Pro software.",
    "duration": "3\u20134 Months",
    "image": "/course/staad.png",
    "slug": "staad"
  },
  {
    "title": "Revit Architecture",
    "subtitle": "Master building information modeling (BIM) with Revit for architecture.",
    "duration": "4\u20135 Months",
    "image": "/course/revit.png",
    "slug": "revit"
  },
  {
    "title": "BIM (Building Information Modelling)",
    "subtitle": "Learn the fundamentals of BIM for managing building projects.",
    "duration": "4 Months",
    "image": "/course/bim.png",
    "slug": "bim"
  },
  {
    "title": "Construction Planning",
    "subtitle": "Learn how to plan and manage construction projects effectively.",
    "duration": "3 Months",
    "image": "/course/c-planing.png",
    "slug": "construction-planning"
  }
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
