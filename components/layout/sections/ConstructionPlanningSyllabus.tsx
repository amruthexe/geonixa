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
    title: '1. Introduction to Construction Planning',
    topics: [
      { label: 'Role of Construction Planning in Project Success', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Types of Construction Projects', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Key Concepts of Construction Scheduling', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Project Scheduling and Time Management',
    topics: [
      { label: 'Gantt Charts and Network Diagrams', icon: <Code className="w-4 h-4" /> },
      { label: 'Critical Path Method (CPM)', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Time Estimation and Allocation', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Resource Planning and Allocation',
    topics: [
      { label: 'Types of Resources (Labor, Equipment, Materials)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Resource Allocation Techniques', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Resource Leveling and Smoothing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Cost Estimation and Budgeting',
    topics: [
      { label: 'Estimating Construction Costs', icon: <Code className="w-4 h-4" /> },
      { label: 'Cost Breakdown Structure (CBS)', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Cost Control and Monitoring', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Risk Management in Construction Projects',
    topics: [
      { label: 'Identifying Construction Risks', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Risk Mitigation Strategies', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Risk Assessment and Monitoring', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Quality Control and Assurance in Construction',
    topics: [
      { label: 'Quality Standards and Regulations', icon: <Code className="w-4 h-4" /> },
      { label: 'Quality Management Plan', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Monitoring and Reporting Quality', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Construction Project Communication and Documentation',
    topics: [
      { label: 'Communication Channels in Construction Projects', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Reporting and Documentation', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Stakeholder Management', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project Work & Certification',
    topics: [
      { label: 'Capstone Project (e.g., Building a Construction Schedule)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function ConstructionPlanningSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Construction Planning Course Syllabus</h2>
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
