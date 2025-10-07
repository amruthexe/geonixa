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
    title: '1. Introduction to MATLAB',
    topics: [
      { label: 'What is MATLAB?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'MATLAB Interface and Environment', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Basic Commands and Syntax', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Data Types and Variables',
    topics: [
      { label: 'Numerical Data Types', icon: <Code className="w-4 h-4" /> },
      { label: 'Strings and Arrays', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Matrices and Cell Arrays', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Control Flow Statements',
    topics: [
      { label: 'if-else, switch-case', icon: <Code className="w-4 h-4" /> },
      { label: 'for, while loops', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Functions and Scripts', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Data Visualization and Plotting',
    topics: [
      { label: 'Basic Plotting with MATLAB', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Customizing Plots', icon: <Database className="w-4 h-4" /> },
      { label: '3D Plotting and Surface Plots', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. MATLAB Functions and Toolboxes',
    topics: [
      { label: 'MATLAB Built-in Functions', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'MATLAB Toolboxes Overview', icon: <FileText className="w-4 h-4" /> },
      { label: 'Simulink Introduction', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Advanced MATLAB Programming',
    topics: [
      { label: 'Object-Oriented Programming in MATLAB', icon: <Cpu className="w-4 h-4" /> },
      { label: 'File I/O and Data Import/Export', icon: <Database className="w-4 h-4" /> },
      { label: 'Optimization Techniques in MATLAB', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. MATLAB for Engineering Applications',
    topics: [
      { label: 'Solving Engineering Problems with MATLAB', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Signal Processing', icon: <Database className="w-4 h-4" /> },
      { label: 'Control Systems and Simulations', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Data Analysis and Machine Learning',
    topics: [
      { label: 'Data Analysis in MATLAB', icon: <FileText className="w-4 h-4" /> },
      { label: 'Machine Learning with MATLAB', icon: <Code className="w-4 h-4" /> },
      { label: 'Deep Learning Toolbox', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'MATLAB Project (e.g., Data Analysis Project)', icon: <FileText className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Certification and Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function MATLABSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">MATLAB Course Syllabus</h2>
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
