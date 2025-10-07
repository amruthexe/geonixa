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
  FileText,
  BarChart3,
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
    title: '1. Introduction to Project Management',
    topics: [
      { label: 'What is Project Management?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Project Management Phases', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Key Project Management Terminologies', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Project Initiation & Planning',
    topics: [
      { label: 'Project Charter', icon: <Database className="w-4 h-4" /> },
      { label: 'Defining Project Scope', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Work Breakdown Structure (WBS)', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Project Scheduling & Time Management',
    topics: [
      { label: 'Gantt Charts', icon: <Code className="w-4 h-4" /> },
      { label: 'Critical Path Method (CPM)', icon: <FileText className="w-4 h-4" /> },
      { label: 'PERT Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Resource Management',
    topics: [
      { label: 'Resource Allocation & Leveling', icon: <Code className="w-4 h-4" /> },
      { label: 'Human Resource Management', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Cost Estimation & Budgeting', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Risk Management & Quality Control',
    topics: [
      { label: 'Risk Identification & Assessment', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Risk Mitigation Strategies', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Quality Assurance & Control', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Project Execution & Monitoring',
    topics: [
      { label: 'Team Management', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Progress Tracking', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Managing Stakeholder Expectations', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Project Closure & Evaluation',
    topics: [
      { label: 'Project Deliverables', icon: <Code className="w-4 h-4" /> },
      { label: 'Project Evaluation & Documentation', icon: <FileText className="w-4 h-4" /> },
      { label: 'Lessons Learned', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project Management Tools & Software',
    topics: [
      { label: 'Project Management Tools Overview', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Software Tools (MS Project, Trello, Asana)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Using Tools for Collaboration', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '9. Project Management Certification & Career',
    topics: [
      { label: 'Capstone Project', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function ProjectManagementSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Project Management Course Syllabus</h2>
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
