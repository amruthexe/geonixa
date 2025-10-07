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
  Globe,
  Users,
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
    title: '1. Introduction to BIM',
    topics: [
      { label: 'What is BIM?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'The BIM Process', icon: <Cpu className="w-4 h-4" /> },
      { label: 'BIM Software Overview', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. BIM Tools and Technologies',
    topics: [
      { label: 'Revit: A Leading BIM Tool', icon: <Code className="w-4 h-4" /> },
      { label: 'Navisworks: Clash Detection & Coordination', icon: <FileText className="w-4 h-4" /> },
      { label: 'BIM 360 for Collaboration', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. BIM for Architecture and Design',
    topics: [
      { label: 'Architectural Modeling in BIM', icon: <Globe className="w-4 h-4" /> },
      { label: 'Design Visualization & Simulation', icon: <Users className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. BIM for Construction and Operations',
    topics: [
      { label: 'Scheduling & Project Management', icon: <Code className="w-4 h-4" /> },
      { label: 'Cost Estimation & Budgeting', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. BIM Collaboration and Communication',
    topics: [
      { label: 'Collaboration Across Teams', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Cloud-Based BIM Collaboration', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. BIM for Facilities Management',
    topics: [
      { label: 'Using BIM for Facility Operations', icon: <Layers3 className="w-4 h-4" /> },
      { label: 'Maintenance & Lifecycle Management', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (e.g., BIM for Building Design)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function BIMCourseSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">BIM Course Syllabus</h2>
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
