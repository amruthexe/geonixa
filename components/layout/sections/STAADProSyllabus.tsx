'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cpu,
  Database,
  Code,
  BarChart2,
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
    title: '1. Introduction to STAAD Pro',
    topics: [
      { label: 'What is STAAD Pro?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Revit and STAAD Pro Integration', icon: <Cpu className="w-4 h-4" /> },
      { label: 'STAAD Pro Interface Overview', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Basic Structural Design with STAAD Pro',
    topics: [
      { label: 'Creating a New Project', icon: <Code className="w-4 h-4" /> },
      { label: 'Modeling Elements (Beams, Columns, etc.)', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Assigning Material Properties', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Structural Analysis in STAAD Pro',
    topics: [
      { label: 'Types of Structural Analysis', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Linear and Nonlinear Analysis', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applying Loads and Boundary Conditions', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Advanced Modeling Techniques',
    topics: [
      { label: 'Defining Complex Structures', icon: <Code className="w-4 h-4" /> },
      { label: 'Working with Steel and Concrete Structures', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Analysis of Frames and Trusses', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Design of Structural Components',
    topics: [
      { label: 'Design of Beams, Columns, and Slabs', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Seismic and Wind Load Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Reinforced Concrete Design', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Output and Reporting',
    topics: [
      { label: 'Understanding Results and Diagrams', icon: <Code className="w-4 h-4" /> },
      { label: 'Preparing Reports and Drawings', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Exporting Results to Other Software', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (Building Structure Design)', icon: <Layers3 className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
];

export default function STAADProSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">STAAD Pro Course Syllabus</h2>
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
