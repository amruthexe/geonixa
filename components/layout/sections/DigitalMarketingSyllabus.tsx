'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Terminal,
  Cpu,
  BookOpen,
  Database,
  Code,
  Wand2,
  BarChart3,
  FileText,
  FlaskConical,
} from 'lucide-react'

type SyllabusItem = {
  title: string
  topics?: {
    label: string
    icon: JSX.Element
  }[]
}

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Introduction to Digital Marketing',
    topics: [
      { label: 'Overview of Digital Marketing Channels', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Importance of SEO, SEM, and SMM', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Setting Up Digital Marketing Strategy', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Search Engine Optimization (SEO)',
    topics: [
      { label: 'On-page SEO Techniques', icon: <Database className="w-4 h-4" /> },
      { label: 'Off-page SEO Strategies', icon: <Cpu className="w-4 h-4" /> },
      { label: 'SEO Tools & Analytics', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Search Engine Marketing (SEM)',
    topics: [
      { label: 'Google Ads Campaigns', icon: <Code className="w-4 h-4" /> },
      { label: 'Keyword Research & Targeting', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Optimizing Ad Performance', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Social Media Marketing (SMM)',
    topics: [
      { label: 'Facebook, Instagram, LinkedIn Marketing', icon: <Code className="w-4 h-4" /> },
      { label: 'Creating Engaging Social Media Content', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Analyzing Social Media Metrics', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Email Marketing',
    topics: [
      { label: 'Building Email Campaigns', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Email List Management & Segmentation', icon: <Database className="w-4 h-4" /> },
      { label: 'Email Automation & Analytics', icon: <Wand2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Content Marketing',
    topics: [
      { label: 'Content Creation for Blogs and Websites', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Content Promotion Strategies', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Content Performance Metrics', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Digital Marketing Analytics',
    topics: [
      { label: 'Google Analytics for Digital Marketing', icon: <FileText className="w-4 h-4" /> },
      { label: 'Key Metrics & KPIs to Track', icon: <Code className="w-4 h-4" /> },
      { label: 'Optimizing Campaigns with Data', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project & Certification',
    topics: [
      { label: 'Digital Marketing Campaign Project', icon: <Wand2 className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function DigitalMarketingSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Digital Marketing Syllabus</h2>
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
  )
}
