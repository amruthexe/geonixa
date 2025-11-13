"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Poppins } from "next/font/google";
import {
  Award,
  GraduationCap,
  FileText,
  Briefcase,
  FileArchive,
  File,
  Users,
  Linkedin,
  BriefcaseBusiness,
  Rocket,
  HandCoins,
  Cpu,
  CheckCircle,
  Banknote,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export default function CertificationsBenefits(): JSX.Element {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(rootRef, { once: true, margin: "-120px" });

  const certs = [
    { icon: <Award className="w-6 h-6" />, title: "Topic-Wise Certificates", subtitle: "Weekly" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Course Completion", subtitle: "End of Phase 1" },
    { icon: <FileText className="w-6 h-6" />, title: "Minor Project", subtitle: "End of Phase 2" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Internship Certificate", subtitle: "Final Phase" },
    { icon: <FileArchive className="w-6 h-6" />, title: "Experience Letter", subtitle: "Program End" },
  ];

  const benefits = [
    { icon: <FileText className="w-5 h-5" />, title: "Resume Building Support", subtitle: "Create industry-ready profile" },
    { icon: <Linkedin className="w-5 h-5" />, title: "LinkedIn Enhancement", subtitle: "Build professional identity" },
    { icon: <Briefcase className="w-5 h-5" />, title: "Portfolio Building", subtitle: "Showcase internship work professionally" },
    { icon: <Users className="w-5 h-5" />, title: "Mock Interviews", subtitle: "Practice HR & technical rounds" },
    { icon: <BriefcaseBusiness className="w-5 h-5" />, title: "Placement Support", subtitle: "Career guidance & job referrals" },
    { icon: <Rocket className="w-5 h-5" />, title: "Startup Support", subtitle: "Mentorship for innovative ideas" },
    { icon: <HandCoins className="w-5 h-5" />, title: "Stipend Opportunity", subtitle: "Based on performance & evaluation" },
    { icon: <Banknote className="w-5 h-5" />, title: "Industrial MoU", subtitle: "For internship credits" },
    { icon: <Cpu className="w-5 h-5" />, title: "AI-Powered Assistance", subtitle: "Resume analyzer, interview simulator" },
  ];

  return (
    <section
      ref={rootRef}
      className={`${poppins.className} w-full py-16 px-6 md:px-12 bg-white`}
      aria-labelledby="certifications-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="certifications-benefits-heading"
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6"
        >
          CERTIFICATIONS &amp; BENEFITS
        </motion.h2>

        {/* Certifications row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <span className="inline-block w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center">
              <CheckCircle className="w-4 h-4" />
            </span>
            CERTIFICATIONS PROVIDED
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {certs.map((c, idx) => (
              <article
                key={idx}
                className="rounded-xl p-4 bg-white border border-orange-50 shadow-sm flex flex-col items-start gap-3"
                aria-label={c.title}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gradient-to-br from-orange-500 to-amber-400 text-white">
                  {c.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{c.title}</h4>
                <p className="text-xs text-gray-500">{c.subtitle}</p>
              </article>
            ))}
          </div>
        </motion.div>

        {/* Internship Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
            <span className="inline-block w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center">
              <Award className="w-4 h-4" />
            </span>
            INTERNSHIP BENEFITS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.06 + i * 0.04 }}
                className="flex items-start gap-4 rounded-xl p-4 bg-white border border-orange-50 shadow-sm hover:shadow-md"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700">
                  {b.icon}
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900">{b.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{b.subtitle}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
