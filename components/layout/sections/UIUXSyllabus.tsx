'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Brush,
  PenTool,
  Layout,
  BookOpen,
  Settings,
  Code2,
  Eye,
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
    title: '1. Introduction to UI/UX',
    topics: [
      { label: 'What is UI/UX?', icon: <Eye className="w-4 h-4" /> },
      { label: 'Importance & Scope', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Career Paths & Tools', icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. User Research & Empathy',
    topics: [
      { label: 'User Personas & Surveys', icon: <PenTool className="w-4 h-4" /> },
      { label: 'Empathy Mapping', icon: <Brush className="w-4 h-4" /> },
      { label: 'Competitor Analysis', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Wireframing & Prototyping',
    topics: [
      { label: 'Low & High Fidelity Wireframes', icon: <Layout className="w-4 h-4" /> },
      { label: 'Figma Hands-on Training', icon: <PenTool className="w-4 h-4" /> },
      { label: 'Interactive Prototypes', icon: <Settings className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. UI Design & Visual Principles',
    topics: [
      { label: 'Typography, Colors, Spacing', icon: <Brush className="w-4 h-4" /> },
      { label: 'Grids & Layouts', icon: <Layout className="w-4 h-4" /> },
      { label: 'Component Design', icon: <PenTool className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Design Systems & Handoff',
    topics: [
      { label: 'Building a Design System', icon: <Settings className="w-4 h-4" /> },
      { label: 'Handoff to Developers (Zeplin/Figma)', icon: <Code2 className="w-4 h-4" /> },
      { label: 'Exporting Assets & Specs', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Projects & Portfolio',
    topics: [
      { label: 'Redesign an Existing App', icon: <Layout className="w-4 h-4" /> },
      { label: 'Capstone Project Presentation', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Dribbble & Behance Portfolio Tips', icon: <Eye className="w-4 h-4" /> },
    ],
  },
]

export default function UIUXSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">UI/UX Design Syllabus</h2>
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
