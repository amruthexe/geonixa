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
  User,
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
    title: '1. Introduction to Revit Architecture',
    topics: [
      { label: 'What is Revit Architecture?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Revit Interface Overview', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Revit File Setup and Templates', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Basic Tools for Architectural Modeling',
    topics: [
      { label: 'Creating and Modifying Walls', icon: <Code className="w-4 h-4" /> },
      { label: 'Adding Doors, Windows, and Openings', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Creating Floors and Roofs', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Understanding Viewports and Drafting',
    topics: [
      { label: 'Setting Up Views and Viewports', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Drafting Tools in Revit', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Visibility and Graphics Overrides', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Advanced Revit Features',
    topics: [
      { label: 'Creating and Using Families', icon: <Code className="w-4 h-4" /> },
      { label: 'Worksharing and Collaboration', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Advanced Modeling Tools (Structural, MEP)', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Revit for Construction Documentation',
    topics: [
      { label: 'Creating Sections and Elevations', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Annotating Drawings', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Sheets and Plotting', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Rendering and Visualization',
    topics: [
      { label: 'Rendering Settings and Techniques', icon: <Code className="w-4 h-4" /> },
      { label: 'Creating Views for Presentations', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Lighting and Materials in Revit', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Revit for Building Performance and Analysis',
    topics: [
      { label: 'Energy Analysis in Revit', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Structural Analysis and Modeling', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Sustainability Tools in Revit', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (Design a Building)', icon: <User className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
];

export default function RevitSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Revit Architecture Course Syllabus</h2>
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
