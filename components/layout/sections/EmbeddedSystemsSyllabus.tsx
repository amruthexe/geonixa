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
    title: '1. Introduction to Embedded Systems',
    topics: [
      { label: 'What is Embedded System?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Types of Embedded Systems', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applications of Embedded Systems', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Microcontroller Fundamentals',
    topics: [
      { label: 'Introduction to Microcontrollers', icon: <FaMicrochip className="w-4 h-4" /> },
      { label: 'Architecture of Microcontrollers', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Programming Microcontrollers', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Embedded C Programming',
    topics: [
      { label: 'Basics of C Programming for Embedded Systems', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'I/O Operations & Interrupts', icon: <Database className="w-4 h-4" /> },
      { label: 'Memory Management in Embedded Systems', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Interfacing and Peripherals',
    topics: [
      { label: 'Analog to Digital Conversion', icon: <FaMicrochip className="w-4 h-4" /> },
      { label: 'Interfacing Sensors & Actuators', icon: <FileText className="w-4 h-4" /> },
      { label: 'Communication Protocols (SPI, I2C, UART)', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Real-Time Operating Systems (RTOS)',
    topics: [
      { label: 'Introduction to RTOS', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Task Scheduling & Management', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Multitasking in Embedded Systems', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. IoT Integration with Embedded Systems',
    topics: [
      { label: 'IoT Basics and Architecture', icon: <FaMicrochip className="w-4 h-4" /> },
      { label: 'Wireless Communication Technologies (Wi-Fi, Bluetooth, Zigbee)', icon: <FileText className="w-4 h-4" /> },
      { label: 'Cloud Integration with Embedded Devices', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Debugging and Troubleshooting Embedded Systems',
    topics: [
      { label: 'Debugging Techniques', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Testing Embedded Systems', icon: <Database className="w-4 h-4" /> },
      { label: 'Using Debugging Tools (JTAG, Oscilloscope)', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Advanced Embedded Systems',
    topics: [
      { label: 'FPGA and VHDL Programming', icon: <Code className="w-4 h-4" /> },
      { label: 'Embedded Linux Systems', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Advanced Communication Protocols', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'Embedded Systems Capstone Project', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Database className="w-4 h-4" /> },
    ],
  },
];

export default function EmbeddedSystemsSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Embedded Systems Course Syllabus</h2>
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
