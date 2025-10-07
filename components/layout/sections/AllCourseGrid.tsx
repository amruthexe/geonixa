'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const courses = [
  {
    "title": "Python Programming",
    "subtitle": "Course on Python Programming",
    "duration": "2–3 Months",
    "image": "/course/python.png",
    "slug": "python"
  },
  {
    "title": "Data Science",
    "subtitle": "Course on Data Science",
    "duration": "2–3 Months",
    "image": "/course/ds.png",
    "slug": "data-science"
  },
  {
    "title": "Full Stack Web Development",
    "subtitle": "Course on Full Stack Web Development",
    "duration": "2–3 Months",
    "image": "/course/fs.png",
    "slug": "full-stack"
  },
  {
    "title": "Java Programming",
    "subtitle": "Course on Java Programming",
    "duration": "2–3 Months",
    "image": "/course/java.png",
    "slug": "java"
  },
  {
    "title": "Android App Development",
    "subtitle": "Course on Android App Development",
    "duration": "2–3 Months",
    "image": "/course/andriod.png",
    "slug": "app-dev"
  },
  {
    "title": "Machine Learning with Python",
    "subtitle": "Course on Machine Learning with Python",
    "duration": "2–3 Months",
    "image": "/course/ml.png",
    "slug": "ml"
  },
  {
    "title": "Artificial Intelligence",
    "subtitle": "Course on Artificial Intelligence",
    "duration": "2–3 Months",
    "image": "/course/ai.png",
    "slug": "ai"
  },
  {
    "title": "Cybersecurity",
    "subtitle": "Course on Cybersecurity",
    "duration": "2–3 Months",
    "image": "/course/cyber.png",
    "slug": "cyber-security"
  },
  {
    "title": "Cloud Computing",
    "subtitle": "Course on Cloud Computing",
    "duration": "2–3 Months",
    "image": "/course/cloud.png",
    "slug": "cloud"
  },
  {
    "title": "DevOps",
    "subtitle": "Course on DevOps",
    "duration": "2–3 Months",
    "image": "/course/devops.png",
    "slug": "devops"
  },
  {
    "title": "Blockchain Development",
    "subtitle": "Course on Blockchain Development",
    "duration": "2–3 Months",
    "image": "/course/block.png",
    "slug": "block-chain"
  },
  {
    "title": "Data Analytics",
    "subtitle": "Course on Data Analytics",
    "duration": "2–3 Months",
    "image": "/course/da.png",
    "slug": "business-analytics"
  },
  {
    "title": "UI/UX",
    "subtitle": "Course on UI/UX",
    "duration": "2–3 Months",
    "image": "/course/ui-ux.png",
    "slug": "ui-ux"
  },
  {
    "title": "SQL",
    "subtitle": "Course on SQL",
    "duration": "2–3 Months",
    "image": "/course/sql.png",
    "slug": "sql"
  },
  {
    "title": "Graphic Design",
    "subtitle": "Course on Graphic Design",
    "duration": "2–3 Months",
    "image": "/course/gd.png",
    "slug": "graphic-design"
  },
  {
    "title": "Embedded Systems",
    "subtitle": "Course on Embedded Systems",
    "duration": "2–3 Months",
    "image": "/course/embed.png",
    "slug": "embed"
  },
  {
    "title": "VLSI",
    "subtitle": "Course on VLSI",
    "duration": "2–3 Months",
    "image": "/course/vlsi.png",
    "slug": "vlsi"
  },
  {
    "title": "MATLAB",
    "subtitle": "Course on MATLAB",
    "duration": "2–3 Months",
    "image": "/course/mathlab.png",
    "slug": "matlab"
  },
  {
    "title": "Internet of Things (IoT)",
    "subtitle": "Course on Internet of Things (IoT)",
    "duration": "2–3 Months",
    "image": "/course/iot.png",
    "slug": "iot"
  },
  {
    "title": "Robotics",
    "subtitle": "Course on Robotics",
    "duration": "2–3 Months",
    "image": "/course/robo.png",
    "slug": "robotics"
  },
  {
    "title": "Hybrid Electric Vehicles",
    "subtitle": "Course on Hybrid Electric Vehicles",
    "duration": "2–3 Months",
    "image": "/course/hybird.png",
    "slug": "hybird"
  },
  {
    "title": "AutoCAD & SolidWorks",
    "subtitle": "Course on AutoCAD & SolidWorks",
    "duration": "2–3 Months",
    "image": "/course/auto.png",
    "slug": "auto-cad"
  },
  {
    "title": "ANSYS for FEA & CFD",
    "subtitle": "Course on ANSYS for FEA & CFD",
    "duration": "2–3 Months",
    "image": "/course/anasys.png",
    "slug": "ansys"
  },
  {
    "title": "3D Printing",
    "subtitle": "Course on 3D Printing",
    "duration": "2–3 Months",
    "image": "/course/3d.png",
    "slug": "3d"
  },
  {
    "title": "STAAD Pro",
    "subtitle": "Course on STAAD Pro",
    "duration": "2–3 Months",
    "image": "/course/staad.png",
    "slug": "staad"
  },
  {
    "title": "Revit Architecture",
    "subtitle": "Course on Revit Architecture",
    "duration": "2–3 Months",
    "image": "/course/revit.png",
    "slug": "revit"
  },
  {
    "title": "BIM (Building Information Modelling)",
    "subtitle": "Course on BIM (Building Information Modelling)",
    "duration": "2–3 Months",
    "image": "/course/bim.png",
    "slug": "bim"
  },
  {
    "title": "Construction Planning",
    "subtitle": "Course on Construction Planning",
    "duration": "2–3 Months",
    "image": "/course/c-planing.png",
    "slug": "construction-planning"
  },
  {
    "title": "Business Analytics",
    "subtitle": "Course on Business Analytics",
    "duration": "2–3 Months",
    "image": "/course/ba.png",
    "slug": "business-analytics"
  },
  {
    "title": "Data Visualization using Power BI / Tableau",
    "subtitle": "Course on Data Visualization using Power BI / Tableau",
    "duration": "2–3 Months",
    "image": "/course/data-vis.png",
    "slug": "data-visualization"
  },
  {
    "title": "Digital Marketing",
    "subtitle": "Course on Digital Marketing",
    "duration": "2–3 Months",
    "image": "/course/dm.png",
    "slug": "digital-marketing"
  },
  {
    "title": "Finance",
    "subtitle": "Course on Finance",
    "duration": "2–3 Months",
    "image": "/course/finance.png",
    "slug": "finance"
  },
  {
    "title": "Project Management",
    "subtitle": "Course on Project Management",
    "duration": "2–3 Months",
    "image": "/course/project.png",
    "slug": "poject-man"
  },
  {
    "title": "Canva & Graphic Design for Marketing",
    "subtitle": "Course on Canva & Graphic Design for Marketing",
    "duration": "2–3 Months",
    "image": "/course/canva.png",
    "slug": "graphic-design"
  },
  {
    "title": "Stock Market",
    "subtitle": "Course on Stock Market",
    "duration": "2–3 Months",
    "image": "/course/stock.png",
    "slug": "stock"
  },
  {
    "title": "HR (Human Resources)",
    "subtitle": "Course on HR (Human Resources)",
    "duration": "2–3 Months",
    "image": "/course/hr.png",
    "slug": "hr"
  }
];
  
export default function AllCourseGrid() {
  return (
    <section className="py-8 bg-background dark:bg-black">
      <div className="container relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Explore Our All courses
        </h2>
        <p className="text-center text-muted-foreground mt-2 text-sm">
          Skill up with global mentors and hands-on projects.
        </p>

        {/* Course Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
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
                height={400}
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
