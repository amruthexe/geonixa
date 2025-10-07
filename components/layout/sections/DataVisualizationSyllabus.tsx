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
    title: '1. Introduction to Data Visualization with Power BI & Tableau',
    topics: [
      { label: 'Introduction to Power BI & Tableau', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Setting Up Power BI & Tableau', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Power BI vs Tableau', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Data Import and Transformation',
    topics: [
      { label: 'Connecting to Different Data Sources', icon: <Database className="w-4 h-4" /> },
      { label: 'Data Cleaning & Transformation in Power BI', icon: <FileText className="w-4 h-4" /> },
      { label: 'Data Blending in Tableau', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Building Visuals and Dashboards',
    topics: [
      { label: 'Creating Basic Charts & Visuals in Power BI', icon: <LineChart className="w-4 h-4" /> },
      { label: 'Creating Interactive Dashboards in Tableau', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Formatting and Customizing Dashboards', icon: <BarChart2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Advanced Features & Visualizations',
    topics: [
      { label: 'Advanced Chart Types (Funnel, Waterfall, etc.)', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Using DAX for Complex Calculations in Power BI', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Creating Calculations and Parameters in Tableau', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Data Storytelling & Reporting',
    topics: [
      { label: 'Building a Narrative with Data', icon: <FileText className="w-4 h-4" /> },
      { label: 'Interactive Filters & Drill-Downs in Power BI', icon: <BarChart2 className="w-4 h-4" /> },
      { label: 'Creating Reports for Stakeholders in Tableau', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Deployment & Sharing Dashboards',
    topics: [
      { label: 'Publishing Dashboards to Power BI Service', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Sharing Dashboards and Reports in Tableau Server', icon: <FlaskConical className="w-4 h-4" /> },
      { label: 'Embedding Dashboards in Websites', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Career Readiness & Capstone Project',
    topics: [
      { label: 'Creating a Portfolio with Power BI & Tableau Projects', icon: <FileText className="w-4 h-4" /> },
      { label: 'Mock Interviews & Resume Tips for Data Visualization Roles', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Placement Assistance & Certification', icon: <Layers3 className="w-4 h-4" /> },
    ],
  },
]

export default function DataVisualizationSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Syllabus for Data Visualization using Power BI & Tableau</h2>
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
