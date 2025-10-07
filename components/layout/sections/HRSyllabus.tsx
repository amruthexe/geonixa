'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Terminal,
  Cpu,
  BookOpen,
  Database,
  BarChart3,
  FileText,
  FlaskConical,
  Code,
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
    title: '1. Introduction to Human Resources',
    topics: [
      { label: 'What is Human Resources?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'HR’s Role in Organizational Success', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Key HR Functions', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Recruitment & Talent Acquisition',
    topics: [
      { label: 'Job Analysis & Job Descriptions', icon: <Database className="w-4 h-4" /> },
      { label: 'Sourcing Candidates', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Interviewing & Selection', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Employee Engagement & Retention',
    topics: [
      { label: 'Building a Positive Work Culture', icon: <Code className="w-4 h-4" /> },
      { label: 'Employee Motivation & Engagement Strategies', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Retention Strategies', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Performance Management',
    topics: [
      { label: 'Setting Goals & Expectations', icon: <Code className="w-4 h-4" /> },
      { label: 'Performance Reviews & Feedback', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Managing Underperformance', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Compensation & Benefits',
    topics: [
      { label: 'Designing Compensation Packages', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Employee Benefits & Perks', icon: <Database className="w-4 h-4" /> },
      { label: 'Salary Structure & Pay Equity', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Employee Relations & Conflict Resolution',
    topics: [
      { label: 'Managing Employee Relations', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Conflict Resolution Techniques', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Legal & Ethical Considerations', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. HR Technologies & Analytics',
    topics: [
      { label: 'HR Software & Tools', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'HR Analytics & Data-Driven Decision Making', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Automating HR Processes', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. HR Legal Compliance & Risk Management',
    topics: [
      { label: 'Employment Laws & Regulations', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Workplace Safety & Health', icon: <Database className="w-4 h-4" /> },
      { label: 'Managing Risk in HR', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. HR Project & Certification',
    topics: [
      { label: 'HR Project (e.g., Employee Engagement Plan)', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function HRSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">HR Course Syllabus</h2>
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
