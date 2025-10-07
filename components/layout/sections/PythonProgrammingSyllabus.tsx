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
    title: '1. Introduction to Python',
    topics: [
      { label: 'What is Python?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Installing Python & IDEs', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Basic Syntax & First Program', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Variables, Data Types & Operators',
    topics: [
      { label: 'Numbers, Strings, Booleans', icon: <Database className="w-4 h-4" /> },
      { label: 'Type Casting & Operators', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Input/Output in Python', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Control Flow',
    topics: [
      { label: 'Conditional Statements (if, elif, else)', icon: <Code className="w-4 h-4" /> },
      { label: 'Loops: for & while', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Break & Continue', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Functions & Modules',
    topics: [
      { label: 'Defining Functions & Scope', icon: <Code className="w-4 h-4" /> },
      { label: 'Arguments & Return Values', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Importing Modules & Packages', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Data Structures',
    topics: [
      { label: 'Lists, Tuples, Sets', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Dictionaries & Nested Structures', icon: <Database className="w-4 h-4" /> },
      { label: 'Comprehensions & Iterations', icon: <Wand2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Object-Oriented Programming',
    topics: [
      { label: 'Classes & Objects', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Inheritance & Polymorphism', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Magic Methods & Encapsulation', icon: <Wand2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. File Handling & Exceptions',
    topics: [
      { label: 'Reading & Writing Files', icon: <FileText className="w-4 h-4" /> },
      { label: 'Try/Except Blocks', icon: <Code className="w-4 h-4" /> },
      { label: 'Context Managers', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Projects & Certification',
    topics: [
      { label: 'Build Mini Projects (Quiz, To-do App)', icon: <Wand2 className="w-4 h-4" /> },
      { label: 'Project Presentation & Review', icon: <FileText className="w-4 h-4" /> },
      { label: 'Get Certified + Placement Assistance', icon: <FlaskConical className="w-4 h-4" /> },
    ],
  },
]

export default function PythonProgrammingSyllabus() {
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
