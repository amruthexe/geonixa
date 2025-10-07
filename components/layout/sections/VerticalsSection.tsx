"use client";

import Link from "next/link";
import {
  GraduationCap,
  Brain,
  Megaphone,
  Gavel,
  Code2,
  Rocket,
  User2,
  Microscope,
  Building2,
  CircuitBoard,
} from "lucide-react";

const verticals = [
  {
    title: "Software & Tech",
    courses: "42 Courses",
    icon: <Code2 className="text-grey-400 w-10 h-10" />,
    href: "area/software-tech",
  },
  {
    title: "Management (BBA, MBA)",
    courses: "12 Courses",
    icon: <GraduationCap className="text-grey-400 w-10 h-10" />,
    href: "area/management",
  },

  {
    title: "Electronics & Electrical Engineering",
    courses: "5 Courses",
    icon: <CircuitBoard className="text-grey-400 w-10 h-10" />,
    href: "area/ec-eee",
  },
  {
    title: "Mechanical & Civil Engineering",
    courses: "34 Courses",
    icon: <Building2 className="text-grey-400 w-10 h-10" />,
    href: "area/mech-civil",
  },
];
export default function VerticalsSection() {
  return (
    <section className="container py-0">
      <div className="pb-6">
        <h2 className="text-3xl text-center md:text-4xl font-bold">
          Choose your <span className="text-black">area of interest</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {verticals.map((v, i) => {
          const CardContent = (
            <div
              className="bg-[#eb4917] dark:bg-muted/30 rounded-xl border shadow-sm p-6 h-44 flex items-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h4 className="font-bold text-white text-lg">{v.title}</h4>
                <p className="text-muted-foreground text-white text-sm">{v.courses}</p>
              </div>
              <div className="ml-4">{v.icon}</div>
            </div>
          );

          return v.href ? (
            <Link href={v.href} key={i}>
              {CardContent}
             
            </Link>
          ) : (
            <div key={i}>{CardContent}</div>
          );
        })}
      </div>
    </section>
  );
}
