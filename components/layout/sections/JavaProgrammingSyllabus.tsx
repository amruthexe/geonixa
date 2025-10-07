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
    title: '1. Introduction to Java',
    topics: [
      { label: 'Why Java? History & Evolution', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Installing JDK & IDEs (Eclipse/IntelliJ)', icon: <Cpu className="w-4 h-4" /> },
      { label: 'First Java Program: Hello World', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Variables, Data Types & Operators',
    topics: [
      { label: 'Primitive Data Types', icon: <Database className="w-4 h-4" /> },
      { label: 'Type Casting, Operators', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Input/Output in Java', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Control Flow Statements',
    topics: [
      { label: 'if-else, switch-case', icon: <Code className="w-4 h-4" /> },
      { label: 'for, while, do-while loops', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Break & Continue', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Classes & Object-Oriented Concepts',
    topics: [
      { label: 'Creating Classes & Objects', icon: <Code className="w-4 h-4" /> },
      { label: 'Constructors, this Keyword', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Encapsulation, Abstraction', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Inheritance & Polymorphism',
    topics: [
      { label: 'Types of Inheritance in Java', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Method Overloading & Overriding', icon: <Database className="w-4 h-4" /> },
      { label: 'super and final Keywords', icon: <Wand2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Exception Handling & File I/O',
    topics: [
      { label: 'try-catch-finally', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Custom Exceptions', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Reading/Writing Files', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Collections & Advanced Topics',
    topics: [
      { label: 'ArrayList, HashMap, Set', icon: <FileText className="w-4 h-4" /> },
      { label: 'Lambda Expressions & Streams', icon: <Code className="w-4 h-4" /> },
      { label: 'Multithreading Basics', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Project & Certification',
    topics: [
      { label: 'Mini Project (e.g., Student Manager)', icon: <Wand2 className="w-4 h-4" /> },
      { label: 'Project Review & Feedback', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Interview Prep', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function JavaProgrammingSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Java Programming Syllabus</h2>
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
