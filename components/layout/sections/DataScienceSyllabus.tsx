'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Cpu,
  BookOpen,
  Database,
  BarChart2,
  FlaskConical,
  LineChart,
  Layers3,
  FileText,
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
    title: '1. Python Programming for Data Science',
    topics: [
      { label: 'Python Basics & Syntax', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Control Flow & Functions', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Data Structures in Python', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Data Analysis with Pandas & NumPy',
    topics: [
      { label: 'DataFrames & Series Operations', icon: <Database className="w-4 h-4" /> },
      { label: 'Cleaning & Preprocessing Data', icon: <FileText className="w-4 h-4" /> },
      { label: 'Aggregations & Grouping', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Data Visualization',
    topics: [
      { label: 'Matplotlib & Seaborn', icon: <LineChart className="w-4 h-4" /> },
      { label: 'Custom Plots & Styling', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Plotly & Interactive Dashboards', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Introduction to Machine Learning',
    topics: [
      { label: 'Supervised vs Unsupervised', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Scikit-learn & ML Models', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Model Evaluation & Metrics', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Working with Databases & SQL',
    topics: [
      { label: 'SQL Queries & Joins', icon: <Database className="w-4 h-4" /> },
      { label: 'Connecting Python to Databases', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Storing & Retrieving Data', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Deployment & Real-World Projects',
    topics: [
      { label: 'Streamlit & Flask Apps', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Git & Version Control', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Deploying to Vercel & Heroku', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Career Readiness & Capstone',
    topics: [
      { label: 'Portfolio Project on GitHub', icon: <FileText className="w-4 h-4" /> },
      { label: 'Mock Interviews & Resume Tips', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Placement Assistance + Certification', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
]

export default function DataScienceSyllabus() {
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
