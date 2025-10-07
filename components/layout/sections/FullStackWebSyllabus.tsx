'use client';

import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Code,
  LayoutDashboard,
  FileText,
  Server,
  Database,
  Globe,
  ShieldCheck,
  Terminal,
  Cpu,
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
    title: '1. HTML & CSS Fundamentals',
    topics: [
      { label: 'HTML Structure & Tags', icon: <FileText className="w-4 h-4" /> },
      { label: 'CSS Selectors, Flexbox & Grid', icon: <LayoutDashboard className="w-4 h-4" /> },
      { label: 'Responsive Design & Media Queries', icon: <Globe className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. JavaScript Essentials',
    topics: [
      { label: 'Variables, Functions & Loops', icon: <Code className="w-4 h-4" /> },
      { label: 'DOM Manipulation', icon: <LayoutDashboard className="w-4 h-4" /> },
      { label: 'ES6+ Features & Events', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Advanced Frontend: React.js',
    topics: [
      { label: 'React Components & Props', icon: <Code className="w-4 h-4" /> },
      { label: 'State Management & Hooks', icon: <Terminal className="w-4 h-4" /> },
      { label: 'React Router & Forms', icon: <LayoutDashboard className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Backend Development with Node.js',
    topics: [
      { label: 'Node.js Basics & Express.js', icon: <Server className="w-4 h-4" /> },
      { label: 'Routing, Middleware & APIs', icon: <Code className="w-4 h-4" /> },
      { label: 'Authentication (JWT, OAuth)', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Database Integration & MongoDB',
    topics: [
      { label: 'NoSQL Concepts & MongoDB', icon: <Database className="w-4 h-4" /> },
      { label: 'Mongoose ODM', icon: <Server className="w-4 h-4" /> },
      { label: 'Connecting MongoDB to Express', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Full Stack Integration',
    topics: [
      { label: 'Connecting Frontend with Backend', icon: <Globe className="w-4 h-4" /> },
      { label: 'Axios & RESTful API Consumption', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Form Handling & Validation', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Deployment & Project Building',
    topics: [
      { label: 'Deploying with Vercel & Render', icon: <Globe className="w-4 h-4" /> },
      { label: 'Git, GitHub & CI/CD Basics', icon: <Code className="w-4 h-4" /> },
      { label: 'Capstone Project + Certification', icon: <ShieldCheck className="w-4 h-4" /> },
    ],
  },
];

export default function FullStackWebSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Syllabus</h2>
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
