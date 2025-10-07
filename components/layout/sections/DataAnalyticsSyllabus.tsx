'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  BarChart2,
  Database,
  FileText,
  Settings,
  MonitorCheck,
  ClipboardList,
  BookOpen,
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
    title: '1. Introduction to Data Analytics',
    topics: [
      { label: 'What is Data Analytics?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Analytics vs BI vs Data Science', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Career Scope & Applications', icon: <MonitorCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Excel for Data Analysis',
    topics: [
      { label: 'Basic to Advanced Formulas', icon: <Settings className="w-4 h-4" /> },
      { label: 'Pivot Tables & Dashboards', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Data Cleaning in Excel', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. SQL for Data Analytics',
    topics: [
      { label: 'Basics of SQL & Joins', icon: <Database className="w-4 h-4" /> },
      { label: 'Aggregation & Filtering', icon: <Settings className="w-4 h-4" /> },
      { label: 'Real-time Query Writing', icon: <ClipboardList className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Power BI & Data Visualization',
    topics: [
      { label: 'Data Import & Modeling', icon: <Database className="w-4 h-4" /> },
      { label: 'Creating Interactive Dashboards', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Publishing Reports', icon: <MonitorCheck className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Python for Data Analytics',
    topics: [
      { label: 'Pandas, NumPy Basics', icon: <Settings className="w-4 h-4" /> },
      { label: 'Data Cleaning with Python', icon: <FileText className="w-4 h-4" /> },
      { label: 'Intro to Matplotlib & Seaborn', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Capstone Projects & Certification',
    topics: [
      { label: 'Real-world Case Studies', icon: <ClipboardList className="w-4 h-4" /> },
      { label: 'Portfolio Building', icon: <MonitorCheck className="w-4 h-4" /> },
      { label: 'Certification & Career Support', icon: <FileText className="w-4 h-4" /> },
    ],
  },
]

export default function DataAnalyticsSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
  )
}
