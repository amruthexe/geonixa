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
  Cloud,
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
    title: '1. Introduction to IoT',
    topics: [
      { label: 'What is IoT?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'History of IoT', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Applications of IoT', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. IoT Architecture & Components',
    topics: [
      { label: 'IoT Architecture Overview', icon: <Code className="w-4 h-4" /> },
      { label: 'Sensors and Actuators', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Connectivity & Communication Protocols', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Embedded Systems for IoT',
    topics: [
      { label: 'Microcontrollers and Microprocessors', icon: <Cloud className="w-4 h-4" /> },
      { label: 'Programming IoT Devices', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Interfacing Sensors and Actuators', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. IoT Communication Protocols',
    topics: [
      { label: 'Wi-Fi, Bluetooth, Zigbee', icon: <Code className="w-4 h-4" /> },
      { label: 'MQTT and CoAP', icon: <Database className="w-4 h-4" /> },
      { label: 'Cellular Networks and LPWAN', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Cloud Computing for IoT',
    topics: [
      { label: 'Cloud Platforms for IoT', icon: <Cloud className="w-4 h-4" /> },
      { label: 'Data Storage and Management', icon: <Database className="w-4 h-4" /> },
      { label: 'Cloud Services and APIs', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. IoT Security & Privacy',
    topics: [
      { label: 'Security Challenges in IoT', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Encryption and Authentication', icon: <Code className="w-4 h-4" /> },
      { label: 'Privacy Issues in IoT Systems', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. IoT Data Analytics',
    topics: [
      { label: 'Data Collection & Preprocessing', icon: <FileText className="w-4 h-4" /> },
      { label: 'Data Visualization in IoT', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Predictive Analytics for IoT', icon: <Cloud className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. IoT Applications & Case Studies',
    topics: [
      { label: 'Smart Home Applications', icon: <Code className="w-4 h-4" /> },
      { label: 'Healthcare & Industrial IoT', icon: <Database className="w-4 h-4" /> },
      { label: 'Agriculture and Environmental IoT', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Final Project & Certification',
    topics: [
      { label: 'IoT Project (e.g., Smart Device)', icon: <FileText className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <Cloud className="w-4 h-4" /> },
    ],
  },
];

export default function IOTSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">IoT Course Syllabus</h2>
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
