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
    title: '1. Introduction to Business Analytics',
    topics: [
      { label: 'What is Business Analytics?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Role of Data in Decision Making', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Overview of Analytics Tools', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Data Collection & Preprocessing',
    topics: [
      { label: 'Types of Data', icon: <Database className="w-4 h-4" /> },
      { label: 'Data Cleaning & Transformation', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Handling Missing Data', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Exploratory Data Analysis (EDA)',
    topics: [
      { label: 'Data Visualization Techniques', icon: <Code className="w-4 h-4" /> },
      { label: 'Statistical Analysis', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Identifying Patterns & Trends', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Predictive Analytics & Modelling',
    topics: [
      { label: 'Linear & Logistic Regression', icon: <Code className="w-4 h-4" /> },
      { label: 'Decision Trees & Random Forest', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Model Evaluation Metrics', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Time Series Analysis',
    topics: [
      { label: 'Components of Time Series Data', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Seasonal Decomposition', icon: <Database className="w-4 h-4" /> },
      { label: 'Forecasting Techniques', icon: <Wand2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Advanced Analytics Techniques',
    topics: [
      { label: 'Cluster Analysis & K-Means', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Dimensionality Reduction (PCA)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Neural Networks & Deep Learning', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Data-Driven Decision Making & Visualization',
    topics: [
      { label: 'Interactive Dashboards (Power BI, Tableau)', icon: <FileText className="w-4 h-4" /> },
      { label: 'Data-Driven Business Strategies', icon: <Code className="w-4 h-4" /> },
      { label: 'Reporting Insights for Stakeholders', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project & Certification',
    topics: [
      { label: 'Business Analytics Project (e.g., Sales Forecasting)', icon: <Wand2 className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Career Support', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function BusinessAnalyticsSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Business Analytics Syllabus</h2>
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
