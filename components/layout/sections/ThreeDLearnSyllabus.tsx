'use client'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronUp,
  Box,
  PenTool,
  Layers,
  Palette,
  Video,
  Monitor,
  Lightbulb,
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
    title: '1. Introduction to 3D World',
    topics: [
      { label: 'Understanding 3D Space (X, Y, Z)', icon: <Box className="w-4 h-4" /> },
      { label: 'Overview of Pipeline (Modeling to Rendering)', icon: <Layers className="w-4 h-4" /> },
      { label: 'Introduction to Blender Interface', icon: <Monitor className="w-4 h-4" /> },
    ],
  },
  {
    title: '2. 3D Modeling Basics',
    topics: [
      { label: 'Mesh Editing Tools', icon: <PenTool className="w-4 h-4" /> },
      { label: 'Low Poly vs High Poly', icon: <Box className="w-4 h-4" /> },
      { label: 'Modifiers & Beveling', icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    title: '3. Sculpting & Organics',
    topics: [
      { label: 'Introduction to Digital Sculpting', icon: <PenTool className="w-4 h-4" /> },
      { label: 'Character Base Mesh', icon: <Box className="w-4 h-4" /> },
      { label: 'Retopology Basics', icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    title: '4. Texturing & Materials',
    topics: [
      { label: 'UV Unwrapping', icon: <Box className="w-4 h-4" /> },
      { label: 'PBR Materials (Physically Based Rendering)', icon: <Palette className="w-4 h-4" /> },
      { label: 'Procedural Texturing', icon: <Palette className="w-4 h-4" /> },
    ],
  },
  {
    title: '5. Lighting & Rendering',
    topics: [
      { label: 'Three-Point Lighting Setup', icon: <Lightbulb className="w-4 h-4" /> },
      { label: 'Cycles vs Eevee Render Engines', icon: <Video className="w-4 h-4" /> },
      { label: 'Compositing Basics', icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    title: '6. Introduction to Animation',
    topics: [
      { label: 'Keyframes & Timeline', icon: <Video className="w-4 h-4" /> },
      { label: 'Rigging Basics', icon: <PenTool className="w-4 h-4" /> },
      { label: 'Walk Cycles', icon: <Video className="w-4 h-4" /> },
    ],
  },
  {
    title: '7. Capstone Project',
    topics: [
      { label: 'Create a Complete 3D Environment Scene', icon: <Monitor className="w-4 h-4" /> },
      { label: 'Portfolio Rendering', icon: <Palette className="w-4 h-4" /> },
    ],
  },
]

export default function ThreeDLearnSyllabus() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-background text-foreground py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">3D Design Syllabus</h2>
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
