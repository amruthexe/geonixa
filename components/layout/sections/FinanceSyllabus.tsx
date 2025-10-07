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
  BarChart3,
  FileText,
  FlaskConical,
  Wand2,
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
    title: '1. Introduction to Finance',
    topics: [
      { label: 'Overview of Financial Markets', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Role of Finance in Business', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Financial Systems & Institutions', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Financial Statements & Analysis',
    topics: [
      { label: 'Income Statement Analysis', icon: <Database className="w-4 h-4" /> },
      { label: 'Balance Sheet Analysis', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Cash Flow Statement', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Time Value of Money',
    topics: [
      { label: 'Discounting & Compounding', icon: <Code className="w-4 h-4" /> },
      { label: 'Present and Future Value Calculations', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Annuities & Perpetuities', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Investment Analysis & Portfolio Management',
    topics: [
      { label: 'Risk & Return Analysis', icon: <Code className="w-4 h-4" /> },
      { label: 'Diversification Strategies', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Asset Allocation & Portfolio Theory', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Corporate Finance & Capital Budgeting',
    topics: [
      { label: 'Capital Structure Decisions', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Cost of Capital', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Investment Appraisal Methods', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Financial Markets & Instruments',
    topics: [
      { label: 'Stock Markets & Bonds', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Derivatives & Commodities', icon: <Database className="w-4 h-4" /> },
      { label: 'Foreign Exchange & Market Risk', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Financial Planning & Risk Management',
    topics: [
      { label: 'Personal Financial Planning', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Insurance & Retirement Planning', icon: <Code className="w-4 h-4" /> },
      { label: 'Risk Management Strategies', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project & Certification',
    topics: [
      { label: 'Finance Project (e.g., Investment Strategy)', icon: <Wand2 className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function FinanceSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Finance Course Syllabus</h2>
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
