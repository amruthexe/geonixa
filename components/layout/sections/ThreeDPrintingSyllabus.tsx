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
    title: '1. Introduction to 3D Printing',
    topics: [
      { label: 'What is 3D Printing?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Types of 3D Printers', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applications of 3D Printing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. 3D Printing Materials',
    topics: [
      { label: 'Types of Filaments and Resins', icon: <Code className="w-4 h-4" /> },
      { label: 'Choosing the Right Material', icon: <FileText className="w-4 h-4" /> },
      { label: 'Material Properties', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. 3D Modeling for Printing',
    topics: [
      { label: 'Introduction to 3D Modeling', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Using CAD Software for 3D Modeling', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Preparing Models for Printing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. 3D Printing Techniques',
    topics: [
      { label: 'FDM (Fused Deposition Modeling)', icon: <Code className="w-4 h-4" /> },
      { label: 'SLA (Stereolithography)', icon: <FileText className="w-4 h-4" /> },
      { label: 'SLS (Selective Laser Sintering)', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Post-Processing 3D Printed Objects',
    topics: [
      { label: 'Cleaning and Finishing Techniques', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Painting and Coating', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Assembly and Joining', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Troubleshooting and Maintenance',
    topics: [
      { label: 'Common Printing Issues', icon: <Code className="w-4 h-4" /> },
      { label: 'Printer Calibration', icon: <FileText className="w-4 h-4" /> },
      { label: 'Maintaining and Upgrading 3D Printers', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (Create a 3D Printed Object)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function ThreeDPrintingSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">3D Printing Course Syllabus</h2>
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
