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
    title: '1. Introduction to AutoCAD and SolidWorks',
    topics: [
      { label: 'What is AutoCAD and SolidWorks?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Applications in Engineering & Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'User Interface and Tools Overview', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Getting Started with AutoCAD',
    topics: [
      { label: 'AutoCAD Interface and Settings', icon: <Code className="w-4 h-4" /> },
      { label: 'Creating 2D Shapes and Designs', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Drawing and Modifying Objects', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Advanced AutoCAD Techniques',
    topics: [
      { label: 'Layer Management and Advanced Modifications', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Dimensioning and Annotation', icon: <Cpu className="w-4 h-4" /> },
      { label: '3D Modeling Basics in AutoCAD', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Introduction to SolidWorks',
    topics: [
      { label: 'SolidWorks User Interface and Tools', icon: <Code className="w-4 h-4" /> },
      { label: 'Sketching in SolidWorks', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Creating Parts and Assemblies', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Advanced SolidWorks Techniques',
    topics: [
      { label: '3D Modeling and Part Design', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Sheet Metal Design in SolidWorks', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Assembly Design and Motion Studies', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Rendering and Animation in SolidWorks',
    topics: [
      { label: 'Rendering with SolidWorks Visualize', icon: <Code className="w-4 h-4" /> },
      { label: 'Animation and Motion Simulation', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Creating Realistic Models', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Designing with Advanced Tools',
    topics: [
      { label: '3D Printing and Prototyping', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Parametric Design in SolidWorks', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Design for Manufacturing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (e.g., Design a Product)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review and Feedback', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FileText className="w-4 h-4" /> },
    ],
  },
];

export default function AutoCADSolidWorksSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">AutoCAD & SolidWorks Course Syllabus</h2>
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
