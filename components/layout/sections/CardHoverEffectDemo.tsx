"use client"
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <HoverEffect items={programs} />
    </div>
  );
}

export const programs = [
  {
    title: "Resume Building Sessions",
    description:
      "Sessions that guide you in creating a professional resume tailored for job applications.",
    link: "#",
  },
  {
    title: "Mock Interviews",
    description:
      "Simulated interview sessions to help you practice and refine your interviewing skills.",
    link: "#",
  },
  {
    title: "Portfolio Building Sessions",
    description:
      "Learn how to build and showcase your projects and achievements in an online portfolio.",
    link: "#",
  },
  {
    title: "LinkedIn Profile Building",
    description:
      "Optimize and enhance your LinkedIn profile to improve your online presence and job prospects.",
    link: "#",
  },
  {
    title: "Aptitude Training",
    description:
      "Training sessions focused on enhancing your problem-solving and critical thinking abilities.",
    link: "#",
  },
  {
    title: "Reasoning Practice",
    description:
      "Practice sessions designed to sharpen your reasoning and analytical skills for better performance in exams and interviews.",
    link: "#",
  },
  {
    title: "Communication & Soft Skills Training",
    description:
      "Sessions designed to enhance your communication, leadership, and interpersonal skills.",
    link: "#",
  },
  {
    title: "Career Guidance from Experts",
    description:
      "Access professional guidance from industry experts to plan and advance your career.",
    link: "#",
  },
  {
    title: "Job Assistance & Placement Support",
    description:
      "Get assistance in securing a job through placement support and expert job search guidance.",
    link: "#",
  },
];
