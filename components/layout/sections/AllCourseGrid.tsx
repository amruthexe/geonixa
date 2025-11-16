"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    slug: "cloud",
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

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AllCourseGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container relative">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-orange-600"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Explore Our All Courses
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-center text-gray-600 mt-2 text-sm"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Skill up with global mentors and hands-on projects.
        </motion.p>

        {/* Course Grid */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {courses.map((course) => (
            <motion.article
              key={course.slug}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="bg-white border border-orange-200 rounded-2xl shadow-md p-4 flex flex-col hover:shadow-lg transition"
            >
              {/* Image with subtle entrance */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="rounded-md overflow-hidden"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={400}
                  className="rounded-md object-cover w-full h-[180px]"
                />
              </motion.div>

              <div className="mt-4 flex-1">
                

                <h3 className="text-lg font-semibold mt-1 mb-2 text-gray-900">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-700">{course.subtitle}</p>

                <div className="flex items-center justify-between text-sm text-gray-600 mt-4">
                  <span className="flex items-center gap-1">
                    <span className="w-4 h-4 bg-orange-500 rounded-full" />
                    Certification
                  </span>

                  <span className="flex items-center gap-1">
                   
                    {course.duration}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <Link href={`/${course.slug}`} className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition"
                  >
                    View Program
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
