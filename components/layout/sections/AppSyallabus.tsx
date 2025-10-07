'use client'

import { ChevronDown, ChevronUp, BookOpen, Terminal, Smartphone, Code2 } from 'lucide-react'
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
    title: '1. Introduction to App Development',
    topics: [
      { label: 'What is Mobile App Development?', icon: <Smartphone className="w-4 h-4" /> },
      { label: 'Why Choose Flutter?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Setting Up Flutter SDK', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Dart Programming Language',
    topics: [
      { label: 'Variables and Data Types', icon: <Code2 className="w-4 h-4" /> },
      { label: 'Control Flow & Functions', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Object-Oriented Concepts in Dart', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Flutter Widgets & UI Basics',
    topics: [
      { label: 'Stateless vs Stateful Widgets', icon: <Smartphone className="w-4 h-4" /> },
      { label: 'Layouts: Row, Column, Stack', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Common Widgets: Text, Button, Image', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Navigation and Routing',
    topics: [
      { label: 'Page Navigation in Flutter', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Named Routes & Route Management', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. State Management',
    topics: [
      { label: 'What is State?', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'setState, Provider, Riverpod', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. APIs and JSON Integration',
    topics: [
      { label: 'Fetching Data using HTTP', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Parsing JSON', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Firebase Integration',
    topics: [
      { label: 'Firebase Setup', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Authentication', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Firestore Database', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. App Deployment',
    topics: [
      { label: 'Debug vs Release Mode', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Build for Android & iOS', icon: <Smartphone className="w-4 h-4" /> },
      { label: 'Publishing to Play Store', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
]

export default function AppSyllabus() {
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
