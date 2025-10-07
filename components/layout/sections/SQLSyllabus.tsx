'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Database,
  FileText,
  Terminal,
  Code,
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
    title: '1. Introduction to SQL',
    topics: [
      { label: 'What is SQL?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'SQL Syntax', icon: <Terminal className="w-4 h-4" /> },
      { label: 'SQL Queries Structure', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. SQL Database Basics',
    topics: [
      { label: 'Creating a Database', icon: <Database className="w-4 h-4" /> },
      { label: 'Data Types in SQL', icon: <FileText className="w-4 h-4" /> },
      { label: 'Primary Key & Foreign Key', icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. SQL Data Retrieval',
    topics: [
      { label: 'SELECT Statement', icon: <Code className="w-4 h-4" /> },
      { label: 'WHERE Clause', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Sorting and Filtering', icon: <FileText className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. SQL Joins',
    topics: [
      { label: 'INNER JOIN', icon: <Code className="w-4 h-4" /> },
      { label: 'LEFT JOIN', icon: <Code className="w-4 h-4" /> },
      { label: 'RIGHT JOIN', icon: <Code className="w-4 h-4" /> },
      { label: 'FULL OUTER JOIN', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. SQL Subqueries and Advanced Queries',
    topics: [
      { label: 'Subqueries', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'GROUP BY & HAVING Clause', icon: <Database className="w-4 h-4" /> },
      { label: 'Union and Intersection', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. SQL Data Manipulation',
    topics: [
      { label: 'INSERT INTO', icon: <Database className="w-4 h-4" /> },
      { label: 'UPDATE & DELETE', icon: <FileText className="w-4 h-4" /> },
      { label: 'Transaction Management', icon: <Code className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. SQL Indexes & Optimization',
    topics: [
      { label: 'Indexes in SQL', icon: <Database className="w-4 h-4" /> },
      { label: 'Query Optimization', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. SQL Data Security & Backup',
    topics: [
      { label: 'Data Encryption', icon: <FileText className="w-4 h-4" /> },
      { label: 'Backup & Recovery', icon: <Terminal className="w-4 h-4" /> },
      { label: 'User Privileges', icon: <Code className="w-4 h-4" /> },
    ],
  },
]

export default function SQLSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">SQL Course Syllabus</h2>
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
