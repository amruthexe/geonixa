'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  Terminal,
  BrainCog,
  Code2,
  Database,
  Cpu,
  BarChart3,
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
    title: '1. Introduction to AI & ML',
    topics: [
      { label: 'What is Artificial Intelligence?', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Machine Learning vs Deep Learning', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Applications in Real Life', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Python for Data Science',
    topics: [
      { label: 'Python Basics & Libraries (NumPy, Pandas)', icon: <Code2 className="w-4 h-4" /> },
      { label: 'Data Cleaning & Preprocessing', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Matplotlib & Seaborn for Visualization', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Machine Learning Algorithms',
    topics: [
      { label: 'Supervised & Unsupervised Learning', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Regression & Classification', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Model Evaluation Techniques', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Deep Learning Foundations',
    topics: [
      { label: 'Neural Networks & Backpropagation', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Activation Functions & Optimizers', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Keras & TensorFlow Basics', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Natural Language Processing (NLP)',
    topics: [
      { label: 'Text Preprocessing', icon: <Terminal className="w-4 h-4" /> },
      { label: 'TF-IDF, Word2Vec, Transformers', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Sentiment Analysis Project', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Computer Vision with CNNs',
    topics: [
      { label: 'Image Processing with OpenCV', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Convolutional Neural Networks', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Image Classification Project', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. AI Model Deployment',
    topics: [
      { label: 'Saving & Loading Models', icon: <Database className="w-4 h-4" /> },
      { label: 'Streamlit / Flask for Frontend', icon: <Terminal className="w-4 h-4" /> },
      { label: 'Deploy on Web (Heroku/AWS)', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project & Certification',
    topics: [
      { label: 'End-to-End Project (AI Use Case)', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Presentation & Submission', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Receive Certificate + Placement Help', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
]

export default function AiSyllabus() {
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
