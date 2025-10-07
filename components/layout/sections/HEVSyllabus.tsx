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
  Car,
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
    title: '1. Introduction to Hybrid Electric Vehicles',
    topics: [
      { label: 'What is a Hybrid Electric Vehicle?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Types of HEVs', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applications of Hybrid Electric Vehicles', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Electric Vehicle Components & Powertrain',
    topics: [
      { label: 'Battery Technologies (Li-ion, NiMH)', icon: <Code className="w-4 h-4" /> },
      { label: 'Electric Motors and Controllers', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Power Electronics in HEVs', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Hybrid Powertrain Architectures',
    topics: [
      { label: 'Series Hybrid Architecture', icon: <Car className="w-4 h-4" /> },
      { label: 'Parallel Hybrid Architecture', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Series-Parallel Hybrid Systems', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Energy Management and Control Systems',
    topics: [
      { label: 'Energy Flow Management', icon: <Code className="w-4 h-4" /> },
      { label: 'Regenerative Braking Systems', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Control Strategies for Hybrid Systems', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Electric Vehicle Charging and Infrastructure',
    topics: [
      { label: 'Charging Methods (AC, DC, Wireless)', icon: <Car className="w-4 h-4" /> },
      { label: 'Charging Station Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Battery Management Systems (BMS)', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Environmental Impact and Sustainability',
    topics: [
      { label: 'Life Cycle Analysis of HEVs', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Reduction in Greenhouse Gas Emissions', icon: <Cpu className="w-4 h-4" /> },
      { label: 'HEVs in Sustainable Transportation', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Market Trends and Future of HEVs',
    topics: [
      { label: 'Global HEV Market Overview', icon: <Code className="w-4 h-4" /> },
      { label: 'Technological Innovations in HEVs', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Government Policies and Incentives', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. HEV Design and Simulation',
    topics: [
      { label: 'Design Considerations for HEVs', icon: <Car className="w-4 h-4" /> },
      { label: 'Modeling and Simulation Tools', icon: <Cpu className="w-4 h-4" /> },
      { label: 'HEV Performance and Efficiency', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'Capstone Project: Design an HEV', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function HEVSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Hybrid Electric Vehicles Course Syllabus</h2>
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
