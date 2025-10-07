'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Cpu,
  Database,
  Code,
  BarChart3,
  FileText,
  FlaskConical,
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
    title: '1. Introduction to FEA and CFD',
    topics: [
      { label: 'What is FEA and CFD?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Applications in Engineering', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Introduction to ANSYS Software', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Preprocessing in ANSYS',
    topics: [
      { label: 'Geometry Creation and Import', icon: <Code className="w-4 h-4" /> },
      { label: 'Meshing Techniques', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Boundary Conditions and Loads', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Solving and Post-Processing',
    topics: [
      { label: 'Setting Up the Solver', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Interpreting Simulation Results', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Post-Processing for FEA and CFD', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Structural Analysis (FEA)',
    topics: [
      { label: 'Linear and Nonlinear Analysis', icon: <Code className="w-4 h-4" /> },
      { label: 'Stress and Strain Analysis', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Fatigue and Thermal Analysis', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Fluid Dynamics (CFD)',
    topics: [
      { label: 'Introduction to CFD', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Navier-Stokes Equations', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Turbulence Modeling', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Advanced FEA & CFD Techniques',
    topics: [
      { label: 'Dynamic and Modal Analysis', icon: <Code className="w-4 h-4" /> },
      { label: 'Multiphysics Simulations', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Optimization and Sensitivity Analysis', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project & Certification',
    topics: [
      { label: 'Capstone Project (FEA or CFD)', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function ANSYSSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">ANSYS for FEA & CFD Syllabus</h2>
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
