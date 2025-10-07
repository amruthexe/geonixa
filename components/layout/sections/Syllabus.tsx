'use client'

import { ChevronDown, ChevronUp, BookOpen, Terminal } from 'lucide-react'
import { useState } from 'react'

type SyllabusItem = {
  title: string
  topics?: {
    label: string
    icon: JSX.Element
  }[]
}

const syllabusData: SyllabusItem[] = [
  {
    title: '1. Web Development Basic',
    topics: [
      { label: 'Web Fundamentals', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'The Command Line', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  { title: '2. Hyper Text Markup Lanuage (HTML)', topics: [
      { label: 'Introduction to HTML5', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'HTML tags, Metadata', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Forms', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'HTML vs HTML5', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Developer Tools', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  { title: '3. Web Design Basics' },
  { title: '4. Cascading Style Sheets [CSS]' },
  { title: '5. Node Js' },
  { title: '6. Object Oriented Programming' },
  { title: '7. JQuery' },
  { title: '8. Database Management' },
  { title: '9. Java Script Programming' },
  { title: '10. Data Base With MongoDB' },
]

export default function Syllabus() {
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
            <div key={index} className="rounded bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
              <button
                className="w-full flex justify-between items-center p-4 text-left text-base font-medium"
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {openIndex === index && item.topics && (
                <div className="px-6 pb-4 space-y-2">
                  {item.topics.map((topic, tIndex) => (
                    <div key={tIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
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
