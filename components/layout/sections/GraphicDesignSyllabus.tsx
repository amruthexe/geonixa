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
  Brush,
  BarChart3,
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
    title: '1. Introduction to Graphic Design & Canva',
    topics: [
      { label: 'Understanding Graphic Design Principles', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Introduction to Canva Interface', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Creating a New Design in Canva', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Branding and Visual Identity Design',
    topics: [
      { label: 'Logo Design Basics', icon: <Brush className="w-4 h-4" /> },
      { label: 'Choosing Fonts & Colors for Your Brand', icon: <Code className="w-4 h-4" /> },
      { label: 'Creating Consistent Branding Templates', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Social Media Graphics & Ad Design',
    topics: [
      { label: 'Designing Facebook & Instagram Ads', icon: <FileText className="w-4 h-4" /> },
      { label: 'Designing Stories & Posts', icon: <Brush className="w-4 h-4" /> },
      { label: 'Creating High-Impact Visuals for Social Media', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Email Marketing & Newsletter Design',
    topics: [
      { label: 'Creating Beautiful Email Templates', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Optimizing Designs for Mobile & Desktop', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Brand Consistency in Email Marketing', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Creating Visual Content for Blogs & Websites',
    topics: [
      { label: 'Designing Banners, Featured Images & Thumbnails', icon: <Brush className="w-4 h-4" /> },
      { label: 'Using Canva to Create Web Graphics', icon: <FileText className="w-4 h-4" /> },
      { label: 'Integrating Your Designs into Blogs & Websites', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Advanced Canva Features & Tips',
    topics: [
      { label: 'Advanced Canva Tools (Background Remover, Animations)', icon: <Code className="w-4 h-4" /> },
      { label: 'Collaborating on Designs with Teams', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Exporting & Sharing Your Designs', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Final Project & Certification',
    topics: [
      { label: 'Complete a Real-world Design Project', icon: <FileText className="w-4 h-4" /> },
      { label: 'Review & Feedback from Experts', icon: <Brush className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
];

export default function GraphicDesignSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Canva & Graphic Design for Marketing Syllabus</h2>
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
