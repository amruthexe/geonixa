'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cpu,
  Database,
  Code,
  FileText,
  Layers3,
} from 'lucide-react';

type SyllabusItem = {
  title: string;
  topics?: {
    label: string;
    icon: JSX.Element;
  }[];
};

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to CNC Programming',
    topics: [
      { label: 'What is CNC Programming?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Types of CNC Machines', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Understanding G-Codes and M-Codes', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Setting Up a CNC Machine',
    topics: [
      { label: 'Machine Setup and Calibration', icon: <Code className="w-4 h-4" /> },
      { label: 'Loading Programs into CNC Machines', icon: <FileText className="w-4 h-4" /> },
      { label: 'Safety and Operating Procedures', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. CNC Programming Basics',
    topics: [
      { label: 'Writing G-Codes for CNC Programming', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Understanding Coordinate Systems', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Working with Simple Machining Operations', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Advanced CNC Programming',
    topics: [
      { label: 'Subroutines and Macros', icon: <Code className="w-4 h-4" /> },
      { label: 'CNC Milling and Turning', icon: <FileText className="w-4 h-4" /> },
      { label: 'Error Handling and Troubleshooting', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. CNC Programming for Complex Parts',
    topics: [
      { label: 'Programming Complex Tool Paths', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Optimizing Cutting Strategies', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Advanced Milling and Turning Techniques', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. CNC Machine Maintenance and Troubleshooting',
    topics: [
      { label: 'Regular Maintenance Procedures', icon: <Code className="w-4 h-4" /> },
      { label: 'Diagnosing Machine Errors', icon: <FileText className="w-4 h-4" /> },
      { label: 'Improving Machine Lifespan and Efficiency', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (Programming a Complex CNC Part)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function CNCProgrammingSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">CNC Programming Course Syllabus</h2>
        <div className="space-y-2">
          {syllabusData.map((item, index) => (
            <div
              key={index}
              className="rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left text-base font-medium"
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && item.topics && (
                <div className="px-6 pb-4 space-y-2">
                  {item.topics.map((topic, tIndex) => (
                    <div
                      key={tIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      {topic.icon}
                      {topic.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
