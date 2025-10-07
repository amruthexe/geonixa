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
import { FaMicrochip } from 'react-icons/fa';

type SyllabusItem = {
  title: string;
  topics?: {
    label: string;
    icon: JSX.Element;
  }[];
};

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to VLSI Design',
    topics: [
      { label: 'What is VLSI?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'History of VLSI Technology', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applications of VLSI', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. CMOS Technology',
    topics: [
      { label: 'Introduction to CMOS Technology', icon: <FaMicrochip className="w-4 h-4" /> },
      { label: 'CMOS Inverter Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Scaling of CMOS Technology', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Digital Logic Design',
    topics: [
      { label: 'Boolean Algebra & Logic Gates', icon: <Code className="w-4 h-4" /> },
      { label: 'Combinational Logic Circuits', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Sequential Logic Circuits', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. VLSI Design Flow',
    topics: [
      { label: 'Design Entry & Synthesis', icon: <Database className="w-4 h-4" /> },
      { label: 'Place and Route', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Verification and Testing', icon: <FaMicrochip className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Layout and Fabrication',
    topics: [
      { label: 'VLSI Layout Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Fabrication Process', icon: <Database className="w-4 h-4" /> },
      { label: 'CMOS Fabrication Process', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Power and Timing Analysis',
    topics: [
      { label: 'Power Consumption in VLSI', icon: <FileText className="w-4 h-4" /> },
      { label: 'Timing Analysis & Optimization', icon: <Database className="w-4 h-4" /> },
      { label: 'Clock Tree Design', icon: <FaMicrochip className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Advanced VLSI Design',
    topics: [
      { label: 'Low Power VLSI Design', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'High-Speed VLSI Design', icon: <Cpu className="w-4 h-4" /> },
      { label: 'FPGA and ASIC Design', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. VLSI Testing and Debugging',
    topics: [
      { label: 'Test Benches and Fault Models', icon: <FileText className="w-4 h-4" /> },
      { label: 'Scan Chain Testing', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Design for Testability', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'VLSI Design Project', icon: <FaMicrochip className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <Database className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FileText className="w-4 h-4" /> },
    ],
  },
];

export default function VLSISyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">VLSI Course Syllabus</h2>
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
