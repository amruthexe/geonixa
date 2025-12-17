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
  Network,
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
    title: '1. Introduction to Machine Learning',
    topics: [
      { label: 'Definition & History', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Types: Supervised vs Unsupervised', icon: <BookOpen className="w-4 h-4" /> },
      { label: 'Setting up Python Environment', icon: <Terminal className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. Data Preprocessing & Visualization',
    topics: [
      { label: 'Pandas & NumPy Essentials', icon: <Code2 className="w-4 h-4" /> },
      { label: 'Handling Missing Data', icon: <Database className="w-4 h-4" /> },
      { label: 'EDA with Matplotlib & Seaborn', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Regression Algorithms',
    topics: [
      { label: 'Linear Regression', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Polynomial Regression', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Project: House Price Prediction', icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Classification Algorithms',
    topics: [
      { label: 'Logistic Regression', icon: <Network className="w-4 h-4" /> },
      { label: 'Decision Trees & Random Forests', icon: <Network className="w-4 h-4" /> },
      { label: 'Support Vector Machines (SVM)', icon: <Network className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Clustering & Dimensionality Reduction',
    topics: [
      { label: 'K-Means Clustering', icon: <Database className="w-4 h-4" /> },
      { label: 'Hierarchical Clustering', icon: <Database className="w-4 h-4" /> },
      { label: 'PCA (Principal Component Analysis)', icon: <BarChart3 className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Model Evaluation & Tuning',
    topics: [
      { label: 'Confusion Matrix, Precision, Recall', icon: <BarChart3 className="w-4 h-4" /> },
      { label: 'Cross-Validation (K-Fold)', icon: <Cpu className="w-4 h-4" /> },
      { label: 'Grid Search & Hyperparameter Tuning', icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Introduction to Neural Networks',
    topics: [
      { label: 'Perceptrons & Artificial Neural Networks', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Backpropagation Intuition', icon: <BrainCog className="w-4 h-4" /> },
      { label: 'Basic TensorFlow/Keras Implementation', icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  {
    title: '8. Capstone Project',
    topics: [
      { label: 'Deploying ML Model with Flask/Streamlit', icon: <Terminal className="w-4 h-4" /> },
      { label: 'End-to-End Real World Project', icon: <Rocket className="w-4 h-4" /> },
    ],
  },
]

// Fix for Rocket icon if not imported or used
function Rocket(props: any) {
    return <Cpu {...props} /> // Fallback
}

export default function MLSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">ML Course Syllabus</h2>
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
